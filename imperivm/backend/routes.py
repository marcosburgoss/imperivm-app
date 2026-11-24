from flask import jsonify, request
from .controllers import getUnidades, getUnidad, getHabilidades, getHabilidad, getHabilidadesUnidad, getUnidadesHabilidad, getUnidadesByCivilizacion
import pandas as pd

def appRoutes(app, model):
    @app.route('/')
    def index():
        return '¡Servidor Flask funcionando correctamente!'

    @app.route('/unidades', methods=['GET'])
    def unidades():
        return jsonify(getUnidades())

    @app.route('/unidad/<int:id>', methods=['GET'])
    def unidad(id):
        return jsonify(getUnidad(id))
    
    @app.route('/habilidades', methods=['GET'])
    def habilidades():
        return jsonify(getHabilidades())
    
    @app.route('/habilidad/<int:id>', methods=['GET'])
    def habilidad(id):
        return jsonify(getHabilidad(id))
    
    @app.route('/habilidades/<int:id>', methods=['GET'])
    def habilidadesUnidad(id):
        return jsonify(getHabilidadesUnidad(id))
    
    @app.route('/unidades/<int:id>', methods=['GET'])
    def unidadesHabilidad(id):
        return jsonify(getUnidadesHabilidad(id))
    
    # Ruta para predecir el resultado de un enfrentamiento entre unidades
    @app.route('/predecir', methods=['POST'])
    def prediccion():
        data = request.json
        id1 = data['id1']
        id2 = data['id2']
        cant1 = data['c1']
        cant2 = data['c2']
        nivel1 = data['n1']
        nivel2 = data['n2']
        civ1 = data['civ1']
        civ2 = data['civ2']
        
        mensaje = []
        valor = []
        
        case = 0
        
        # Controrar los casos posibles de comparación
        if civ1 != 'ARMY' and civ2 != 'ARMY':
            case = 1 # 1 vs 1
        elif civ1 == 'ARMY' and civ2 != 'ARMY':
            case = 2 # ARMY vs 1
        elif civ1 != 'ARMY' and civ2 == 'ARMY':
            case = 3 # 1 vs ARMY
        elif civ1 == 'ARMY' and civ2 == 'ARMY':
            case = 4 # ARMY vs ARMY
        else:
            return jsonify({'probabilidad_victoria': 0, 'mensaje': 'Error al procesar la solicitud'})
        
        print("Este es el caso número: ", case)
        # Obtener las unidades a comparar
        if case == 1:
            if id1 == 0 and id2 != 0:
                unidad1 = getUnidadesByCivilizacion(civ1)
                unidad2 = getUnidad(id2)
            elif id1 != 0 and id2 == 0:
                unidad1 = getUnidad(id1)
                unidad2 = getUnidadesByCivilizacion(civ2)
            elif id1 != 0 and id2 != 0:
                unidad1 = getUnidad(id1)
                unidad2 = getUnidad(id2)
            else:
                return jsonify({'probabilidad_victoria': 0, 'mensaje': 'Error al procesar la solicitud'})
            
            unidad1 = ensureList(unidad1)
            unidad2 = ensureList(unidad2)
            unidad1, unidad2 = equilizeUnitsLength(unidad1, unidad2)
            
        if case == 2:
            unidad1 = [getUnidad(id)[0] for id in id1 if id != 0]
            if id2 == 0:
                unidad2 = getUnidadesByCivilizacion(civ2)
            else:
                unidad2 = getUnidad(id2)
                
            unidad2 = ensureList(unidad2)
        
        if case == 3:
            unidad2 = [getUnidad(id)[0] for id in id2 if id != 0]
            if id1 == 0:
                unidad1 = getUnidadesByCivilizacion(civ1)
            else:
                unidad1 = getUnidad(id1)
            
            unidad1 = ensureList(unidad1)
        
        if case == 4:
            unidad1 = [getUnidad(id)[0] for id in id1 if id != 0]
            unidad2 = [getUnidad(id)[0] for id in id2 if id != 0]
        
        unit1 = pd.DataFrame(unidad1, columns=['id', 'civilizacion', 'civilizacion2', 'nombre', 'salud_1', 'ataque_1', 'alcance_1', 'defensa_1', 'velocidad_1', 'cantidad_1', 'coste', 'moneda', 'alias', 'imagen','tipo'])
        unit2 = pd.DataFrame(unidad2, columns=['id', 'civilizacion', 'civilizacion2', 'nombre', 'salud_2', 'ataque_2', 'alcance_2', 'defensa_2', 'velocidad_2', 'cantidad_2', 'coste', 'moneda', 'alias', 'imagen','tipo'])
        
        # Ajustar las cantidades y niveles de las unidades
        if case == 1:
            unit1['cantidad_1'] = cant1
            unit2['cantidad_2'] = cant2
            
            unit1['ataque_1'] = (unit1['ataque_1'] + (unit1['alcance_1']/500) + nivel1-1) * unit1['cantidad_1']
            unit1['defensa_1'] = (unit1['defensa_1'] + nivel1-1) * unit1['cantidad_1']
            unit2['ataque_2'] = (unit2['ataque_2'] + (unit2['alcance_2']/500) + nivel2-1) * unit2['cantidad_2']
            unit2['defensa_2'] = (unit2['defensa_2'] + nivel2-1) * unit2['cantidad_2']
            
            if unit1['tipo'].values[0] == 'BaseMage': unit1['ataque_1'] = 0
            if unit2['tipo'].values[0] == 'BaseMage': unit2['ataque_2'] = 0
            
        if case == 2:
            unit1['cantidad_1'] = unit1.apply(lambda row: cant1[row.name] if row.name < len(cant1) else 0, axis=1)
            unit2['cantidad_2'] = cant2
            
            unit1['ataque_1'] = unit1.apply(lambda row: (row['ataque_1'] + (row['alcance_1']/500) + nivel1[row.name] - 1) if row.name < len(nivel1) else row['ataque_1'], axis=1) * unit1['cantidad_1']  
            unit1['defensa_1'] = unit1.apply(lambda row: (row['defensa_1'] + nivel1[row.name] - 1) if row.name < len(nivel1) else row['defensa_1'], axis=1) * unit1['cantidad_1']
            unit2['ataque_2'] = (unit2['ataque_2'] + (unit2['alcance_2']/500) + nivel2-1) * unit2['cantidad_2']
            unit2['defensa_2'] = (unit2['defensa_2'] + nivel2-1) * unit2['cantidad_2']
            
            if unit2['tipo'].values[0] == 'BaseMage': unit2['ataque_2'] = 0
            
        if case == 3:
            unit1['cantidad_1'] = cant1
            unit2['cantidad_2'] = unit2.apply(lambda row: cant2[row.name] if row.name < len(cant2) else 0, axis=1)
            
            unit1['ataque_1'] = (unit1['ataque_1'] + (unit1['alcance_1']/500) + nivel1-1) * unit1['cantidad_1']
            unit1['defensa_1'] = (unit1['defensa_1'] + nivel1-1) * unit1['cantidad_1']
            unit2['ataque_2'] = unit2.apply(lambda row: (row['ataque_2'] + (row['alcance_2']/500) + nivel2[row.name] - 1) if row.name < len(nivel2) else row['ataque_2'], axis=1) * unit2['cantidad_2']
            unit2['defensa_2'] = unit2.apply(lambda row: (row['defensa_2'] + nivel2[row.name] - 1) if row.name < len(nivel2) else row['defensa_2'], axis=1) * unit2['cantidad_2']
        
            if unit1['tipo'].values[0] == 'BaseMage': unit1['ataque_1'] = 0
        
        if case == 4:
            unit1['cantidad_1'] = unit1.apply(lambda row: cant1[row.name] if row.name < len(cant1) else 0, axis=1)
            unit2['cantidad_2'] = unit2.apply(lambda row: cant2[row.name] if row.name < len(cant2) else 0, axis=1)
            
            unit1['ataque_1'] = unit1.apply(lambda row: (row['ataque_1'] + (row['alcance_1']/500) + nivel1[row.name] - 1) if row.name < len(nivel1) else row['ataque_1'], axis=1) * unit1['cantidad_1']
            unit1['defensa_1'] = unit1.apply(lambda row: (row['defensa_1'] + nivel1[row.name] - 1) if row.name < len(nivel1) else row['defensa_1'], axis=1) * unit1['cantidad_1']
            unit2['ataque_2'] = unit2.apply(lambda row: (row['ataque_2'] + (row['alcance_2']/500) + nivel2[row.name] - 1) if row.name < len(nivel2) else row['ataque_2'], axis=1) * unit2['cantidad_2']
            unit2['defensa_2'] = unit2.apply(lambda row: (row['defensa_2'] + nivel2[row.name] - 1) if row.name < len(nivel2) else row['defensa_2'], axis=1) * unit2['cantidad_2']

        unit1['salud_1'] = unit1['salud_1'] * unit1['cantidad_1']
        unit2['salud_2'] = (unit2['salud_2']) * unit2['cantidad_2']
        
        cols1 = ['salud_1', 'ataque_1', 'defensa_1', 'cantidad_1']
        cols2 = ['salud_2', 'ataque_2', 'defensa_2', 'cantidad_2']
        
        unit1 = unit1[cols1]
        unit2 = unit2[cols2]
        
        if case == 2:
            unit1 = unit1[['salud_1', 'ataque_1', 'defensa_1', 'cantidad_1']].sum().to_frame().T
            unit1 = pd.concat([unit1] * len(unit2), ignore_index=True)
        if case == 3:
            unit2 = unit2[['salud_2', 'ataque_2', 'defensa_2', 'cantidad_2']].sum().to_frame().T
            unit2 = pd.concat([unit2] * len(unit1), ignore_index=True)
        if case == 4:
            unit1 = unit1[['salud_1', 'ataque_1', 'defensa_1', 'cantidad_1']].sum().to_frame().T
            unit2 = unit2[['salud_2', 'ataque_2', 'defensa_2', 'cantidad_2']].sum().to_frame().T
            
        data = pd.concat([unit1, unit2], axis=1)
        
        print(data)
        
        ref_salud = 3000
        ref_ataque = 120
        ref_defensa = 200
        ref_cantidad = 100
        
        data['salud_1'] = data['salud_1'] / ref_salud
        data['ataque_1'] = data['ataque_1'] / ref_ataque
        data['defensa_1'] = data['defensa_1'] / ref_defensa
        data['cantidad_1'] = data['cantidad_1'] / ref_cantidad
        data['salud_2'] = data['salud_2'] / ref_salud
        data['ataque_2'] = data['ataque_2'] / ref_ataque
        data['defensa_2'] = data['defensa_2'] / ref_defensa
        data['cantidad_2'] = data['cantidad_2'] / ref_cantidad
        
        # Probabilidad de victoria
        for index, row in data.iterrows():
            probabilidad_victoria = model.predict(row.values.reshape(1, -1))
            if row['ataque_1'] == 0 and row['ataque_2'] != 0:
                valor.append(0)
                mensaje.append('La unidad 1 no puede atacar')
            elif row['ataque_1'] != 0 and row['ataque_2'] == 0:
                valor.append(100)
                mensaje.append('La unidad 2 no puede atacar')
            elif row['ataque_1'] == 0 and row['ataque_2'] == 0:
                valor.append(50)
                mensaje.append('Ambas unidades no pueden atacar')
            else:
                valor.append(float(round(probabilidad_victoria[0][0] * 100, 2)))
                mensaje.append('')
            
        # Limitar los decimales a 2 en la lista valor
        valor = [float(f"{v:.2f}") for v in valor]

        return jsonify({'probabilidad_victoria': valor, 'mensaje': mensaje, 'unidad1': unidad1, 'unidad2': unidad2, 'caso': case})
    
# Función para igualar la longitud de las unidades a comparar en caso de que sean diferentes de longitud
def equilizeUnitsLength(unidad1, unidad2):
    len_unidad1 = len(unidad1)
    len_unidad2 = len(unidad2)

    if len_unidad1 > len_unidad2:
        unidad2 *= len_unidad1 // len_unidad2
        unidad2 += unidad2[:len_unidad1 % len_unidad2]
    elif len_unidad2 > len_unidad1:
        unidad1 *= len_unidad2 // len_unidad1
        unidad1 += unidad1[:len_unidad2 % len_unidad1]
    
    return unidad1, unidad2

# Función para asegurarse de que la unidad sea una lista 
def ensureList(unidad):
    if not isinstance(unidad, list):
        unidad = [unidad]
    return unidad
import os

import mysql.connector

db = mysql.connector.connect(
    host=os.environ.get('MYSQL_HOST', 'localhost'),
    port=int(os.environ.get('MYSQL_PORT', '3306')),
    user=os.environ.get('MYSQL_USER', 'imperivm'),
    password=os.environ.get('MYSQL_PASSWORD', 'imperivm'),
    database=os.environ.get('MYSQL_DATABASE', 'imperivm')
)

def getUnidades():
    cursor = db.cursor()
    cursor.execute('SELECT * FROM unidades')
    unidades = cursor.fetchall()
    cursor.close()
    return unidades

def getUnidad(id):
    cursor = db.cursor()
    cursor.execute('SELECT * FROM unidades WHERE id = %s', (id,))
    unidad = cursor.fetchall()
    cursor.close()
    return unidad

def getHabilidades():
    cursor = db.cursor()
    cursor.execute('SELECT * FROM habilidades')
    habilidades = cursor.fetchall()
    cursor.close()
    return habilidades

def getHabilidad(id):
    cursor = db.cursor()
    cursor.execute('SELECT * FROM habilidades WHERE id = %s', (id,))
    habilidad = cursor.fetchone()
    cursor.close()
    return habilidad

# Obtener habilidades de una unidad
def getHabilidadesUnidad(id):
    cursor = db.cursor()
    cursor.execute('''
        SELECT h.id, h.nombre, h.descripcion, h.energia, h.alias, h.imagen 
        FROM habilidades as h 
        INNER JOIN unidades_habilidades as uh ON h.id = uh.id_habilidad 
        INNER JOIN unidades as u ON uh.id_unidad = u.id 
        WHERE uh.id_unidad = %s
    ''', (id,))
    habilidades = cursor.fetchall()
    cursor.close()
    return habilidades

# Obtener unidades de una habilidad y mostrar el nombre de la habilidad
def getUnidadesHabilidad(id):
    cursor = db.cursor()
    cursor.execute('''
        SELECT h.id, h.nombre, h.descripcion, u.id, u.nombre, u.civilizacion 
        FROM unidades as u 
        INNER JOIN unidades_habilidades as uh ON u.id = uh.id_unidad 
        INNER JOIN habilidades as h ON uh.id_habilidad = h.id 
        WHERE uh.id_habilidad = %s
    ''', (id,))
    unidades = cursor.fetchall()
    cursor.close()
    return unidades

def getEnfrentamientos():
    cursor = db.cursor()
    cursor.execute('''
        SELECT u1.salud, u1.ataque, u1.defensa, u1.coste, u2.salud, u2.ataque, u2.defensa, u2.coste, e.resultado 
        FROM enfrentamientos as e 
        INNER JOIN unidades as u1 ON e.id_unidad_1 = u1.id 
        INNER JOIN unidades as u2 ON e.id_unidad_2 = u2.id
    ''')
    enfrentamientos = cursor.fetchall()
    cursor.close()
    return enfrentamientos

def getEnfrentamientos2():
    cursor = db.cursor()
    cursor.execute('''
        SELECT u1.salud, u1.ataque, u1.defensa, u1.coste, u2.salud, u2.ataque, u2.defensa, u2.coste, 'Victoria' as resultado 
        FROM enfrentamientos as e 
        INNER JOIN unidades as u2 ON e.id_unidad_1 = u2.id 
        INNER JOIN unidades as u1 ON e.id_unidad_2 = u1.id
    ''')
    enfrentamientos = cursor.fetchall()
    cursor.close()
    return enfrentamientos

def getUnidadesByCivilizacion(civilizacion):
    cursor = db.cursor()
    cursor.execute('SELECT * FROM unidades WHERE civilizacion = %s', (civilizacion,))
    unidades = cursor.fetchall()
    cursor.close()
    return unidades
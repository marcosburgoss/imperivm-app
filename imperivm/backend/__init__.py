from flask import Flask
from flask_cors import CORS
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from keras.models import Sequential
from keras.layers import Dense
from .routes import appRoutes
from .controllers import getEnfrentamientos, getEnfrentamientos2

# Función que recoge los datos de dos funciones diferentes y los combina en una sola lista.
def getTrainingData():
    data = getEnfrentamientos()
    data2 = getEnfrentamientos2()
    data.extend(data2)
    return data

# Función que toma los datos de la función anterior y los prepara para ser usados en el modelo.
def prepareData(data):
    data = pd.DataFrame(data, columns=['salud_1', 'ataque_1', 'defensa_1', 'cantidad_1', 'salud_2', 'ataque_2', 'defensa_2', 'cantidad_2', 'resultado'])
    data['resultado'] = data['resultado'].apply(lambda row: 1 if row == 'Victoria' else 0)
    c1 = data.apply(lambda row: row['cantidad_1'] / row['cantidad_2'] if row['cantidad_1'] > row['cantidad_2'] else 1, axis=1)
    c2 = data.apply(lambda row: row['cantidad_2'] / row['cantidad_1'] if row['cantidad_2'] > row['cantidad_1'] else 1, axis=1)
    data['cantidad_1'] = c1
    data['cantidad_2'] = c2
    return data

# Función que divide los datos en conjuntos de entrenamiento y prueba.
def splitData(data):
    x_cols = ['salud_1', 'ataque_1', 'defensa_1', 'cantidad_1', 'salud_2', 'ataque_2', 'defensa_2', 'cantidad_2']
    y_cols = 'resultado'
    x = data[x_cols]
    y = data[y_cols]
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=45)
    return x_train, x_test, y_train, y_test

# Función que normaliza los datos de entrenamiento dividiendo cada columna por un valor de referencia.
def normalizeData(x_train, x_test):
    ref_salud = 3000
    ref_ataque = 200
    ref_defensa = 200
    ref_cantidad = 100
    x_train['salud_1'] = x_train['salud_1'] / ref_salud
    x_train['ataque_1'] = x_train['ataque_1'] / ref_ataque
    x_train['defensa_1'] = x_train['defensa_1'] / ref_defensa
    x_train['cantidad_1'] = x_train['cantidad_1'] / ref_cantidad
    x_train['salud_2'] = x_train['salud_2'] / ref_salud
    x_train['ataque_2'] = x_train['ataque_2'] / ref_ataque
    x_train['defensa_2'] = x_train['defensa_2'] / ref_defensa
    x_train['cantidad_2'] = x_train['cantidad_2'] / ref_cantidad
    return x_train

# Función que crea y entrena un modelo de red neuronal con los datos de entrenamiento.
def crateModel(x_train, y_train, x_test, y_test):
    model = Sequential()
    model.add(Dense(16, activation='relu', input_dim=x_train.shape[1])) # Probar con 16/32 si no cuadra
    model.add(Dense(1, activation='sigmoid'))
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    model.fit(x_train, y_train, epochs=30, batch_size=64, validation_data=(x_test, y_test)) # Probar con 10/100 si no cuadra
    return model
    
# Función que crea una aplicación Flask y la configura con CORS, los datos de entrenamiento, el modelo y las rutas.
def createApp():
    app = Flask(__name__)
    CORS(app)
    data = getTrainingData()
    data = prepareData(data)
    x_train, x_test, y_train, y_test = splitData(data)
    x_train = normalizeData(x_train, x_test)
    model = crateModel(x_train, y_train, x_test, y_test)
    appRoutes(app, model)
    return app
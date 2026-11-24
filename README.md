# Imperivm

Aplicación para explorar unidades y habilidades de Imperivm III y estimar resultados de enfrentamientos. El proyecto incluye un frontend Angular, una API Flask y scripts SQL con los datos iniciales.

## Requisitos

- Docker Desktop (o Docker Engine) con Docker Compose.
- Git para clonar el repositorio.

No es necesario instalar Python, Node.js ni MySQL en el equipo: se ejecutan dentro de contenedores.

## Arranque rápido

Desde la carpeta raíz del repositorio:

```powershell
Copy-Item .env.example .env
docker compose up --build
```

La primera ejecución construye las imágenes, crea la base de datos y carga los datos de `unidades`, `habilidades`, `unidades_habilidades` y `enfrentamientos`. Después inicia la API y, cuando responde, sirve la aplicación web.

- Aplicación: <http://localhost:8080>
- API: <http://localhost:5000>

La primera carga y el entrenamiento del modelo pueden tardar unos minutos. Para ver el progreso:

```powershell
docker compose logs -f db backend frontend
```

Detén los servicios con `Ctrl+C` y, si se iniciaron en segundo plano, con:

```powershell
docker compose down
```

Los datos de MySQL se conservan en un volumen de Docker. Para borrar la base de datos local y volver a cargar los scripts desde cero, ejecuta `docker compose down -v` y luego `docker compose up --build`. **Ese comando elimina los datos guardados en el volumen.**

## Configuración

`docker compose` usa los valores locales de `.env.example` si no existe `.env`. Puedes copiar el ejemplo y editarlo para cambiar el nombre de la base de datos o sus credenciales. `.env` está excluido de Git; no guardes contraseñas reales en el repositorio.

Los scripts de inicialización se ejecutan solo cuando MySQL crea un volumen vacío, en este orden:

1. `DB/unidades.sql`
2. `DB/habilidades.sql`
3. `DB/unidades_habilidades.sql`
4. `DB/enfrentamientos.sql`

Los scripts SQL de análisis y consultas auxiliares que no necesita la aplicación, así como los scripts `.R`, se excluyen del repositorio mediante `.gitignore`; siguen en tu copia local.

## Estructura

- `imperivm/backend/`: API Flask y modelo de predicción.
- `imperivm/frontend/angular/`: aplicación Angular.
- `DB/`: scripts SQL necesarios para inicializar la base de datos y los datos auxiliares que no se hayan excluido.
- `MEMORIA PROYECTO - MARCOS BURGOS.pdf`: memoria del proyecto.

## Arranque manual (desarrollo)

La opción recomendada es Compose, ya que prepara la base de datos y coordina el orden de inicio. Si necesitas ejecutar el frontend y el backend fuera de Docker, primero configura una instancia MySQL con los scripts anteriores y las variables `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_DATABASE`, `MYSQL_USER` y `MYSQL_PASSWORD`; instala `imperivm/backend/requirements.txt`, ejecuta `python imperivm/run.py` y, después, desde `imperivm/frontend/angular`, ejecuta `npm ci` y `npm start`.

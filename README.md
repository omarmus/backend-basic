# Backend

## Instalando Node.js v8.x:

NOTA.- Debian Wheezy no soporta Node 10

``` bash
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install -y nodejs
```

## Instalando el proyecto

Siga los siguientes pasos:

``` bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor y crear la base de datos del proyecto en http://localhost:3000
npm run dev

# 3. Una vez creada la base de datos ejecutar los seeders(datos de prueba) de las tablas de la base de datos
npm run seeders

# 4. Probar api automático del sistema de companies y users
curl -X GET \
  http://localhost:3000/model/companies

curl -X GET \
  http://localhost:3000/model/users

````

## Agregar modelos

- Cuando crea un modelo en la carpeta models, este se cargará automáticamente y su api-rest estará disponible de manera automática, los enpoints disponibles son:

```
create  POST /resource
get     GET /resource/:id
query   GET /resource
remove  DELETE /resource/:id
update  PUT /resource/:id
```

Para más opciones de los endpoins puede revisar [Sequelize handler](https://www.npmjs.com/package/sequelize-handlers).

- Se debe seguir la misma estructura que los modelos de prueba(companies, users).

- Para agregar relaciones entre los modelos se debe hacerlo en el archivo `model/associations.js`.

## API

- En el archivo `api.js` puede agregar sus endpoins personalizados bajo la ruta `http://localhost:3000/api/[endpoint-personalizado]`


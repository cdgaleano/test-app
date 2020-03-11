This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `Modo desarrollo`  
Primero  instalar librerias  <br />
run yarn <br />

depues situarse en la carpeta mock <br />
cd /mock
correr comando  para levantar con json-server el listado de pedidos<br />
### `json-server -p 4000 orders.json `

depues levantar la app <br />
### `yarn start`
App en modo desarrollo corre en <br />

Open [http://localhost:3000](http://localhost:3000) para verlo.

### `Modo Produccion`
correr yarn  
y depues copiar carpeta Build al server
### `yarn build`

y preparar un servidor que regrese el json de pedidos


Los Datos los levanta del un mock
El menu es dinamico, levanta los los items de un file simil server

los items de pedidos esta realizada con redux con axios, pero para no agregar otro proyecto(se puede implementar json-server)  lo levanto de un mock pero la logica es hecha como si estuviera con axios

saludos Daniel


PRE ENTREGA: manejo de estructuras, APIS y lógica dinámica.
  
  Objetivo: Crear una aplicación de terminal que permita a los usuarios interactuar con una tienda en línea utilizando comandos. La aplicación se comunicará con la FakeStore API para realizar operaciones como consultar productos, crear nuevos productos y eliminar productos existentes.
  
  Requerimientos del Proyecto 
  
  Requerimiento #1: Configuración Inicial
   Crea un directorio donde alojarás tu proyecto e incluye un archivo index.js como punto de entrada.
   Inicia Node.js y configura npm usando el comando npm init -y.
   Agrega la propiedad "type": "module" en el archivo package.json para habilitar ESModules.
   Configura un script llamado start para ejecutar el programa con el comando npm run start.
   
  Requerimiento #2: Lógica de Gestión de Productos
   Se utilizara process.argv para capturar los comandos, 
   fetch para las peticiones a FakeStore API, y 
   destructuring/spread para manipular la información.

   Captura de los argumentos ingresados en la terminal
       process.argv devuelve un array con los argumentos, donde los primeros dos elementos son el path del ejecutable de Node 
       y el path del script, respectivamente. Contiene los argumentos pasados.
       
       los dos primeros elementos de process.argv son el path del ejecutable de Node y el path del script, respectivamente.
       El resto de los elementos son los argumentos pasados por el usuario.
 
       Se usará destructuring para extraer el método HTTP, el recurso y los parámetros adicionales de los comandos ingresados.   
 
  
  Con la base del proyecto lista, implementar las funcionalidades principales usando la API FakeStore. 
  El sistema debe ser capaz de interpretar comandos ingresados en la terminal y ejecutar las siguientes acciones:
   a. Consultar Todos los Productos
   b. Consultar un Producto Específico
   c. Crear un Producto Nuevo
   d. Eliminar un Producto

 Como deberá ejecutarse este codigo en la terminal, se pueden usar comandos como:
     npm run start -- GET products
     npm run start -- GET products/1
     npm run start -- POST products "Nuevo Producto" 19.99 "Categoría"
     npm run start -- DELETE products/1   


🛒 Fake Store API - CLI Client
Un cliente de línea de comandos (CLI) construido con Node.js puro para interactuar con la Fake Store API. Permite consultar, crear y eliminar productos directamente desde la terminal.

✨ Características
Consultar productos: Obtén la lista completa de productos o busca uno específico por su ID.
Crear productos: Añade nuevos productos a la API mediante peticiones POST.
Eliminar productos: Elimina productos específicos mediante su ID.
Código limpio: Arquitectura basada en un diccionario de rutas (Router Pattern) para fácil escalabilidad.
Manejo de errores robusto: Validación de argumentos antes de la petición y manejo de errores HTTP (404, 500, etc.) durante la comunicación con la API.


📋 Requisitos Previos
Node.js (v18.0.0 o superior recomendado, ya que utiliza fetch nativo).
No se requieren dependencias externas (npm install no es necesario).


🚀 Instalación
Clona el repositorio:
git clone https://github.com/TU_USUARIO/fakestore-cli-client.git
Navega al directorio del proyecto:

cd fakestore-cli-client

💻 Uso
El script se ejecuta utilizando Node.js, pasando el método HTTP, el recurso y los parámetros necesarios.

Estructura del comando

node app.js <METODO> <RECURSO> [PARAMETROS]

Cómo obtener los productos
1. Obtener todos los productos (GET)
Devuelve un array JSON con todos los productos disponibles.

node app.js GET products/2

3. Crear un nuevo producto (POST)
Añade un producto nuevo. Se deben pasar el título, el precio y la categoría como parámetros adicionales.
(Nota: Usa comillas para los textos con espacios).

node app.js POST products "Camiseta deportiva" 29.99 "ropa"

4. Eliminar un producto (DELETE)
Elimina el producto con el ID especificado.

node app.js DELETE products/7

Arquitectura y Decisiones de Diseño
Destructuración de argumentos: 
Se utiliza const [,, method, resource, ...params] = process.argv;
    para ignorar los dos primeros elementos por defecto de Node y capturar limpiamente las instrucciones del usuario.

Validación Temprana: Se validan los parámetros requeridos para el método POST antes de realizar la llamada a la red, ahorrando recursos y proporcionando mensajes de error claros al usuario.

    Manejo de fetch: Se implementó la validación de response.ok, ya que fetch no lanza excepciones por defecto ante códigos de estado HTTP de error (4xx, 5xx).

📜 Licencia
Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo.

---

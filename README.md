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

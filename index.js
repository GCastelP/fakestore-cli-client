

/**
 * PRE ENTREGA: manejo de estructuras, APIS y lógica dinámica.
 * 
 * Objetivo: Crear una aplicación de terminal que permita a los usuarios interactuar con una tienda en línea utilizando comandos. La aplicación se comunicará con la FakeStore API para realizar operaciones como consultar productos, crear nuevos productos y eliminar productos existentes.
 * 
 * Requerimientos del Proyecto 
 * 
 * Requerimiento #1: Configuración Inicial
 *  Crea un directorio donde alojarás tu proyecto e incluye un archivo index.js como punto de entrada.
 *  Inicia Node.js y configura npm usando el comando npm init -y.
 *  Agrega la propiedad "type": "module" en el archivo package.json para habilitar ESModules.
 *  Configura un script llamado start para ejecutar el programa con el comando npm run start.
 *  *  
 * Requerimiento #2: Lógica de Gestión de Productos
 *  Se utilizara process.argv para capturar los comandos, 
 *  fetch para las peticiones a FakeStore API, y 
 *  destructuring/spread para manipular la información.
 * 
 * Con la base del proyecto lista, implementar las funcionalidades principales usando la API FakeStore. 
 * El sistema debe ser capaz de interpretar comandos ingresados en la terminal y ejecutar las siguientes acciones:
 *  a. Consultar Todos los Productos
 *  b. Consultar un Producto Específico
 *  c. Crear un Producto Nuevo
 *  d. Eliminar un Producto
 *  
 */

const BASE_URL = 'https://fakestoreapi.com';
/**
 * 1. Captura de los argumentos ingresados en la terminal
 *      process.argv devuelve un array con los argumentos, donde los primeros dos elementos son el path del ejecutable de Node 
 *      y el path del script, respectivamente. Contiene los argumentos pasados.
 *      
 *      los dos primeros elementos de process.argv son el path del ejecutable de Node y el path del script, respectivamente.
 *      El resto de los elementos son los argumentos pasados por el usuario.
 *
 *      Se usará destructuring para extraer el método HTTP, el recurso y los parámetros adicionales de los comandos ingresados.
 * 
 * 
 * 
 * Como deberá ejecutarse este codigo en la terminal, se pueden usar comandos como:
*   npm run start -- GET products
*   npm run start -- GET products/1
*   npm run start -- POST products "Nuevo Producto" 19.99 "Categoría"
*   npm run start -- DELETE products/1   
 */

const [,, methodArg, resourceArg, ...params] = process.argv;
const upperMethod = methodArg?.toUpperCase(); // Convertir el método a mayúsculas para estandarizar
const [resource,id] = resourceArg?.split('/') || []; // Separar el recurso y el ID si es necesario

// Funcion principal asincronica para manejar las operaciones según el método HTTP y el recurso solicitado
/********** Funciones para cada operación **********/

// Función para consultar todos los productos

const main = async () => {
    try {

        // Función para consultar un producto
        if (upperMethod === 'GET' && resource === 'products') {
            const response = await fetch(`${BASE_URL}/products`);

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
            }

            const products = await response.json();
            console.log(products);
        }


        // Función para consultar un producto específico por ID
        else if (upperMethod === 'GET' && resource ==='products/'&& id) {
            const response = await fetch(`${BASE_URL}/products/${id}`);

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
            }           
            
            const product = await response.json();
            console.log(product);          
        }   


        // Función para crear un nuevo producto
        else if (upperMethod === 'POST' && resource === 'products') {
            const [title, price, category] = params;

            // Validacion de datos antes de hacer la peticion POST
            if (!title || !price || !category) {
                console.log('Error: Para crear un producto, debes proporcionar el título, el precio y la categoría.');
                return;
            }

            const newProduct = {
                title,
                price: parseFloat(price),
                category
            };

            const response = await fetch(`${BASE_URL}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify(newProduct)
            });
            
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
            };

            const createdProduct = await response.json();
            console.log(createdProduct);
        }   

        // Función para eliminar un producto por ID
        else if (upperMethod === 'DELETE' && resource === 'products/' && id) {
            const response = await fetch(`${BASE_URL}/products/${id}`, {
                method: 'DELETE'
            }); 

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
            }
            const deletedProduct = await response.json();
            console.log('Producto eliminado.', deletedProduct);
        }   
        else {
            console.log('Comando no reconocido. Por favor, ingresa un comando válido.');
            console.log('  GET products                    - Listar todos los productos');
            console.log('  GET products/1                  - Obtener producto con ID 1');
            console.log('  POST products "Producto" 99.99 "Electronics" - Crear nuevo producto');
            console.log('  DELETE products/1              - Eliminar producto con ID 1');
        }
    } catch (error) {
        console.error('Error:', error);
    }   

};

main(); 


Mi proyecto

Mi proyecto es acerca de un emprendimiento que tuve antes de la pandemia. La idea fue realizar un catálogo con los productos que se producen, con las especificaciones y detalles del mismo y poder encargarlos desde el mismo sitio.

Empezando
Para ejecutar este proyecto localmente, siga estos pasos:

Clona este repositorio en tu máquina local 

Instale dependencias usando npm o hilo:

npm install

Abra su navegador y navegue hasta http://localhost:3000 para ver el sitio web.


Organización del proyecto:

Nabvar: componente que contiene los links para poder navegar desde la barra de navegación

Item: componente que contiene la card con foto y nombre de producto, una vista simplificada de cada producto, linkeado al ItemDetail para poderver las especificaciones del artículo.

ItemList: componente que muetra la lista de todos los productos que contiene el sitio pudiendo clasificarlos por categorías.

ItemCount: componente que permite seleccionar la cantidad de cada producto que el cliente desea.

ItemDetail: componente que muestra el articulo con foto, descripción ytiempo de demora.

Cart: contiene los productos seleccionados en el carrito.

ItemCart: componente que muestra una descripción simplificada del articulo seleccionado, cantidad y valor.

CartContext: componente que gestiona el estado del carrito de compras en toda la aplicación.

Item DetailContainer:contiene la lógica para poder ver los productos clasificados por categorías.

CartWidget: un componente que muestra la cantidad de artículos en el carrito y permite a los usuarios navegar hasta su carrito.

Form:contiene el formulario que debe completar el cliente al momento de concretar el pedido

firebase: contiene los ajustes de configuración de Firebase.



Librerias:

Para poder darle estilo a mi proyecto utilice:

Sass: para darle un estilo general al proyecto

React-Boostrap: ulilice los componentes que ofrece la libreria para darle formato a las card y botones.

Taildwind: para darle estilos específicos dentro de cada componente.



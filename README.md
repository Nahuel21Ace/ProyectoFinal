Manejo de rutas: 

En el .env se debe completar con el usuario y la contraseña del mail desde el cual se mandaran los mensajes de orden recibida.

Rutas sin inicio de sesion

    GET / muestra el inicio.
    GET /productos muestra el listado de productos existentes.
    GET /productos/busqueda: utiliza el buscador de productos.
    GET /ingresar muestra el formulario de logueo (requiere correo y password).
    GET /registrarse: muestra el formulario de registro (para el formulario requiere el name, lastName, address, age, phoneNumber, photo(imagen), correo y password).
    GET /ingresar/errorIngresar muestra una pagina en caso de error.
    GET /ingresar/errorRegistro muestra una pagina en caso de error al registrarse.
    POST /ingresar corrobora los datos del formulario ingresar.
    POST /registrarse corrobora los datos del formulario registrarse.

Rutas con sesion usuario comprador iniciada (por defecto)

    GET / muestra el inicio.
    GET /productos muestra el listado de productos existentes.
    GET /productos/busqueda: utiliza el buscador de productos.
    GET /carrito muestra el carrito del usuario.
    GET /chat muestra el chat.
    GET /salir cierre de sesion.
    POST /carrito permite al usuario rellenar el carrito.
    POST /carrito/producto: permite al asuario borrar productos del carrito segun el id del producto.
    POST /compras: permite al usuario proceder con la compra de los productos seleccionados.
    DELETE /carrito: permite al usuario borrar el carrito.

Rutas de administrador.

    Para definir si el usuario a crear es admin o no debe hacerse manualmente desde el codigo.
    En /service/user, linea 22, debe alternarse el boolean de admin a true o false dependiendo si se quiere crear un usuario o un admin. Siendo true un usuario administrador y false un usuario comprador

    GET / muestra el inicio.
    GET /productos muestra el listado de productos existentes y el formulario de carga de nuevos productos.
    GET /productos/busqueda: utiliza el buscador de productos.
    GET /chat muestra el chat.
    GET /salir cierre de sesion.
    POST /productos: Permite publicar nuevos productos con los datos requeridos del formulario.
    PUT /productos/id: Permite actualizar productos con los datos requeridos del formulario.
    DELETE /productos/id: permite eliminar productos segun su id.

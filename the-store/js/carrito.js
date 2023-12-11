// carrito.js
document.addEventListener("DOMContentLoaded", function () {
    cargarProductosEnCarrito();

    function cargarProductosEnCarrito() {
        const carritoContainer = document.querySelector(".carrito-container");
    
        // Recorrer el arreglo de productos y crear elementos HTML para mostrar la información
        products.forEach(producto => {
            const productoDiv = document.createElement("div");
            productoDiv.classList.add("producto-carrito");
    
            // Crear elementos para mostrar la información del producto
            const imagen = document.createElement("img");
            imagen.src = producto.image;
            imagen.alt = producto.name;
    
            const nombre = document.createElement("h3");
            nombre.textContent = producto.name;
    
            const precio = document.createElement("p");
            precio.textContent = `Precio: ${producto.price}`;
    
            const cantidad = document.createElement("p");
            cantidad.textContent = `Cantidad: ${producto.quantity}`;
    
            const total = document.createElement("p");
            total.textContent = `Total: ${producto.price * producto.quantity}`;
            // Agregar elementos al contenedor del producto
            productoDiv.appendChild(imagen);
            productoDiv.appendChild(nombre);
            productoDiv.appendChild(precio);
            productoDiv.appendChild(cantidad);
            productoDiv.appendChild(total);
            // Agregar el contenedor del producto al contenedor del carrito
            carritoContainer.appendChild(productoDiv);
        });
    }
});



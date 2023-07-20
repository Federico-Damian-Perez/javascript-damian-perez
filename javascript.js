// LISTADO DE PRODUCTOS

let productos = [
    {
      id: 1,
      nombreProducto: "Tazon termico",
      precio: 2500,
    },
    {
      id: 2,
      nombreProducto: "Duo de tazas termicas",
      precio: 2800,
    },
    {
      id: 3,
      nombreProducto: "Mate termico",
      precio: 2300,
    },
    {
      id: 4,
      nombreProducto: "Vaso grande de porcelana fina",
      precio: 2450,
    },
    {
      id: 5,
      nombreProducto: "Vaso chico de porcelana fina",
      precio: 1200,
    },
    
  ];
  
  // BUSCAR UN PRODUCTO

  let carrito = [];
  
  function buscarProducto() {
    let seleccion = prompt("Ingrese el nombre del producto que desea seleccionar: (Tazon termico, Duo de tazas termicas, Mate termico, Vaso grande de porcelana fina, Vaso chico de porcelana fina)");
    
    producto = productos.find((p) => p.nombreProducto.toLowerCase() === seleccion.toLowerCase());
  }

// AGREGAR PRODUCTOS A CARRITO
  
  function agregarCarrito() {
    if (producto) {
      let cantidad = parseInt(prompt("Ingrese la cantidad que desea seleccionar:"));
      carrito.push({
        producto: producto.nombreProducto,
        cantidad: cantidad,
        subtotal: producto.precio * cantidad
      });
    } else {
      alert("El producto seleccionado no existe. Por favor, vuelva a intentarlo.");
    }
  }
  
  // CONFIRMACION DE CARRITO

  function confirmarCarrito() {
    while (true) {
      buscarProducto();
      agregarCarrito();
  
      if (!confirm("¿Desea agregar otro producto al carrito?")) {
        break;
      }
    }
  }

  // BUSCAMOS EL CALCULO TOTAL
  
  function calcularTotal() {
    console.log("Carrito de compras:");
    carrito.forEach((item) => {
      console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);
    });
  
    let total = carrito.reduce((sum, item) => sum + item.subtotal, 0);
    console.log(`Total a pagar: ${total}`);
  }

  // VACIAR EL CARRITO
  
  function vaciarCarrito() {
    carrito = [];
    console.log("El carrito ha sido vaciado.");
  }
  
  confirmarCarrito();
  
  if (carrito.length > 0) {
    if (confirm("¿Desea vaciar el carrito?")) {
      vaciarCarrito();
    }
  }
  
  calcularTotal();
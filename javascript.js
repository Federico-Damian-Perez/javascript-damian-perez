// EJERCICIO DESCUENTO DE PRODUCTOS

let precio1 = ""
let precio2 = ""
let precioFinal = 0
let nuevoPrecio=true;

do{
    precio1 = Number(prompt("Ingrese el precio original del producto"))
    precio2 = Number(prompt("Ingrese el precio final del producto"))


    if(precio2 > precio1){

        precioFinal = ((precio2/precio1)*100)
        precioFinal = precioFinal.toFixed(2)
    
        alert ("Se realizo una recarga del " + precioFinal + "%")
        document.write(`El precio final (${precio2}) tiene un ${precioFinal}% de recarga sobre el valor de ${precio1}<br>`)
    }else {
        
        precioFinal = ((precio2/precio1)*100)
        precioFinal = precioFinal.toFixed(2)

        alert("Se realizo un descuento del " + precioFinal + "%")
        document.write(`El precio final (${precio1}) tiene un ${precioFinal}% de descuento sobre el valor de ${precio2}<br>`)

    }

    if(nuevoPrecio){
        nuevoPrecio = confirm("Desea realizar un nuevo calculo?")
    } 

}while(nuevoPrecio)


console.log("hola")

const randomNumber = function aleatory () {
    return Math.floor(Math.random() * 3);
 }

let valorInicial = 16;
let colores = ["rgb(2, 253, 241)","rgb(255, 238, 0)","rgb(0, 255, 42)"]
    

window.onload = inicio;



function inicio() {

    for (let i=0; i < valorInicial; i++) {
        crearCuadros();

    }

    pintar();
    opacidad();
    document.querySelector("button").onclick = modify;


}

function modify () {
     let respuesta = window.prompt("cuantas cuadricualas deseas");
     if(respuesta <= 100) {
        valorInicial = respuesta;
        document.querySelector(".principal-container").innerHTML = "";
        inicio()
     } else if (respuesta > 100) {
        alert("ingrese un numero menor a 100")
     } else {
        alert("ingrese un numero valido , no letras")
     }

     


}


function crearCuadros () {

for ( let i=0; i < valorInicial; i++) {
let div = document.createElement("div");
div.classList.add("box");
div.style.border= "1px solid black";
div.style.padding = "5px";
div.style.margin ="2px";
document.querySelector(".principal-container").appendChild(div);
}

}

console.log(randomNumber());


function pintar () {

    let cajas = document.querySelectorAll(".box");

    cajas.forEach(caja=> {
        caja.addEventListener("mouseover", function() {
            caja.style.backgroundColor="red";
        }, { once: true})

        caja.addEventListener("mouseout", function() {
            if (caja.style.backgroundColor === "red") {
                
                caja.style.backgroundColor= colores[randomNumber()];
                console.log(colores[randomNumber]);
            } 
        })



    })
    
    
}



function opacidad () {
    
    let cajas = document.querySelectorAll(".box");


    cajas.forEach(caja=> {

        
        caja.addEventListener("mouseover", function() {
            let prueba = parseFloat(window.getComputedStyle(caja).opacity) - 0.1;
            let newopacity = Math.max(0,prueba);
            caja.style.opacity = newopacity;
            
        })
    }) 
    


}

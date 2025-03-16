console.log("hola")

let valorInicial = 16;

window.onload = inicio;



function inicio() {

    for (let i=0; i < valorInicial; i++) {
        crearCuadros();

    }

    pintar();
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




function pintar () {

    let cajas = document.querySelectorAll(".box");

    cajas.forEach(caja=> {
        caja.addEventListener("mouseover", function() {
            caja.style.backgroundColor="red";
        })

        caja.addEventListener("mouseout", function() {
            if (caja.style.backgroundColor === "red") {
                caja.style.backgroundColor="yellow"
                console.log("sirvio");
            } 
        })



    })
    
    
}






import Punto from "./Punto.js";

class Main {
    constructor() {
        let p1x = document.querySelector("#p1x");
        let p1y = document.querySelector("#p1y");
        let p2x = document.querySelector("#p2x");
        let p2y = document.querySelector("#p2y");

        let btnMapa = document.querySelector("#btnMapa");
        btnMapa.addEventListener('click', () => {
            var p1 = new Punto();
            var p2 = new Punto();
            var diferencia = new Punto();

            p1.posX = p1x.value;
            p1.posY = p1y.value;
            console.log("Punto1 en:" + p1._toString());

            p2.posX = p2x.value;
            p2.posY = p2y.value;
            console.log("Punto2 en:" + p2._toString());

            let distancia = diferencia._distanciaPuntos(p1.posX, p2.posX, p1.posY, p2.posY);
            console.log("La distancia entre los puntos es de " + distancia)
        });
    }
}

let m = new Main();
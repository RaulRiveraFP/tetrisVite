import { ModeloPieza } from "../componentes/clase";
import { model } from "./models";
export const panel = {
    matriz: [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    pintaPanel: function () {
        const panelDiv = document.getElementById("panel");

        // Limpiamos el contenido actual del div
        panelDiv.innerHTML = '';

        // Recorremos la matriz y creamos divs según los valores
        for (let i = 0; i < this.matriz.length; i++) {
            for (let j = 0; j < this.matriz[i].length; j++) {
                const cellDiv = document.createElement("div");
                cellDiv.className = this.matriz[i][j] === 1 ? "filled" : "empty";
                panelDiv.appendChild(cellDiv);
            }
        }
    },
    crearNuevaPieza: function () {
        let modeloAleatorio = Math.floor(Math.random() * 8);
        let xAleatoria = Math.floor((Math.random() * 10) - model[modeloAleatorio].matriz[0].length);
        panel.nuevaPieza = new ModeloPieza(modeloAleatorio, xAleatoria, 1, 0);
    },
    insertarPieza: () => {
        for(let i=0; i<panel.nuevaPieza.altura; i++){
          for(let x=0; x<panel.nuevaPieza.longitud; x++){
            const elemento = panel.nuevaPieza.matriz[i][x];
            if(elemento){
              panel.matriz[i + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = elemento;
            }
          }
        }  
        panel.pintaPanel();
    },
    controlTeclas: function () {
            document.addEventListener("keydown", (event) => {
              switch (event.key) {
                case "ArrowLeft":
                  panel.moverIzq();
                  console.log('izquierda');
                  break;
                case "ArrowRight":
                   panel.moverDra();
                  console.log('derecha');
                  break;
                case "ArrowDown":
                   panel.bajar();
                  console.log('abajo');
                  break;
                case "ArrowUp":
                   panel.nuevaPieza.girar();
                  console.log('arriba');
                  break;
                default:
                  break;
              }
            });
    },
    borrarPieza: function () {
        for (let i = 0; i < panel.nuevaPieza.altura; i++) {
            for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
                const elemento = panel.nuevaPieza.matriz[i][x];
                if (elemento) {
                    panel.matriz[i + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = 0;
                }
            }
        }
    },
    moverDra: () => {
        if (panel.nuevaPieza) {
            panel.borrarPieza();
            
            // Verificar el límite de la matriz antes de mover la pieza a la derecha
            if (panel.nuevaPieza.x + panel.nuevaPieza.longitud < panel.matriz[0].length - 1) {
                panel.nuevaPieza.x += 1;
            }
    
            panel.insertarPieza();
            panel.pintaPanel();
        }
    },
    
    moverIzq: () => {
        if (panel.nuevaPieza) {
            panel.borrarPieza();
    
            // Verificar el límite de la matriz antes de mover la pieza a la izquierda
            if (panel.nuevaPieza.x > 1) {
                panel.nuevaPieza.x -= 1;
            }
    
            panel.insertarPieza();
            panel.pintaPanel();
        }
    },
    
    bajar: () => {
        if (panel.nuevaPieza) {
            panel.borrarPieza();
    
            // Verificar el límite de la matriz antes de mover la pieza hacia abajo
            if (panel.nuevaPieza.y + panel.nuevaPieza.altura < panel.matriz.length - 1) {
                panel.nuevaPieza.y += 1;
            }
    
            panel.insertarPieza();
            panel.pintaPanel();
        }
    },
}
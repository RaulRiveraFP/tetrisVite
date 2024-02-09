import { model } from "../componentes/models";
import { panel } from "../componentes/panel";
export class ModeloPieza {
    constructor (modelo, x = 0, y = 0, angulo = 0) {
      this.modelo = modelo
      this.angulo = angulo
      this.matriz = model[this.modelo].matriz[this.angulo]
      this.x = x
      this.y = y
      this.longitud = this.matriz[0].length
      this.altura = this.matriz.length
    }
  
    girar() {
      panel.borrarPieza();

      const tempMatriz = this.matriz;
      const tempAngulo = this.angulo;
      const tempX = this.x;

      this.angulo = (this.angulo + 1) % model[this.modelo].matriz.length;
      this.matriz = model[this.modelo].matriz[this.angulo];
      this.longitud = this.matriz[0].length;
      this.altura = this.matriz.length;

      if (this.x + this.longitud > panel.matriz[0].length || this.y + this.altura > panel.matriz.length || this.x > 6) {
          this.matriz = tempMatriz;
          this.angulo = tempAngulo;
          this.longitud = this.matriz[0].length;
          this.altura = this.matriz.length;
          this.x = tempX;
      }

      console.log(this.angulo);
      panel.insertarPieza();
  }
}




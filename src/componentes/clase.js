import { model } from "../componentes/models";

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
        this.angulo = (this.angulo + 1) % model[this.modelo].matriz.length;
        this.matriz = model[this.modelo].matriz[this.angulo];
        this.longitud = this.matriz[0].length;
        this.altura = this.matriz.length;
        console.log(this.angulo);
    }
    

}




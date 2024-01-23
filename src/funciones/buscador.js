import { juegos } from "../funciones/bdRanking"

export function buscador(texto) {
 // Filtra las partidas donde el campo "nick" contiene el texto proporcionado
 const resultados = juegos.filter(partida => partida.nick.toLowerCase().includes(texto.toLowerCase()));
 return resultados;
}



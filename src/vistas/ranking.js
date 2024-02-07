import { buscador } from "../funciones/buscador";
import { juegos } from "../funciones/bdRanking";
import { panel } from "../componentes/panel"

export const ranking = {
    template: `
        <header class="d-flex align-items-center justify-content-center">
            <img src="img/logo.png" alt="logo" width="200" class="mt-5" />
        </header>
        <main class="container mt-5 bg-opacity-50 bg-dark p-2">
            <!-- Pantalla tablas y ranking -->
            <div id="info" class="">
                <div id="ranking" class="m-5 p-5 bg-dark"></div>
                <div id="partidas" class="m-5 p-5 bg-dark"></div>
            </div>
            <div id="panel"></div>
        </main>
    `,
    script: () => {
        // Definición de las iconos para el orden ascendente y descendente
        const arrowUpIcon = '<i class="bi bi-arrow-up-square"></i>';
        const arrowDownIcon = '<i class="bi bi-arrow-down-square"></i>';

        // Array para mantener el estado actual del orden de cada campo
        const ordenActual = {
            'Nick': 'up',
            'Puntuación': 'up',
            'Fecha': 'up'
        };

        // Función para ordenar los datos de la tabla
        function orden(campo) {
            ordenActual[campo] = ordenActual[campo] === 'up' ? 'down' : 'up';
            pintaTabla(campo); // Pass the campo parameter to pintaTabla
        }

        // Función para pintar la tabla
        // Función para pintar la tabla
        function pintaTabla(campo) {

                const partidas = document.querySelector('#partidas');
                let tablaHTML = `<h2 class="text-center text-light">Partidas</h2>
                    <div class="input-group mb-3">
                        <!-- ... Código para pintar el buscador ... -->
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Buscador"
                            aria-label="Buscador"
                            id="buscador"
                            aria-describedby="button-addon2"
                        />
                        <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                        >
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th></th>
                                <th id="nickHeader">Nick ${ordenActual['Nick'] === 'up' ? arrowUpIcon : arrowDownIcon}</th>
                                <th id="puntosHeader">Puntuación ${ordenActual['Puntuación'] === 'up' ? arrowUpIcon : arrowDownIcon}</th>
                                <th id="fechaHeader">Fecha ${ordenActual['Fecha'] === 'up' ? arrowUpIcon : arrowDownIcon}</th>
                            </tr>
                        </thead>
                        <tbody>`;

                juegos.forEach(element => {
                    tablaHTML += `
                        <tr>
                            <td><img src="${element.avatar}" style= "width: 30px" alt=""></td>
                            <td>${element.nick}</td>
                            <td>${element.puntos}</td>
                            <td>${element.fecha}</td>
                        </tr>`;
                });

                tablaHTML += `
                        </tbody>
                        <tfoot></tfoot>
                    </table>`;

                partidas.innerHTML = tablaHTML;

                // Adjuntar eventos de clic a las celdas de la cabecera
                const nickHeader = document.getElementById('nickHeader');
                const puntosHeader = document.getElementById('puntosHeader');
                const fechaHeader = document.getElementById('fechaHeader');

                nickHeader.addEventListener('click', () => orden('Nick'));
                puntosHeader.addEventListener('click', () => orden('Puntuación'));
                fechaHeader.addEventListener('click', () => orden('Fecha'));
                juegos.sort((a, b) => {
                    const order = ordenActual[campo] === 'up' ? 1 : -1;
                
                    if (campo === 'Puntuación') {
                        return order * (a.puntos - b.puntos);
                    } else if (campo === 'Fecha') {
                        const dateA = new Date(a.fecha);
                        const dateB = new Date(b.fecha);
                
                
                        // Compare the dates directly
                        if (dateA < dateB) return -order;
                        if (dateA > dateB) return order;
                        return 0;
                    } else {
                        return order * (a.nick.localeCompare(b.nick));
                    }
                });
                
            }

        pintaTabla();
        // Ejemplo de una partida
        const datosEjemploPartida = {
            avatar: 'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',
            nick: 'MANUEL',
            puntos: 100,
            fecha: '12/21/2023'
        };

        function insertaNuevaPartida(datosPartida) {
            juegos.push(datosPartida);
        }

        function pintaDatos(partida) {
           

            const mensajeConfirm = `¿Deseas guardar la partida?
                Nick: ${partida.nick}
                Puntos: ${partida.puntos}
                Fecha: ${partida.fecha}`;
            const guardarPartida = confirm(mensajeConfirm);

            if (guardarPartida) {
                insertaNuevaPartida(partida);
                pintaTabla();
            }

            const inputBuscador = document.querySelector('#buscador');
            inputBuscador.addEventListener('input', function () {
                const textoBusqueda = inputBuscador.value;
                const resultados = buscador(textoBusqueda);
            });
        }
// pintaTabla();
// pintaDatos(datosEjemploPartida);

    }
};

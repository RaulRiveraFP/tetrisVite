import { header } from "./componentes/header.js";
import { ranking } from "./vistas/ranking";
import { panel } from "./componentes/panel.js";
// import '../style.css';
document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = ranking.template
ranking.script()

panel.controlTeclas()
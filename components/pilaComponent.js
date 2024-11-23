"use strict";

import { agregarPrenda, sacarPrenda } from "../modules/pilaModule.js";

// Evento para agregar una prenda
document.getElementById('introducirPrenda').addEventListener('click', agregarPrenda);

// Evento para sacar una prenda
document.getElementById('sacarPrenda').addEventListener('click', sacarPrenda);

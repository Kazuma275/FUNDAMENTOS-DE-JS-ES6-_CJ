"use strict";

// No es necesario modificar mucho, ya que las funciones ahora están delegadas a `pilaModule.js`
// Se asegura de que la cesta esté inicialmente vacía y puede llamar a las funciones del módulo `pilaModule.js`

import { agregarPrenda, sacarPrenda } from "../modules/pilaModule.js";
import { renderizarCesta } from "../utils/domHelpers.js";

// Inicializa la cesta vacía
const CESTA_COLADA = [];

// Renderiza la cesta inicial (vacía)
renderizarCesta(CESTA_COLADA);

// Aquí se pueden manejar más inicializaciones si fuera necesario

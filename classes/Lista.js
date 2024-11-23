"use strict";

export default class Lista {
  constructor() {
    this.tareasSinPrioridad = []; // Tareas sin prioridad (vacío al principio)
    this.tareasConPrioridad = []; // Tareas con prioridad (vacío al principio)
    this.toDo = []; // Lista combinada de tareas (vacío al principio)
    this.MAX_TAREAS = 10; // Número máximo de tareas
  }

  // Función para añadir tareas sin prioridad de manera aleatoria
  anado() {
    if (this.toDo.length < this.MAX_TAREAS) {
      // Tareas posibles para añadir sin prioridad
      const tareasPosibles = ["Ducha", "Cubo", "Cama", "Jabón"];
      const tareaAleatoria = tareasPosibles[Math.floor(Math.random() * tareasPosibles.length)];
      this.toDo.push(tareaAleatoria);
      this.mostrarTareas();
    } else {
      this.mostrarMensaje("DEBERÍAS EMPEZAR A HACER LAS TAREAS");
    }
  }

  // Función para añadir tareas con prioridad de manera aleatoria
  anadoPrior() {
    if (this.toDo.length < this.MAX_TAREAS) {
      // Tareas posibles con prioridad
      const tareasPosibles = [
        { tarea: "Ascensor", prioridad: 1 },
        { tarea: "Espejo", prioridad: 2 },
        { tarea: "Inodoro", prioridad: 7 },
        { tarea: "Desatascador", prioridad: 8 }
      ];
      const tareaAleatoria = tareasPosibles[Math.floor(Math.random() * tareasPosibles.length)];
      this.toDo.push(tareaAleatoria);
      this.mostrarTareas();
    } else {
      this.mostrarMensaje("DEBERÍAS EMPEZAR A HACER LAS TAREAS");
    }
  }

  // Función para eliminar una tarea sin prioridad aleatoria de la lista
  elimino() {
    // Filtrar solo las tareas sin prioridad
    const tareasSinPrioridad = this.toDo.filter(tarea => typeof tarea === 'string');

    if (tareasSinPrioridad.length > 0) {
      // Seleccionar aleatoriamente una tarea sin prioridad
      const randomIndex = Math.floor(Math.random() * tareasSinPrioridad.length);
      const tareaEliminada = tareasSinPrioridad[randomIndex];
      // Eliminar la tarea sin prioridad de la lista original
      const indexToRemove = this.toDo.indexOf(tareaEliminada);
      this.toDo.splice(indexToRemove, 1);
      this.mostrarTareas();
    } else {
      this.mostrarMensaje("NO HAY TAREAS SIN PRIORIDAD QUE ELIMINAR");
    }
  }

  // Función para eliminar la tarea con la mayor prioridad de la lista
  eliminoPrior() {
    // Filtrar las tareas con prioridad
    const tareasConPrioridad = this.toDo.filter(tarea => tarea.prioridad !== undefined);

    if (tareasConPrioridad.length > 0) {
      // Ordenar las tareas con prioridad en orden descendente
      tareasConPrioridad.sort((a, b) => b.prioridad - a.prioridad);
      const tareaEliminada = tareasConPrioridad[0]; // Tarea con la mayor prioridad
      // Eliminar la tarea con mayor prioridad de la lista original
      const indexToRemove = this.toDo.indexOf(tareaEliminada);
      this.toDo.splice(indexToRemove, 1);
      this.mostrarTareas();
    } else {
      this.mostrarMensaje("NO HAY TAREAS CON PRIORIDAD.");
    }
  }

  // Función para mostrar las tareas en la lista
  mostrarTareas() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = ''; // Limpiar la lista antes de mostrar

    if (this.toDo.length === 0) {
      listaTareas.innerHTML = "<li>No hay tareas en la lista.</li>";
      this.mostrarMensaje("NO HAY MÁS TAREAS QUE HACER");
    } else {
      // Mostrar tareas con o sin prioridad
      this.toDo.forEach(tarea => {
        const li = document.createElement('li');
        if (tarea.prioridad !== undefined) {
          li.textContent = `Tarea: "${tarea.tarea}", Prioridad: ${tarea.prioridad}`;
        } else {
          li.textContent = `Tarea: "${tarea}"`;
        }
        listaTareas.appendChild(li);
      });

      // Mostrar la tarea con la mayor prioridad
      const tareaConMayorPrioridad = this.toDo
        .filter(tarea => tarea.prioridad !== undefined) // Filtrar solo las tareas con prioridad
        .sort((a, b) => b.prioridad - a.prioridad)[0]; // Ordenar por prioridad descendente

      if (tareaConMayorPrioridad) {
        this.mostrarMensaje(`Tarea con mayor prioridad: "${tareaConMayorPrioridad.tarea}"`);
      }
    }
  }

  // Función para mostrar mensajes en la página
  mostrarMensaje(mensaje) {
    const mensajeTareas = document.getElementById('mensajeTareas');
    mensajeTareas.textContent = mensaje;
  }
}

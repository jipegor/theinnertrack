const taskManager = new TaskManager();
console.log(taskManager.tasks);

function validFormFieldInput(data) {
  const errors = [];

  if (!data.nombre || data.nombre.trim() === '') {
    errors.push('El nombre de la tarea no puede estar vacío.');
  }

  if (!data.descripcion || data.descripcion.trim() === '') {
    errors.push('La descripción no puede estar vacía.');
  }

  if (!data.fecha) {
    errors.push('Debes elegir una fecha de entrega.');
  }

  if (!data.estado) {
    errors.push('Debes seleccionar un estado.');
  }

  return { isValid: errors.length === 0, errors: errors };
}

if (typeof document !== 'undefined') {
  // Validación del formulario (Sprint 1)
  const taskForm = document.querySelector('#taskForm');
  const validationAlert = document.querySelector('#validationAlert');
  const validationErrors = document.querySelector('#validationErrors');
  const newTaskNameInput = document.querySelector('#newTaskNameInput');
  const newTaskDescriptionInput = document.querySelector('#newTaskDescriptionInput');
  const newTaskDateInput = document.querySelector('#newTaskDateInput');
  const newTaskStatusInput = document.querySelector('#newTaskStatusInput');

  taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = {
      nombre: newTaskNameInput.value,
      descripcion: newTaskDescriptionInput.value,
      fecha: newTaskDateInput.value,
      estado: newTaskStatusInput.value
    };

    console.log('Datos del formulario:', data);

    const result = validFormFieldInput(data);

    if (!result.isValid) {
      validationErrors.innerHTML = '';
      result.errors.forEach(function (message) {
        const item = document.createElement('li');
        item.textContent = message;
        validationErrors.appendChild(item);
      });
      validationAlert.classList.remove('d-none');
      return;
    }

    validationAlert.classList.add('d-none');
    console.log('Tarea válida:', data);
    taskForm.reset();
  });

  // Parte 2: marcar y desmarcar tareas como completadas, sin recargar la página
  document.querySelectorAll('.btn-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      const card = button.closest('article');
      const badge = card.querySelector('.badge');
      const completada = card.classList.toggle('completada');

      if (completada) {
        badge.textContent = 'Completada';
        badge.className = 'badge text-bg-success';
        button.textContent = 'Marcar como pendiente';
      } else {
        badge.textContent = 'Pendiente';
        badge.className = 'badge text-bg-warning';
        button.textContent = 'Marcar como completada';
      }
    });
  });
}
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
      // Muestra cada error en la alerta
      validationErrors.innerHTML = '';
      result.errors.forEach(function (message) {
        const item = document.createElement('li');
        item.textContent = message;
        validationErrors.appendChild(item);
      });
      validationAlert.classList.remove('d-none');
      return;
    }

    // Datos válidos: oculta la alerta y deja listo el formulario.
    // El paso de guardar la tarea en la lista se verá en la siguiente tarea.
    validationAlert.classList.add('d-none');
    console.log('Tarea válida:', data);
    taskForm.reset();
  });
}
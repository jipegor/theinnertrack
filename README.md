# The Inner Track

Planificador de tareas inspirado en la música: organiza tus días, sigue tu progreso, construye hábitos y guarda ideas con la estética de tus álbumes favoritos.

## Enlaces

- **Figma (wireframe): (https://www.figma.com/design/Rn0yE2paYdTol1jXExygyz/the-inner-track.-Planificador?m=auto&t=kjJyiNvN530vg7Tn-1)
- **Demo (GitHub Pages): https://jipegor.github.io/theinnertrack/

## Tecnologías

- HTML5
- Bootstrap 5
- JavaScript
- CSS propio, con las fuentes Libre Caslon Display y Special Elite (Google Fonts)

## Estructura del proyecto

```
theinnertrack/
├── css/
│   └── styles.css   # Estilo visual propio
├── app.js           # Validación del formulario
├── index.html       # Interfaz principal
└── README.md
```

## Funcionalidades

- **Tarjeta de tarea:** muestra nombre, descripción, fecha de entrega y estado.
- **Lista de tareas:** organiza las tarjetas en una o dos columnas según el tamaño de pantalla.
- **Formulario de creación:** captura nombre, descripción, fecha de entrega y estado.
- **Validación:** la función `validFormFieldInput(data)` revisa que los campos no estén vacíos antes de procesar la tarea.
- **Alerta de error:** si hay datos inválidos, muestra un mensaje con cada error. Si los datos son válidos, la alerta se oculta.

## Validación del formulario

| Campo | Condición |
|---|---|
| Nombre | No puede estar vacío |
| Descripción | No puede estar vacía |
| Fecha de entrega | Debe contener una fecha |
| Estado | Debe tener una opción seleccionada |

## Autor

Jimmy Peralta · Sprint 1 del curso de desarrollo front-end.
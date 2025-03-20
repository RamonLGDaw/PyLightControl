# PyLightControl: Control de Dispositivos

Este proyecto es una aplicación web de control de dispositivos, desarrollada con React, que permite a los usuarios gestionar dispositivos a través de varias secciones, como **Control**, **Programación** y **Aleatorio**. Utiliza React Router para la navegación entre secciones y Bootstrap para el diseño de la interfaz.

### Funcionalidades:
- **Autenticación**: Los usuarios deben iniciar sesión para acceder a las secciones privadas. El estado de la sesión se gestiona mediante un token almacenado en el `localStorage`.
- **Control de Dispositivos**: Los usuarios pueden interactuar con dispositivos en la sección "Control".
- **Programación de Tareas**: En la sección "Program", los usuarios pueden programar tareas específicas para los dispositivos.
- **Generación Aleatoria**: La sección "Random" genera configuraciones aleatorias.
- **Navegación**: Utiliza un menú de navegación con enlaces a las distintas secciones. También incluye un botón de logout que limpia el token de autenticación y redirige al usuario al login.
  
### Características:
- **React Router**: Maneja la navegación entre las diferentes páginas de la aplicación.
- **Bootstrap**: Se utiliza para el diseño responsivo y los componentes interactivos.
- **Private Route**: Las rutas privadas, como las de "Control", "Program", y "Random", están protegidas y solo accesibles si el usuario ha iniciado sesión correctamente.

Este proyecto es un ejemplo práctico de cómo gestionar la navegación, la autenticación y la protección de rutas en una aplicación React, utilizando tecnologías modernas como React Router y Bootstrap.

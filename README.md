# LiteTech Challenge

## Descripción
Este proyecto consiste en el desarrollo de un frontend para un Blog de tecnología. Se implementó utilizando [Vite](https://vitejs.dev/) para la configuración y creación del entorno.

## Tecnologías utilizadas

- **Vite**: Para la configuración rápida del entorno de desarrollo.
- **React**: Para la creación de componentes y la estructura del frontend.
- **Typescript**: Para tipado de datos.
- **Axios**: Para realizar las solicitudes HTTP a la API.
- **Styled Components**: Para el manejo de estilos de manera modular y reutilizable.
- **React Slick**: Para la implementación de los carouseles.
- **ESLint**: Para garantizar un código limpio y consistente.

## Instalación y configuración
Para correr el proyecto de manera local:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/SabrinaZalio1/technology-blog.git
   ```
2. Acceder al directorio del proyecto:
   ```bash
   cd technology-blog
   ```
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## ESLint
Para asegurar de que el código sigue las reglas establecidas en ESLint, se requiere:

1. Verificar que ESLint está instalado con el proyecto:
   ```bash
   npm list eslint
   ```
   Si no está instalado, puedes agregarlo con:
   ```bash
   npm install eslint --save-dev
   ```
2. Para revisar errores y advertencias en el código, ejecuta:
   ```bash
   npm run lint
   ```
3. Para corregir automáticamente los errores que puedan solucionarse:
   ```bash
   npm run lint --fix
   ```

## Funcionalidades implementadas

- Listado de 9 tarjetas con información de los artículos obtenidos de la API.
- Carga de nuevos posts desde el botón **"New post"**.
- Modal para crear un nuevo post con subida de imagen y título.
- Navegación a la vista de detalle de un post.
- Visualización completa de un artículo en la vista de detalle.
- Listado de los últimos 3 posts agregados en la parte inferior de la vista de detalle.
- Implementación de carouseles en mobile para mejorar la experiencia del usuario.

## Endpoints de la API utilizados

- **GET /api/posts**: Para obtener el listado de posts para la pantalla principal.
- **GET /api/post/{id}**: Para obtener el detalle de un post específico.


## Recorrido por la App

### Apenas se ingresa a la App se vera el Banner de la plataforma, en donde se muestra la noticia principal. En su estado de carga, se mostrara un background gris hasta que la imagen cargue en su totalidad:
![image](https://github.com/user-attachments/assets/5d306c1a-11b6-4cc1-896d-e8def23aff71)

### Luego se encontraran 3 secciones, el listado de los Topicos de las noticias, traidos desde el EP, la grilla de 3 noticias y la seccion de Most Viewed, donde se listaran las 4 noticias mas vistas
![image](https://github.com/user-attachments/assets/6b92269b-6e23-4f93-9c80-f7adb8ce73a7)

### Para crear un Post, solo se debe clickear en New Post o en un Button Subscribe del Banner y se abrira un Modal para cargar el titulo y la imagen de la nueva noticia:
![image](https://github.com/user-attachments/assets/f9c6edf2-d1cd-4b4e-a668-6fd07acaa6b6)

### Al subir una nueva imagen, se vera una animacion de la carga de la imagen:
![image](https://github.com/user-attachments/assets/e0c80b37-4c2d-4c5c-b3b4-213f551005ed)

### Si el post se cargo correctamente, se vera lo siguiente:
![image](https://github.com/user-attachments/assets/0cee782b-62ba-4cd8-b087-236b4d4305f2)

### Toda la plataforma es responsive, teniendo un diseño que se adapta a todos los tamaños de pantalla
![image](https://github.com/user-attachments/assets/6fa93a61-a61d-4272-8ec6-7ad9cb0bad2a)

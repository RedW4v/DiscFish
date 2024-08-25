# Clon de Login de Discord

Este proyecto es un clon de la página de inicio de sesión de Discord, desarrollado con fines académicos para la materia de Seguridad Informática. El objetivo principal es simular el flujo de un inicio de sesión y registrar las credenciales introducidas por el usuario.

## Características

- **Interfaz de usuario:** Clon visual de la página de login de Discord.
- **Registro de credenciales:** Las credenciales ingresadas (usuario y contraseña) se registran en un archivo de texto (`login.txt`).
- **Generación de hash:** Las credenciales (contraseña) se procesan para generar un hash SHA-256 que también se almacena en el archivo.
- **Redirección automática:** Después de un tercer intento de inicio de sesión, la página redirige al usuario a la página oficial de inicio de sesión de Discord.

## Tecnologías Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js con Express
- **Manejo de Archivos:** Uso del módulo `fs` de Node.js para escribir en archivos.
- **Cifrado:** Utilización del módulo `crypto` de Node.js para generar hashes SHA-256.

## Configuración y Ejecución

1. Clona este repositorio:
    ```bash
    git clone https://github.com/RedW4v/DiscFish.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd tu-directorio
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Inicia el servidor:
    ```bash
    npm run dev
    ```
5. Abre tu navegador y navega a `http://localhost:8080/` para ver la página de login.

## Créditos

- **Servidor:** Desarrollado con la ayuda de Yael C. S. utilizando JavaScript y Express.
- **Estilo del sitio:** Inspirado en el video tutorial [https://www.youtube.com/watch?v=On5S5PAIQ6c](https://www.youtube.com/watch?v=On5S5PAIQ6c).

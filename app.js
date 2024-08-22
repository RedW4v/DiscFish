import express from 'express';
import { writeFile } from 'node:fs';
import { createHash } from 'crypto';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static("public"));

app.post("/", (req, res) => {
    const { username, password } = req.body;

    // Crear un string combinando username y password
    const credentials = `Username: ${username}, Password: ${password}`;

    // Crear el hash SHA-256 de las credenciales
    const hash = createHash('sha256').update(credentials).digest('hex');

    // Texto a escribir en el archivo
    const logEntry = `Credentials: ${credentials}, Hash: ${hash}\n`;

    // Escribir las credenciales y el hash en el archivo login.txt
    writeFile("./login.txt", logEntry, { flag: "a" }, (err) => {
        if (err) console.log("Error al escribir en el archivo");
        else console.log("Credenciales registradas correctamente");
    });

    res.status(200).json({ msg: "Credenciales recibidas y registradas" });
});

app.listen(PORT, () => console.log(`Escuchando en http://localhost:${PORT}/`));
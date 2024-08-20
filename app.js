import express from 'express';
import { writeFile } from 'node:fs';

const app = express();
const PORT = 8080;

app.use(express.json());

app.post("/", (req, res) => {
    writeFile("./test.txt", JSON.stringify(req.body), { flag: "a" }, (err) => {
        if (err) console.log("Error");
        else console.log("Todo bien");
    })

    res.status(200).json( { msg: "Hola Mundo" } )
});

app.listen(PORT, () => console.log(`Escuchando en http://localhost:${PORT}/`));

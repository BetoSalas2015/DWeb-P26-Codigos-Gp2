import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import hbs from 'hbs'
import dotenv from 'dotenv'
import { dot } from 'node:test/reporters';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = process.env.PORT;

// Vista
app.use(express.static('public'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Controlador
app.get('/', (request, response) => {
    response.render('home', {
        titulo: 'Curso de Node',
        nombre: 'Roberto Salazar'
    } );
});

app.get('/elements', (request, response) => {
    response.sendFile(path.resolve(__dirname,'public/elements.html'))
});

app.get('/generic.html', (request, response) => {
    response.render('generic');
});

app.get('/generic', (request, response) => {
    response.render('generic');
});



app.get(/.*/, (request, response) => {
    response.sendFile(path.resolve(__dirname,'public/404.html'))
    
});

app.listen(port, () => {
    console.log("Escuchando el puerto ", port);
    
});


import express from 'express';
import { router } from './Router/router.js';
import dotenv from 'dotenv';
import cors from 'cors';
import '../associations.js'; // Importa las asociaciones después de configurar la base de datos

dotenv.config();

const app = express();

// Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:8083', // Reemplaza con la IP y el puerto de tu frontend
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(router);

app.listen(3003, '0.0.0.0', () => {
    console.log('Server is running on port 3003');
});

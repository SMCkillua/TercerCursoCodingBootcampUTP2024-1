import express from 'express';
import cookieParser from 'cookie-parser';
import { syncModels } from './models/index.js';
import authRoutes from './routes/auth.Routes.js';
import adminRoutes from './routes/admin.Routes.js';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(adminRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: 'No se encontró el endpoint',
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Problemas con el servidor');
});

syncModels()
  .then(async () => {
    await createAdminUser(); 

    app.listen(port, () => {
      console.log(`El server escucha en el puerto: ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error al sincronizar modelos:', err);
  });

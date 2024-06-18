// index.js
import express from "express";
import sequelize from "./config/config.js";
import usersRouter from "./routes/Users.routes.js";
import productsRouter from "./routes/Products.routes.js";
import categoriesRouter from "./routes/Categories.routes.js";
import ordersRouter from "./routes/orders.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "No se encontró el endpoint",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Problemas con el servidor");
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`El server escucha en el puerto: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Fallo de conexion con la DB:", err);
  });

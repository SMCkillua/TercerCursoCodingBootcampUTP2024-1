import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Bienvenidos a mi api");
});

export default router;

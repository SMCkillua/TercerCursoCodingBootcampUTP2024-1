import express from 'express'
import Order from '../models/Order.js'
import OrderItem from '../models/OrderItem.js'
import Product from '../models/Product.js'

const router = express.Router();
// POST /api/orders
router.post('/', async (req, res) => {
  const { user_id, items } = req.body;

  try {
    // Crear la orden
    const order = await Order.create({ user_id, total: 0 });

    // Crear los elementos de orden
    let total = 0;
    for (let item of items) {
      const product = await Product.findByPk(item.product_id);
      if (!product) {
        return res.status(404).json({ message: `Product with id ${item.product_id} not found` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for product ${product.name}` });
      }

      const orderItem = await OrderItem.create({
        order_id: order.order_id,
        product_id: product.product_id,
        quantity: item.quantity,
        price: product.price
      });

      total += orderItem.quantity * orderItem.price;
    }

    // Actualizar el total de la orden
    await order.update({ total });

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;

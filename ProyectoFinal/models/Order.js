import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";
import User from "./User.js";

const Order = sequelize.define(
  "Order",
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    timestamps: true,
    tableName: "Orders",
  }
);

Order.belongsTo(User, { foreignKey: "user_id" });

export default Order;

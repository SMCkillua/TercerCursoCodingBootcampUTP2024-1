import { sequelize } from "../config/config.js";


const syncModels = async () => {
  await sequelize.sync({ force: false });
  console.log("All models were synchronized successfully.");
};

export { syncModels };

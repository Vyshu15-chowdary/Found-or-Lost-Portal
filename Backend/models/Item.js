
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Item = sequelize.define("Item", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  type: { type: DataTypes.ENUM("lost", "found"), allowNull: false },
  image: { type: DataTypes.STRING, allowNull: true }
});

export default Item;

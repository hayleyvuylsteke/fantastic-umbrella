// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { Category } = require('.');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      //integer, no null, primary key, auto increment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      //string, no null
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      //decimal, no null, validates that the value is a decimal
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    stock: {
      //integer, no null, default value is 10, validates number is numeric
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      }
    },
    category_id: {
      //integer, references the category model's id
      //need to update to reference 
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

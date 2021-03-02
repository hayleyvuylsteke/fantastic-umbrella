const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      //integer, no null, primary key, auto increment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      //integer, references product model's id
      //update for reerence
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
      
    },
    tag_id: {
      //integer, references the tag model's id
      //update for reerence
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

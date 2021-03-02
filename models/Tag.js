const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      //integer, not null, primary key, auto increment
      type: DataType.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    tag_name: {
      //string
      type: DataType.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

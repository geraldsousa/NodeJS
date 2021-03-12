const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
   
  },
  price: {
    type: Sequelize.DOUBLE(8,2),
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = Product;
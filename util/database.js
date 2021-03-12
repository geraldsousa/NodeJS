const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeJS', 'root', 'Jul1@2013', {
  dialect: 'mysql', 
  host: 'localhost'
});
module.exports = sequelize;
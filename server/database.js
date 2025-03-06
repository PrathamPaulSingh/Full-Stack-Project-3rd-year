const { Sequelize } = require("sequelize");

// Create a Sequelize instance
const sequelize = new Sequelize(process.env.MYSQL_DATABASE_NAME, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false, // Set to true to see SQL queries in the console
});

module.exports = sequelize;

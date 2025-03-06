const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // Import Sequelize instance
// const User = require("./user"); // Import User model for association

const Pet = sequelize.define("Pet", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  pictures: {
    type: DataTypes.JSON, // Storing array of picture URLs as JSON
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // foster: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: User, // Reference to User model
  //     key: "id",
  //   },
  //   allowNull: true,
  // },
}, {
  tableName: "pets",
  timestamps: true, // Adds createdAt & updatedAt columns
});

module.exports = Pet;

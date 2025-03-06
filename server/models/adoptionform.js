const { DataTypes } = require("sequelize");
const sequelize = require("../database"); // Import Sequelize instance

const AdoptionForm = sequelize.define("AdoptionForm", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // This is the table name of the referenced model
      key: 'id',
    },
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  petId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Pets', // This is the table name of the referenced model
      key: 'id',
    },
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  altPhone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  workingHours: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  residenceType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ownershipStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hasYard: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  yardFenced: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  householdMembers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  childrenAges: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  landlordContact: {
    type: DataTypes.STRING,
    allowNull: function () {
      return this.ownershipStatus === 'Rent';
    },
  },
  moveFrequency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currentPets: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  previousPets: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vetName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  vetContact: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  petAllergies: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  trainingExperience: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  petName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reasonToAdopt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timeWithPet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  exercisePlan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emergencyPlan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  adjustmentPlan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  petExpenses: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vacationPlan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected'),
    defaultValue: 'pending',
  },
  submissionDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "adoption_forms",
  timestamps: true, // Adds createdAt & updatedAt columns
});

module.exports = AdoptionForm;
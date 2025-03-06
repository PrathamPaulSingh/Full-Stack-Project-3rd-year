const express = require("express");
require('dotenv').config();
const sequelize = require("./database"); // Import Sequelize connection
const petRouter = require('./routes/allpets');
const authRouter = require('./routes/auth-routes');

const app = express();
app.use(express.json());

// Sync Database and Create Tables
sequelize.sync({ force: false }) // Set force: true to reset tables
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Error syncing database:", err));

const PORT = process.env.PORT || 5000;

// app.use(cookieparser());
app.use(express.json());

app.use("/api/auth" , authRouter);
app.use("/api/pets" , petRouter);

app.listen(PORT,()=>{
    console.log(`Server is now running on port ${PORT}`)
})

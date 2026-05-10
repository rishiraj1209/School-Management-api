const express = require("express");
const cors = require("cors");

const schoolRoutes = require("./routes/schoolRoutes.js");

const db = require("./config/db");

async function testDB() {
  try {
    await db.query("SELECT 1");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
}

testDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", schoolRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
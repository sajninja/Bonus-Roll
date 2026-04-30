// Express App
const connectDB = require("./src/config/database");
const express   = require("express");
const Student   = require("./models/students.model");

const app = express();

// app.post("/test", async (req, res) => {
//   try {
//     const newDie = await Dice.create(req.body);
//     res.status(201).json(newDie);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

async function startServer() {
  await connectDB();
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}
startServer();

// mongodb+srv://kazmyriad:12345@bonusroll.daf5oxj.mongodb.net/?appName=BonusRoll
// Our Connection String

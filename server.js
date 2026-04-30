// Express App

async function startServer() {
  await connectDB();
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}
startServer();

// mongodb+srv://kazmyriad:12345@bonusroll.daf5oxj.mongodb.net/?appName=BonusRoll
// Our Connection String

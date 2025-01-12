import express from "express";

const app = express();

app.get("/api/get", (req, res) => {
  res.send({ message: "AWS Deployment" });
});
app.get("/api/get/user", (req, res) => {
  res.send({ name: "Amar", email: "amar@gmail.com", role: "Developer" });
});

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});

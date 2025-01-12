import express from "express";

const app = express();

app.get("/api/get", (req, res) => {
  res.send({ message: "AWS Deployment" });
});

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});

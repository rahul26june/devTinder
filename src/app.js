const express = require('express');
const app = express();

app.get("/users", (req, res) => {
  res.send({firstname: "Sahej", lastname: "Singh"});
});

app.post("/users", (req, res) => {
  res.send("This is a post request");
});

app.delete("/users", (req, res) => {
  res.send("Sucessfully deleted user");
});

app.use("/test",(req,res)=>{
  res.send('Hello, World!');
});

app.use("/",(req,res)=>{
  res.send('Hello, World! dashbord1');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


//module.exports = app;
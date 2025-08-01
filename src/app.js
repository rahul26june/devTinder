const express = require('express');
const { adminAuth,userAuth } = require('./middleware/auth');
const app = express();


app.use("/admin", adminAuth);
app.use("/user",userAuth)


app.get("/admin/getAll", (req, res) => {
  res.send("This is a get request for admin");
});

app.get("/admin/deleteAll", (req, res) => {
  res.send("delete all admin");
});

app.get("/user/getAll", (req, res) => {
  res.send("This is a get request for user");
});

app.get("/user/deleteAll", (req, res) => {
  res.send("Deleted all users");
});

/*app.get(/.*fly$/, (req, res) => {
  res.send("This is a post request"); 
});

app.get("/users/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({firstname: "Sahej", lastname: "Singh"});
});

app.use("/users", (req, res, next) => {
  //res.send("This is a post request");
  next();
},(req, res) => {
  res.send("This is a post request 2");
}),
app.delete("/users", (req, res) => {
  res.send("Sucessfully deleted user");
});

app.use("/test",(req,res)=>{
  res.send('Hello, World!');
});

app.use("/",(req,res)=>{
  res.send('Hello, World! dashbord1');
});
*/

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


//module.exports = app;
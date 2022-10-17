const express = require("express");
const cors = require("cors");
const routee = require("./routes/route")
const app = express();
require("./configuration/dbConfig.js")



app.use(express.json());
app.use(cors({ origin:true, credentials:true }));
const PORT = process.env.PORT || 8080;

app.use("/",routee)
app.set("view engine",'ejs')


app.use("/home",(req,res)=>{
  res.render("index")
})

app.get("/login",(Req,res)=>{
  res.render('login.ejs')
})
app.get("/dashboard",(req,res)=>{
  res.render("dashboard",{user:req.user.username})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


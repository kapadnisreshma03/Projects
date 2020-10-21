const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function (req, res){
  res.sendFile(__dirname +"/index.html");
});
app.get("/bmi",function(req, res){
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/",function (req,res){
  var num1 =Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var ans = num1+ num2;
  res.send("Addition is : "+ ans);

});
app.post("/bmi",function (req, res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var ans1 = weight/(height * height);
  res.send("BMI of the body is : "+ ans1);
});

 app.listen(3000, function (){
  console.log("3000 port is activated");
 });

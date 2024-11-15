let express = require('express');
const { resolve } = require('path');
let cors = require("cors");

let app=express();
app.use(cors());

let taxRate =5;
let discountPercentage = 10;
let loyaltyRate=2;


const port = 3000;

//app.use(express.static('static'));
app.get("/cart-total" , (req,res)=>{
  let newitemprice = parseFloat(req.query.newitemprice);
  let carttotall = parseFloat(req.query.carttotall);
  let sum = carttotall+newitemprice;
  res.send(sum.toString());

})
app.get("/tax-rate" , (req,res)=>{
  //let newitemprice = parseFloat(req.query.newitemprice);
  let carttotall = parseFloat(req.query.carttotall);
  let taxis = 0.05*carttotall+carttotall;
  res.send(taxis.toString());

})

app.get("/member-discount", (req, res) => {
  let ismember = req.query.ismember === "true"; 
  let carttotall = parseFloat(req.query.carttotall);

  

  let total;
  if (ismember) {
      total = carttotall * 0.90; 
  } else {
      total = carttotall; 
  }

  res.send(`Discount applied, the total is now ${total.toFixed(2)}`);
});






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

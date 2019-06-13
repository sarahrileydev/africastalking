const router = require("express").Router();

const models = require("./models");
const responses = require("./responses");

router.post("*", async (req, res) => {
  let { sessionId, serviceCode, phoneNumber, text } = req.body;
  console.log("body", req.body)
  console.log("text", text)
  let response = "";
  switch (text) {
    case "":
      response =
        "CON Choose your marketplace \n 1. Bujumbura \n 2. Gitega \n 3. Ngozi";
      // console.log("sessionId 1", sessionId)
      // console.log("serviceCode 1", serviceCode)
      // console.log("phone Number 1", phoneNumber)
      break;
    case "1":
      response = await responses.getProductsInMarket("Bujumbaru");

      break;
    case "1*1":
      try {
        const results = await models.findPrice("BTI", "Bujumbaru", "eggs");
        let newPrice = [];
        results.forEach(function(cake) {
          newPrice.push(cake.price);
        });
        newPrice.toString();

        response = `END Current prices for \n Eggs ${newPrice}`;
      } catch (error) {
        console.log(error);
        // do stuff with error
      }

      break;
    default:
      response = "Bad request!";
  }
  res.send(response);
});

module.exports = router;

// $cellnum = preg_replace("/[^0-9]/","",$cellnum);

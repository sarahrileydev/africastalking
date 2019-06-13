const router = require("express").Router();

const models = require("./models");

router.post("*", async (req, res) => {
  let { sessionId, serviceCode, phoneNumber, text } = req.body;
  
  let response = "";
  switch (text) {
    case "":
      response =
        "CON Choose your marketplace \n 1. Bujumbura \n 2. Gitega \n 3. Ngozi";
        console.log("sessionId 1", sessionId)
        console.log("serviceCode 1", serviceCode)
        console.log("phone Number 1", phoneNumber)
      break;
    case "1":
      response =
        "CON Choose your product \n 1. Eggs \n 2. Exotic Eggs \n 3. Local Eggs";
        console.log("sessionId 2", sessionId)
        console.log("serviceCode 2", serviceCode)
        console.log("phone Number 2", phoneNumber)
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
        console.log("sessionId 3", sessionId)
        console.log("serviceCode 3", serviceCode)
        console.log("phone Number 3", phoneNumber)
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

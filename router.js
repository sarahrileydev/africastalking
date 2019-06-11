const router = require("express").Router();
const db = require("./data/dbConfig");

router.post("*", async (req, res) => {
  let { sessionId, serviceCode, phoneNumber, text } = req.body;
  let response = "";
  switch (text) {
    case "":
      response =
        "CON Choose your country \n 1. BTI \n 2. DRC \n 3. KEN \n 4. MWI \n 5. RWA \n 6. SSD \n 7. TZA \n 8. UGA";
      break;
    case "1":
      response =
        "CON Choose your marketplace \n 1. Bujumbura \n 2. Gitega \n 3. Ngozi";
      break;
    case "1*1":
      response =
        "CON Choose your commodity \n 1. Animal Products \n 2. Beans \n 3. Cereals";
      break;
    case "1*1*1":
      response =
        "CON Choose your sub-category \n 1. Animal Products \n 2. Livestock \n 3. Poultry";
      break;
    case "1*1*1*1":
      response =
        "CON Choose your product \n 1. Eggs \n 2. Exotic Eggs \n 3. Local Eggs";
      break;
    case "1*1*1*1*1":
      let sql = `
        SELECT price

  FROM products
  WHERE country = 'BTI' AND market = 'Bujumbaru' AND product = 'eggs';`;
      try {
        const results = await db.raw(sql);
     
        response = `END Current prices for \n Eggs ${[...results].forEach(el => el.price)}`;
      } catch (error) {
        console.log(error);
        // do stuff with error
      }
      // response = `END Current prices for \n Eggs ${prices}`;
      break;
    default:
      response = "Bad request!";
  }
  res.send(response);
});

module.exports = router;
const app = require("express")();
const bodyParser = require("body-parser");
const logger = require("morgan");
const db = require("./data/dbConfig");

const port = process.env.PORT || 3030;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.send(
    "This is tutorial App on creating your first USSD app in 5 minutes or less by Ajala Abdulsamii <kgasta@gmail.com>"
  );
});

function get() {
  return db("products")
}

app.post("*", async (req, res) => {
  let { sessionId, serviceCode, phoneNumber, text } = req.body;
  let accountNumber = "ACC1001";
  let prices = "NGN 10,000";
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
      response = "CON Choose your commodity \n 1. Animal Products \n 2. Beans \n 3. Cereals";
      break;
    case "1*1*1":
      response = "CON Choose your sub-category \n 1. Animal Products \n 2. Livestock \n 3. Poultry";
      break;
    case "1*1*1*1":
      response = "CON Choose your product \n 1. Eggs \n 2. Exotic Eggs \n 3. Local Eggs";
      break;
    case "1*1*1*1*1":
        let sql = `
        SELECT price

  FROM products
  WHERE country = 'BTI' AND market = 'Bujumbaru' AND product = 'beans';`;
        try {
          const results = await db.raw(sql);
        console.log(results);
          response = results[0].price
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

// app.post("*", (req, res) => {
//   let { sessionId, serviceCode, phoneNumber, text } = req.body;
//   let accountNumber = "ACC1001";
//   let balance = "NGN 10,000";
//   let response = "";
//   switch (text) {
//     case "":
//       response =
//         "CON What would you want to check \n 1. My Account \n 2. My phone number";
//       break;
//     case "1":
//       response =
//         "CON Choose account information you want to view \n 1. Account number \n 2. Account balance";
//       break;
//     case "2":
//       response = `END Your phone number is \n ${phoneNumber}`;
//       break;
//     case "1*1":
//       response = `END Your account number is \n ${accountNumber}`;
//       break;
//     case "1*2":
//       response = `END Your balance is \n ${balance}`;
//       break;
//     default:
//       response = "Bad request!";
//   }
//   res.send(response);
// });

// app.post('*', (req, res) => {
//   let {sessionId, serviceCode, phoneNumber, text} = req.body
//   if (text == '') {
//     // This is the first request. Note how we start the response with CON
//     let response = `CON What would you want to check
//     1. My Account
//     2. My phone number`
//     res.send(response)
//   } else if (text == '1') {
//     // Business logic for first level response
//     let response = `CON Choose account information you want to view
//     1. Account number
//     2. Account balance`
//     res.send(response)
//   } else if (text == '2') {
//     // Business logic for first level response
//     let response = `END Your phone number is ${phoneNumber}`
//     res.send(response)
//   } else if (text == '1*1') {
//     // Business logic for first level response
//     let accountNumber = 'ACC1001'
//     // This is a terminal request. Note how we start the response with END
//     let response = `END Your account number is ${accountNumber}`
//     res.send(response)
//   } else if (text == '1*2') {
//     // This is a second level response where the user selected 1 in the first instance
//     let balance = 'NGN 10,000'
//     // This is a terminal request. Note how we start the response with END
//     let response = `END Your balance is ${balance}`
//     res.send(response)
//   } else {
//     res.status(400).send('Bad request!')
//   }
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

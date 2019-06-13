const models = require("./models");

module.exports = {
  getProductsInMarket
};

async function getProductsInMarket(market) {
  try {
    const products = await models.findProductsForMarket(market);
    console.log("products", products);
    let response = "CON Choose your product";
    products.forEach(function(item) {
      console.log(item.product)
      response = response + item.product;
    });
    return response;
  } catch (err) {
    console.log(err);
    return "Error :(";
  }
}

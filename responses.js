const models = require("./models");

module.exports = {
  getProductsInMarket
};

async function getProductsInMarket(market) {
  try {
    const products = await models.findProductsForMarket(market);
    console.log("products", products);

    let response = "CON Choose your product";

    products.forEach(function(index, item) {
      console.log("heelo", item.product)
      response = response + `${index + 1}` + item.product;
    });
    console.log("test", response)
    return response;
  } catch (err) {
    console.log(err);
    return "Error :(";
  }
}

const db = require("./data/dbConfig");

module.exports = {
  findPrice,
  findProductsForMarket
};


function findPrice(country, market, product) {
  return db("products")
    .select("price")
    .where({ country: country, market: market, product: product });
}

function findProductsForMarket(market) {
  return db("products")
    .select("product")
    .where({ market: market });
}

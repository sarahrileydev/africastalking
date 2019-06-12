const db = require("./data/dbConfig");

module.exports = {
  findPrice
};

function findPrice(country, market, product) {
  return db("products")
    .select("price")
    .where({ country: country, market: market, product: product });

}

const db = require("./data/dbConfig");

module.exports = {
  get,
  findById,
  add,
  update,
  remove,
  findPrice
};

function get() {
  return db("products");
}

function findById(id) {
  return db("products")
    .where({ id })
    .first();
}

function add(product) {
  // passing 'id' as the second Param is recommended to ensure the id is returned
  // when connecting to other DBMS like Postgres
  return db("products").insert(recipe, "id");
}

function update(id, changes) {
  return db("products")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("products")
    .where({ id })
    .del();
}

function getPrice() {
  let sql = `
  SELECT price

FROM products
WHERE country = 'BTI' AND market = 'Bujumbaru' AND product = 'eggs';`;

  let newPrice = [];
  results.forEach(function(cake) {
    newPrice.push(cake.price);
  });

  newPrice.toString();
}

function findPrice(country, market, product) {
  return db("products")
    .select("price")
    .where({ country: country, market: market, product: product });
    
}

function findAll() {
  return db("experiences").select(
    "id",
    "title",
    "description",
    "image",
    "category",
    "price",
    "maxSize",
    "region",
    "street",
    "city",
    "postCode",
    "time_commitment",
    "date",
    "time",
    "provider_id"
  );
}

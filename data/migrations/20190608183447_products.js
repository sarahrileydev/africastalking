
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(tbl){
    tbl.increments();

    tbl
    .string('country', 128) 
    .notNullable()
    .unique()
    tbl
    .string('market', 128) 
    .notNullable()
    .unique()
    tbl
    .string('product', 128) 
    .notNullable()
    .unique()
    tbl
    .string('price', 128) 
    .notNullable()
    .unique()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products');
};

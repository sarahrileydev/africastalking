
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, country: 'BTI', market: 'Bujumbaru', product: 'beans', price: '123'},
        {id: 2, country: 'BTO', market: 'Bujum', product: 'rice', price: '124'},
        {id: 3, country: 'BTP', market: 'Buj', product: 'coffee', price: '125'}
      ]);
    });
};

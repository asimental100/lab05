const fs = require('fs');
const pool = require('./utils/pool');
const store = require('./store');

describe.skip('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes an array of stops and saves them in the db', async() => {
    const books = [
      { id: 1, title: 'A Light in the Attic', coverImage: 'media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', rating: 'Three', price: '£51.77', inStock: true }
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(1);
  });
});

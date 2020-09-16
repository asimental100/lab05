const request = require('./request');
const parser = require('./parser');

describe('parse function', () => {
  it('should find all books in the document and return an array of those books. Each book object should include the books title, cover image, rating, price, and a boolean indicating if it is in stock', async() => {
    const document = await request(1);

    const bookTitles = parser(document);

    expect(bookTitles).toEqual(expect.arrayContaining([
      { availability: true, img: '../media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', price: '£51.77', rating: 'Three', title: 'A Light in the Attic' }
    ]));
  });
});

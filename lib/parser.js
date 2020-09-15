const parse = document => {
  const bookElements = [...document.querySelectorAll('ol > li > article')];
  
  const mappedBooks = bookElements.map(book => ({
    title: book.querySelector('img').getAttribute('alt'),
    img: book.querySelector('img').getAttribute('src'),
    rating: book.querySelector('p').getAttribute('class').split(' ')[1],
    price: book.getElementsByClassName('price_color')[0].textContent,
    availability: book.getElementsByClassName('instock availability')[0].textContent !== 'In Stock'
  }));

  return mappedBooks;
};

module.exports = parse;

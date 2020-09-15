const request = require('./request');
const parser = require('./parser');
const store = require('./store');

async() => { 
  const response = await request();
  const bookTitles = await parser(response);
  const storage = await store(bookTitles);
  
  console.log(storage.length);
};

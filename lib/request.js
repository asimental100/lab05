const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const request = async() => {
  const response = await fetch('http://books.toscrape.com/');

  const html = await response.text();

  const dom = new JSDOM(html);

  const document = dom.window.document;

  console.log(document);

  return document;
};

module.exports = request;

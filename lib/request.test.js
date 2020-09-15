const request = require('./request');

describe('request function', () => {
  it('makes a request to the books to scrape page and checks the title of said page', async() => {
    const response = await request(1);

    console.log(response.querySelector('head title').textContent);

    expect(response.querySelector('head title').textContent)
      .toEqual(expect.stringContaining('All products | Books to Scrape - Sandbox'));
  });
});

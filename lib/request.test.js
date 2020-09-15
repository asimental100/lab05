const request = require('./request');

describe.skip('request function', () => {
  it('makes a request to the books to scrape page and checks the title of said page', async() => {
    const response = await request();

    console.log(response.querySelector('head title').textContent);

    expect(response.querySelector('head title').textContent)
      .toEqual(expect.stringContaining('All products | Books to Scrape - Sandbox'));
  });
});

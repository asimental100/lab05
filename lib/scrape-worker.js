const store = require('./store');
const parser = require('./parser');
const request = require('./request');

module.exports = task => {
  console.log(`Page ${task.data.page}`);
  return request(task.data.page)
    .then(parser)
    .then(store);
};

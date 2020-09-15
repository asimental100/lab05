const store = require('./store');
const parser = require('./parser');
const pool = require('./utils/pool');
const request = require('./request');

module.exports = task => {
  console.log(`Page ${task.data}`);
  return request(task.data.page)
    .then(parser)
    .then(store)
    .finally(() => pool.end());
};

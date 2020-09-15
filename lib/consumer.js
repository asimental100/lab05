const { taskQueue } = require('./queue');

taskQueue.process(5, `${__dirname}/scrape-worker.js`);

taskQueue.on('active', () => {
  console.log('Task is active');
});

taskQueue.on('error', () => {
  console.log('An error has occurred');
});

taskQueue.on('stalled', () => {
  console.log('Task has stalled');
});

taskQueue.on('failed', () => {
  console.log('Task has failed');
});

taskQueue.on('progress', () => {
  console.log('task in progress');
});

taskQueue.on('completed', () => {
  console.log('task completed');
});

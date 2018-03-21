const getTodo = require('./src/requestExample');

(async function main() {
  const todo = await getTodo(1);

  console.log('Todo', todo); // eslint-disable-line no-console
}());

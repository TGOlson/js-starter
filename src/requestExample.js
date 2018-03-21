const fetch = require('node-fetch');

async function getTodo(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json());
}

module.exports = getTodo;

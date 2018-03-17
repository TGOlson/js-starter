const fetch = require('node-fetch');

const getTodo = id =>
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json());

module.exports = getTodo;

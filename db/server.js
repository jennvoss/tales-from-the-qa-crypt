const path = require('path');

// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults()

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1'
  })
);

server.use(middlewares)
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001')
})
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;
const private = [
  'index.js'
];

const server = http.createServer((req, res) => {
  const path = url
    .parse(req.url, true).pathname
    .replace(/^\/+|\/+$/g, '');
  if(!~private.indexOf(path)) {
    serveFile(path, (statusCode, payload, contentType = 'text/plain') => {
      res.setHeader('Content-Type', contentType);
      res.writeHead(statusCode);
      res.end(payload);
      console.log(statusCode, '/' + path);
    });
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${ port }.`);
});

function serveFile (path, response) {
  let contentType = path.split('.').pop() || 'html';
  switch(contentType) {
    case "js":
      contentType = 'text/javascript';
      break;
    case "html":
      contentType = 'text/html';
      break;
    case "css":
      contentType = 'text/css'
      break;
    case "png":
      contentType = 'image/png'
      break;
    default:
      return error.internalServer({code: "bad-file-type"}, response)
  }
  let filePath = './' + path;
  fs.exists(filePath, (exists) => {
    if(!exists) {
      return error.notFound(path, response);
    }

    if (fs.statSync(filePath).isDirectory()) {
      filePath += 'pokedex.html';
    }

    fs.readFile(filePath, (err, file) => {
      if(err) {
        return error.internalServer(err, response);
      }
      response(200, file, `${contentType}`);
    });
  });
};

const error = {
  notFound (path, response) {
    response(404, `404 File Not Found: ${path}\n`);
  },
  internalServer (err, response) {
    console.log(err)
    response(500, `500 Internal Server Error: ${ err.code }\n`);
  }
};
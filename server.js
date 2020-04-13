const jsonServer = require('json-server');
const http = require('http');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/echo', (req, res) => {
  res.jsonp(req.query)
});

server.use(jsonServer.bodyParser);

server.post('/', function (req, res) {

  const request = http.request(
    // 'url',
    {
      method: 'POST',
    },
    (resp) => {
      let data = '';
      // resp.setEncoding('utf8');
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        res.status(200).json(JSON.parse(data));
      });
    });

  request.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  request.write(JSON.stringify(req.body));
  request.end();
});

server.listen(3001, () => {
  console.log('JSON Server is running')
});

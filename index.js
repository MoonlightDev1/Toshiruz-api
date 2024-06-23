const http = require('http');
const httpProxy = require('http-proxy');

// Cria um servidor proxy
const proxy = httpProxy.createProxyServer({});

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
  const targetUrl = 'http://br2.bronxyshost.com:4109';

  proxy.web(req, res, { target: targetUrl }, (err) => {
    console.error('Proxy error:', err);
    res.writeHead(502);
    res.end('Bad gateway');
  });
});

// Inicia o servidor na porta 80
server.listen(80, () => {
  console.log('Proxy server listening on port 80');
});

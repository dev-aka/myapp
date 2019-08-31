const express = require('express');
const http = require('http');
const routes = require('./router');

const app = express();
const port = process.env.port || 3000;
app.set('port', port);

app.use('/', routes);

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    const address = server.address().address;
    const port = server.address().port;
    console.log(`server listening at ${address}:${port}`)
});
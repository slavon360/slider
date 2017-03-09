var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("./galleryApp"));
app.listen(5000);
console.log('running...')
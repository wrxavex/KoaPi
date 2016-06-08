var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var app = koa();
var router = new Router();

app.use(bodyParser());



router.get('/', function *() {
    this.body = 'Home';
    console.log(this.request.body.name);


});

router.get('/myapi', function *() {
    this.body = 'API';
});

app.use(router.middleware());
app.listen(3000);
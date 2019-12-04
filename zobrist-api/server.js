const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controller/productController');
 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

var router = express.Router();  
router.get('/products/:page/:size', function(req, res) {
   return productController.listProducts(req, res);
});

router.all('*',(req,res) => {
    res.status(404).send('404 Invalid Request');
  });

app.use('/api', router);

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});
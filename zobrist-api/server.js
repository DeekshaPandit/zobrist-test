const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controller/productController');
 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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
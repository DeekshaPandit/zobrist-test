const axios = require("axios"); 

module.exports.listProducts = function(req, res) {
   if(req) {
    const page = Number(req.params.page);
    const size = Number(req.params.size);
    
    if(page && size) 
    {
          axios.get(`http://localhost:3004/products?size=${size}&page=${page}`).then((data)=> {
             let result = data.data.slice(page * size, (page + 1) * size);
             res.status(200).send({result , message:'data fetched successfully'})
          }).catch((error)=> {
              console.log("error", error);
              res.status(500).send({message: 'Can not connect to Database'})
          })
    }
    else 
    {
        res.status(400).send("Invalid Request");
    }
   }    
}
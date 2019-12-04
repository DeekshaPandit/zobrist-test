const axios = require("axios");

module.exports.listProducts = function (req, res) {
    if (req) {
        const page = Number(req.params.page);
        const size = Number(req.params.size);

        if (page && size) {
            axios.get(`http://localhost:3004/products`).then((data) => {
                let start = page == 1 ? 0 : (page - 1) * size;
                let end = page == 1 ? (page) * size : (page) * size;
                let result = data.data.slice(start, end);
                res.status(200).send({
                    result,
                    message: 'data fetched successfully'
                })
            }).catch((error) => {
                console.log("error", error);
                res.status(500).send({
                    message: 'Can not connect to Database'
                })
            })
        } else {
            res.status(400).send("Invalid Request");
        }
    }
}
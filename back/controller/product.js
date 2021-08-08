// const fs = require("fs");
const Product = require("../models/product");
exports.create =async (req, res) => {
    console.log(req.body)
    let product = new Product(req.body)
        product.save((err, result) => {
                    if (err) {
                        console.log(err)
                        return res.status(400).json({
                            error: err
                        });
                    }
                    console.log(result)
      res.json(result);
                });
};


exports.remove =async (req, res) => {
    console.log(req.body)
    try {
        let Deleted =await Product.remove({ title: req.body.title });        
        return res.status(200).json({
            msg: 'המודעה נמחקה בהצלחה',
            time:Deleted.operationTime
        });
    } catch (error) {
        return res.status(400).json({
            error
        });
    }
};

exports.readList =async (req, res) => {
    Product.find({})
    .exec((err, products) => {
        if (err) {
            return res.status(400).json({
                error: "Products not found"
            });
        }
        console.log(products)
        res.json(products);
    });
};
exports.readOne =async (req, res) => {
    console.log(req.body.title)
    Product.find({title:req.body.title})
    .exec((err, products) => {
        if (err) {
            return res.status(400).json({
                error: "Products not found"
            });
        }
        console.log(products)
        res.json(products);
    });
};

exports.updateProduct =async (req, res) => {
    console.log(req.body.title)
    Product.update({ title: req.body.title }, { isDone: req.body.isDone })
    .exec((err, products) => {
        if (err) {
            return res.status(400).json({
                error: "Products not found"
            });
        }
        res.json(products);
    });
};




//Starting with sequelize
const router = require("express").Router();
var db = require("../models");

router.post("/item", function(req, res){
    // console.log(req.body);
    db.Item.create({
        name: "HP Laptop",
        description: "My laptop",
        price: 15
    })
});



module.exports = router;
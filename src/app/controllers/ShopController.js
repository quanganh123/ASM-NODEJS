const Coures = require('../models/Product');

class ShopController{
    async index(req, res, next) {

        try {
            Coures.find({}).lean() 
            .then(courses => res.render('shop',{
                courses: courses
            }))
        } catch (err) {
            next(err);
        }

    };
};

module.exports = new ShopController;
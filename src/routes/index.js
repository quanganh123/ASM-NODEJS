const homeRouter = require('./home');
const shopRouter = require('./shop');

function router(app) {

    app.use('/shop' ,shopRouter);

    app.use('/', homeRouter);
}

module.exports = router;
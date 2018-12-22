const cors = require('cors');

const {
    sortTree
} = require('../sortTree');
const {
    solve
} = require('../solve');

module.exports = function (app) {

    app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

    app.post('/calc', (req, res) => {
        let obj = Object.keys(req.body)[0];
        const exp = JSON.parse(obj).expression
        res.send({
            "result": solve(sortTree(exp))
        });
    });
};

const { sortTree } = require('../sortTree');
const {solve} = require('../solve');

module.exports = function(app) {
    app.post('/calc', (req, res) => {
        res.send({"result" : solve(sortTree(req.body.expression)).toString()});
    });
};

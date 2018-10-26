const {isNumeric} = require('./helper');

exports.solve = function (val) {
    let res = [];
    val = val.split(" ");
    val.pop();
    for (let i = 0; i < val.length; i++) {
        if (isNumeric(val[i])) {
            res.push(val[i]);
        } else if (res.length > 1) {
            let a = res.pop();
            let b = res.pop();
            if (val[i] === "+") {
                res.push(parseInt(a) + parseInt(b));
            } else if (val[i] === "-") {
                res.push(parseInt(b) - parseInt(a));
            } else if (val[i] === "*") {
                res.push(parseInt(a) * parseInt(b));
            } else if (val[i] === "/") {
                res.push(parseInt(b) / parseInt(a));
            }
        } else if (res.length === 1 && val[i] === "-") {
            let a = res.pop();
            res.push(parseInt(a) * -1);
        }
    }
    if (res.length > 1) {
        return "error";
    } else {
        return res.pop();
    }
};
const {isNumeric, clean} = require('./helper');

exports.sortTree = function (val) {
    let outQ = "";
    let opS = [];
    let oprts = {
        "^": {
            prec: 4,
            assoc: "Right"
        },
        "/": {
            prec: 3,
            assoc: "Left"
        },
        "*": {
            prec: 3,
            assoc: "Left"
        },
        "+": {
            prec: 2,
            assoc: "Left"
        },
        "-": {
            prec: 2,
            assoc: "Left"
        }
    };
    val = val.replace(/\s+/g, "");
    val = clean(val.split(/([\+\-\*\/\^\(\)])/));
    for (let i = 0; i < val.length; i++) {
        let token = val[i];
        if (isNumeric(token)) {
            outQ += token + " ";
        } else if ("^*/+-".indexOf(token) !== -1) {
            let o1 = token;
            let o2 = opS[opS.length - 1];
            while ("^*/+-".indexOf(o2) !== -1
                && ((oprts[o1].assoc === "Left"
                && oprts[o1].prec <= oprts[o2].prec)
                || (oprts[o1].assoc === "Right" && oprts[o1].prec < oprts[o2].prec)))
            {
                outQ += opS.pop() + " ";
                o2 = opS[opS.length - 1];
            }
            opS.push(o1);
        } else if (token === "(") {
            opS.push(token);
        } else if (token === ")") {
            while (opS[opS.length - 1] !== "(") {
                outQ += opS.pop() + " ";
            }
            opS.pop();
        }
    }
    while (opS.length > 0) {
        outQ += opS.pop() + " ";
    }
    return outQ;
};
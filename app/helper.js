exports.isNumeric = function (val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
};

exports.clean = function (arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === "") {
            arr.splice(i, 1);
        }
    }
    return arr;
};
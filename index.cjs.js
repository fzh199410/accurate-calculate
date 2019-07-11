/**
 * 相乘
 * @param arg1
 * @param arg2
 * @returns {number}
 */
var accMul = function(arg1, arg2) {
    if(checkParams(arg1, arg2)) {
        let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        m += s1.split('.')[1].length;
        m += s2.split('.')[1].length;
        return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
    }
};


/**
 * 相除
 * @param arg1
 * @param arg2
 * @returns {*}
 */
var accDiv = function(arg1, arg2){
    if(checkParams(arg1, arg2)) {
        var t1 = 0, t2 = 0, r1, r2;
        t1 = arg1.toString().split('.')[1].length;
        t2 = arg2.toString().split('.')[1].length;
        r1 = Number(arg1.toString().replace('.', ''));
        r2 = Number(arg2.toString().replace('.', ''));
        return accMul((r1 / r2), Math.pow(10, t2 - t1));
    }
};

/**
 * 相加
 * @param arg1
 * @param arg2
 * @returns {number}
 */
var accAdd = function (arg1, arg2){
    if(checkParams(arg1, arg2)) {
        let r1, r2, m;
        r1 = arg1.toString().split('.')[1].length;
        r2 = arg2.toString().split('.')[1].length;
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    }
};

/**
 * 相减
 * @param arg1
 * @param arg2
 * @returns {number}
 */
function accSub(arg1, arg2){
    if(checkParams(arg1, arg2)) {
        let r1, r2, m;
        r1 = arg1.toString().split('.')[1].length;
        r2 = arg2.toString().split('.')[1].length;
        m = Math.pow(10, Math.max(r1, r2));
        return ((arg1 * m - arg2 * m) / m);
    }
}




function checkParams(arg1, arg2) {
    if(arg1 == undefined || arg2 == undefined || isNaN(arg1) || isNaN(arg2)) {
        console.warn('params error');
        return false;
    }
    return true;
}

module.exports = {
    accMul,
    accDiv,
    accAdd,
    accSub
};
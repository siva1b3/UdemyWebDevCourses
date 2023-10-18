/* -------------------------------------------------------------------------- */
/* Method 1                                                                   */
/* -------------------------------------------------------------------------- */

/* using exports directly without creating a function in the code ---------- */
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;

/* -------------------------------------------------------------------------- */
/* Method 2                                                                   */
/* -------------------------------------------------------------------------- */

/* creating a function first then exporting it later ------------------------ */
const modulus = (a, b) => a % b;
module.exports = { modulus }

/* we cannot use both methods in one file ----------------------------------- */
/* because exports.add (or) module.exports.add ------------------------------ */
/* both will add new key - values paris to module.exports Object ------------ */
/* which is method 1 -------------------------------------------------------- */
/* but if we used method2 after method1 then exports.* will not work -------- */
/* because method2 will over write module.exports object -------------------- */
/* which was created in method1 by appending key - values paris ------------- */
/* hence don't use both methods in one file --------------------------------- */
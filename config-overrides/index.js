const { override } = require('customize-cra');

const ignoreCssOrder = require('./ignoreCssOrder');

module.exports = override(ignoreCssOrder);

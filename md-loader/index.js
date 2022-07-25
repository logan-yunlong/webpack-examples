"use strict";

var markdownIt = require('markdown-it');
const md = new markdownIt();
/**
 *
 * @param source
 * @returns {string}
 */
module.exports = function (source) {
    const content = md.render(source);
    const code = `module.export = ${JSON.stringify(content)}`
    return code;
}

"use strict";

const config = {
    plugins: [require('postcss-preset-env')]
}
module.exports = (env, argv) => {
    console.log('postcss.config.js');
    console.log('env:' + env);
    console.log('argv:' + argv);
    return config;
}

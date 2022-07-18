"use strict";

const config = {
    plugins: [require('postcss-preset-env')]
}
module.exports = (env, argv) => {
    return config;
}

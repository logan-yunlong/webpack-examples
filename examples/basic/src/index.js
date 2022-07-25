"use strict";
// 引入css样式
import "./main.css";
// 引入图片
import star from "../assets/star.png";


function appendImg() {
    const image = new Image();
    image.src = star;
    document.getElementById("app").appendChild(image);
}

window.onload = function () {
    appendImg();
}

const msg = "hello";
module.exports = msg;

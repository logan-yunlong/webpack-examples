"use strict";
import "./main.css";
import "./global.scss";
import star from "./assets/star.png";

const a = "hello";
console.log(a);
const image = new Image();
image.src = star;
document.getElementById("imgBox").appendChild(image);

module.exports = a;

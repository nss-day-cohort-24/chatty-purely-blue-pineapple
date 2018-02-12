"use strict";

console.log("let's try to make the midnight theme and text larger");


var checkBoxDark = document.getElementById("inlineCheckbox1");
var checkBoxLarge = document.getElementById("inlineCheckbox2");
var messageContainer = document.getElementById("message-container");
var messagesText = document.getElementsByClassName("message-post");

function checkDark() {
    if (checkBoxDark.checked === true) {
        messageContainer.style.backgroundColor = "#1b1d28";
        messageContainer.style.color = "#efeee9";
        console.log("the box is checked");
    } else if (checkBoxDark.checked === false) {
        messageContainer.style.backgroundColor = "#efeee9";
        messageContainer.style.color = "#2c314f";
    }
}
checkBoxDark.addEventListener("click", checkDark);


function checkLarge() {
    if (checkBoxLarge.checked === true) {
        messageContainer.style.fontSize = "2em";
        console.log("the box is checked");
    } else if (checkBoxLarge.checked === false) {
        messageContainer.style.fontSize = "1em";
    }
}

checkBoxLarge.addEventListener("click", checkLarge);


module.exports = {checkDark, checkLarge};
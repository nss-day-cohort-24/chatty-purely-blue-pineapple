"use strict";

console.log("let's try to make the midnight theme and text larger");

// var theme = document.getElementById("");
// if (theme.addEventListener) {
//     theme.addEventListener("select", myFunction);
// } else if (theme.attachEvent){
//     theme.attachEvent("onselect", myFunction);
// }
//  function themeChange() {
//     //  document.getElementById("inlineCheckbox1");
//  }
// }

// }

var checkBoxDark = document.getElementById("inlineCheckbox1");
var checkBoxLarge = document.getElementById("inlineCheckbox2");
var messageContainer = document.getElementById("message-container");
function checkDark() {
    if (checkBoxDark.checked === true) {
        messageContainer.style.backgroundColor = "#1b1d28";
        messageContainer.style.color = "white";
        console.log("the box is checked");
    } else if (checkBoxDark.checked === false) {
        messageContainer.style.backgroundColor = "white";
        messageContainer.style.color = "#212529";
    }
}
checkBoxDark.addEventListener("click", checkDark);


module.exports = {checkDark};





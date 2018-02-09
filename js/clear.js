"use strict";

console.log("The Clear JS file is totally working.");

let clearButton = document.getElementById("clear-btn").addEventListener("click", function clear(messages) {
    // console.log("clearButton function works");
    document.getElementById("messages").innerHTML=""; 

//IF THERE ARE NO MESSAGES ON BOARD, DISABLE BUTTON
    if(messages.value > 0) {
        document.getElementById("clear-btn").disabled = false;
    } else{
            document.getElementById("navbar-user-message").addEventListener("keyup", function enable(messages) {
                if (event.which === 13 || event.keyCode == 13) {
                    document.getElementById("clear-btn").disabled = false; 
                }
        });
            document.getElementById("clear-btn").disabled = true;
    } 
});


module.exports = (clearButton);
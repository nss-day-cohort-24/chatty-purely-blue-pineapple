"use strict";
console.log("test");
let input = require("./input");

// Load JSON file
let dataRequest = new XMLHttpRequest();
console.log(dataRequest);
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

// Function for data request complete
function dataRequestComplete(event){
    console.log("event", event);
        let messageData = JSON.parse(event.target.responseText);
        console.log(messageData);
}
// Function for data rquest failed
function dataRequestFailed(event) {
    console.log("Oops, an error occurred while transferring the file.");
}

// Initializes a request
dataRequest.open("GET", "js/messages.json");
dataRequest.send();
console.log(dataRequest);


// Message that is inputted into field
var newMessage = document.getElementById("navbar-user-message").value; 
//!!!Remember to erase message in textarea before you merge!!!!!
console.log(newMessage);



// Delete single message 
document.querySelector("body").addEventListener("click", deleteMessage);

function deleteMessage(event) {
    if (event.target.className === "delete") {
       event.target.parentNode.remove();
        console.log("test");
        console.log(event.target.parentNode);
    }
}

module.export = {newMessage};



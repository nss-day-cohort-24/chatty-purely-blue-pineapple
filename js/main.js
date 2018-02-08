"use strict";
console.log("Hello test");

let input = require("./input");



// ===TESTING GROUNDS
let dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", dataRequestLoad);
dataRequest.addEventListener("error", dataRequestError);

function dataRequestLoad(event){
    console.log("Loading...");
    let messageData = JSON.parse(event.target.responseText);
    console.log("messageData", messageData);
    console.log(messageData[0].message);
    showMessage(messageData);
}

function showMessage(inputJSON){
    let messageDiv = document.getElementById("messages");
    let messageStuff = '';
    for (let item in inputJSON){
        let messageItem = inputJSON[item];
        console.log(inputJSON[item]);
        messageStuff += "<div>" + messageItem.message + "</div>";
    }
    messageDiv.innerHTML = messageStuff;
}

function dataRequestError(event){
    console.log("Error Loading");
}

dataRequest.open("GET", "js/messages.json");
dataRequest.send();


"use strict";
console.log("Hello test");

let input = require("./input");



// ===TESTING GROUNDS
let dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", dataRequestLoad);
dataRequest.addEventListener("error", dataRequestError);

function dataRequestLoad(){
    console.log("Loading...");
    let messageData = JSON.parse(event.target.responseText);
    console.log("messageData", messageData);
    showMessage(messageData);
}

function showMessage(messageData){
    let messageDiv = document.getElementById("messages");
}

function dataRequestError(){
    console.log("Error Loading");
}

dataRequest.open("GET", "js/messages.json");
dataRequest.send();


"use strict";
console.log("input.js reporting test");

// ===PRELOADED MESSAGES
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
        messageStuff += "<div class=newMessage>" + messageItem.message + "<button class=delete type=button>X</button></div>";
    }
    messageDiv.innerHTML = messageStuff;
}

function dataRequestError(event){
    console.log("Error Loading");
}

dataRequest.open("GET", "js/messages.json");
dataRequest.send();

module.exports = dataRequest;


// ===INPUTTING MESSAGES
let inputMessage = document.getElementById("navbar-user-message");
inputMessage.addEventListener("keyup", messageEnter);
let messageHistory = [];
console.log("History:", messageHistory);

function messageEnter(){
    if (event.which === 13 || event.keyCode == 13) {
        messageDisplay();
        return false;
    }
}

function messageDisplay(){
    let messageDiv = document.getElementById("messages");
    messageDiv.innerHTML += "<div class=newMessage>" + inputMessage.value + "<button class=delete type =button>X</button></div>";
    messageHistory.unshift(inputMessage.value);
    inputMessage.value = '';
    console.log("New History:", messageHistory);
}

module.exports = {inputMessage, messageHistory};
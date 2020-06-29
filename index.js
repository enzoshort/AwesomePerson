document.getElementById("usrName").style.display = "none"; 

let usrName = prompt("What is your name? (no info will be stored)");

document.getElementById("usrName").style.display = "initial"; 

function greet(name) {
    let txt = "Hello, ";
    document.getElementById('constant').innerHTML = txt;
    document.getElementById('usrName').innerHTML = name;
    document.getElementById('nice').innerHTML = "You are an Awesome Person"
}

greet(usrName);
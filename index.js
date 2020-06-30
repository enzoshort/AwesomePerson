let usrInput = prompt("What is your name? (no info will be stored)");



function greet(name) {
    let txt = "Hello, ";
    document.getElementById('constant').innerHTML = txt; 
    document.getElementById("usrName").style.backgroundColor = "rgb(0, 159, 165)";
    document.getElementById('usrName').innerHTML = name;
    document.getElementById('nice').innerHTML = "You are an Awesome Person"
}

greet(usrInput);
//let username;
//username = window.prompt("What is your Name?");
//document.getElementById("big").textContent = username;

let username;

//document.getElementById("submit").onclick = function(){
//    username = document.getElementById("myText").value;
//    console.log(username)
//    document.getElementById("message").textContent = `Hello ${username}`
//    if (username === "user")
//    return window.location.replace('/index.html');
//}


document.getElementById("submit").onclick = function() {
    let number;
    number = document.getElementById("myNumber").value;
    if (number.trim() === "" || isNaN(number)) {
        document.getElementById("return").textContent = "Please enter a valid number";
    } else {
        document.getElementById("message").textContent = number;
        document.getElementById("return").textContent = "";
    }
    return false;
}

//counter
let count = 0;
document.getElementById("increaseBtn").onclick = function() {
    count++;
    console.log(count);
    document.getElementById("counter").textContent = count
}

document.getElementById("decreaseBtn").onclick = function() {
    count--;
    console.log(count);
    document.getElementById("counter").textContent = count
}

document.getElementById("resetBtn").onclick = function() {
    count = 0;
    console.log(count);
    document.getElementById("counter").textContent = count
}

let x = Math.round(Math.random() * 100)
x /= 10;
x = Math.floor(x)
console.log(x)

const enter = document.getElementById("enter");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const result = document.getElementById("result");


enter.onclick = function() {
    if (visa.checked) {
        result.textContent = "You are paying with Visa";
    } 
    else if (mastercard.checked) {
        result.textContent = "You are paying with Mastercard";
    }
    else if (paypal.checked) {
        result.textContent = "You are paying with Paypal"
    }
    else {
        result.textContent = "Please enter a valid payment method"
    }
}

let shit = true
let message = shit ? "Shit is happening" : "There is no shit happening"

while (true) {
    console.log(message);
    break;
}
let day = new Date().getDay();
let date;
switch (day) {
  case 0:
    date = "Sunday";
    break;
  case 1:
    date = "Monday";
    break;
  case 2:
    date = "Tuesday";
    break;
  case 3:
    date = "Wednesday";
    break;
  case 4:
    date = "Thursday";
    break;
  case 5:
    date = "Friday"
    break;
  case 6:
    date = "Saturday"
    break;
  default:
    date = " an Invalid Date"
}
document.getElementById("Date").textContent = `Today is ${date}!`;
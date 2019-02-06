//import '../styles/index.scss';
import $ from "jquery";
import {Car} from './models/car.js';

console.log('Testing 123...');

let firstElement = document.getElementsByClassName("p1");

//const carID = 100;

//let car = new Car(20);
console.log(firstElement); 
//console.log("ID: "+ car.id);
// carID = 2;

//Form
let testForm = document.getElementById("user-form");

testForm.addEventListener("submit", event => {
    let usernameElement = testForm.elements["user"];
    let avatarElement = testForm.elements["avatar"];

    let usernameElementError = document.getElementById("user-error");
    let avatarElementError = document.getElementById("avatar-error");


    //Paint it red
    usernameElementError.textContent = "Invalid Username Entry";
    usernameElementError.style.color = "red";
    usernameElement.style.borderColour = "red";
    usernameElement.focus();

    avatarElementError.textContent = "Invalid Avatar Entry";
    avatarElementError.style.color = "red";
    avatarElement.style.borderColour = "red";
    avatarElement.focus();


    console.log(usernameElement.value, avatarElement.value);
    event.preventDefault();
});

//Creating Promises
let someNewPerson = {
    "name" : "Kay Beatz",
    "avatar" : "kayAvatar.jpg"
};


//let testPromiseGet = $.get("http://5c5abc5d1041df0014b3ee3b.mockapi.io/test/users");

//let testPromisePost = $.post("http://5c5abc5d1041df0014b3ee3b.mockapi.io/test/users", someNewPerson);


// testPromisePost.then(
//     data => console.log("User/Posted Data: \n"+ data),
//     error => console.log("Error Info: \n"+ error)
// );
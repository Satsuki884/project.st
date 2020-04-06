const myResetButton = document.getElementById( "my-reset-button");
const myAnotherButton = document.getElementById( "my-reset-button-in-the-form");

function myButtonClickListener(event) {
    console.log("My listener, WOOOOO, event");
    console.log(event.target.id);
}

myResetButton.addEventListener( "click", myButtonClickListener);
myResetButton.addEventListener( "click", function myFunc() { console.log(2)});
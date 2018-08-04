// var input = document.getElementsById("userinput");
// var textarea = document.getElementsById("userinput2");
// var button = document.getElementsByTagId("enter");
// var div = document.querySelector("div");

// function inputLength () {
//   return input.value.lenght;
// }

// function createListElement () {
//   input = document.createElement("input");
//   textarea = document.createElement("textarea");
//   input.appendChild(document.createTextNode(input.value));
//   textarea.appendChild(document.createTextNode(input.value));
//   div.appendChild(input);
//   div.appendChild(textarea);
//   input.value = "";
//   input.value = "";
// }

const addEventListener = () => {
    if (inputLength() > 0) {
         createElement ();
         }
}

// function addListAfterClick () {
//   if (inputLength() > 0){
//     createElement ();
//   }
// }

// function addListAftetKeypress (event) {
//   if (inputLength() > 0 && event.keyCode === 13) {
//     createListElement ();
//   }
// }

// button.addEventListener("click", addListAfterClick);
// textarea.addEventListener("click", addListAftetKeypress);
// input.addEventListener("click", addListAftetKeypress);


// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function () {
//   console.log("CLICK!!!");
// })

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient () {
   body.style.background =
   "linear-gradient(to right, " 
   + color1.value 
   + ", " 
   + color2.value 
   + ")";

   css.textContent = body.style.background + ";" ;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

const first = () => {
    const greet = "Hi";
    const second = () =>{
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();


const flattened = [[1, 2], [2, 3], [3, 4]].reduce{
    (acc, array) => {
        console.log('array', array);
        console.log('acc', acc);
        return acc.concat(array);
    }, []};

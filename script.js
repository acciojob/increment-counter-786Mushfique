//your JS code here. If required.
let parentDiv = document.getElementById("counter")
let display = parentDiv.querySelector("p")
let count = 0
function Increment(){
  count++;
  display.innerText = count ;
  }
}
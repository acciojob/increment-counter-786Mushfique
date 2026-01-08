//your JS code here. If required.
let parentDiv = document.getElementById("count")
let display = parentDiv.querySelector("p")
let count = 0
function Increment(n){
  count++;
  display.innerText = count ;
  }
}
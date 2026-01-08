//your JS code here. If required.
let count = 0;
const counter = document.getElementById("counter");

function Increment() {
    alert(count);        
    count++;
    counter.innerText = count;
}

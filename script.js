//your JS code here. If required.
let count = 0;
const counter = document.getElementById("counter");

function increment() {
    alert(count);        
    count++;
    counter.innerText = count;
}

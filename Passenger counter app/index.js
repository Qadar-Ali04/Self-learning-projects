
let countEl = document.getElementById("count-el"); 
// Grabs objects from HTML file so that it can be implemented or changed to make it interactive. 

let count = 0

 function increment() {
   count = count + 1; 
   countEl.innerText = count;
   // Grabs the allocated text from html to equal the JavaScript variable, so that it can be changed 
 }

function save() {
  console.log(count);
}

// Implement a welcome text. 

// Start shift button, which logs date, time and counter. 

// Get the current date and time
const now = new Date();

// Format as a readable string
const formatted = now.toLocaleString('en-GB', { 
    dateStyle: 'full', 
    timeStyle: 'long' 
});





// End shift button, which logs date, time and counter.
console.time()
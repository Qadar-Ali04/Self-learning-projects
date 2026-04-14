
let welcomeEl = document.getElementById("welcome-el")
let countEl = document.getElementById("count-el"); 
let saveEl = document.getElementById("save-el")
// Grabs objects from HTML file so that it can be implemented or changed to make it interactive. 

// Implement a login form with account number - 4 and name, 


// Implement a welcome text. 

let name = "Qadar Ali" ; 
let greeting = "Welcome back, " ; 

welcomeEl.innerText = greeting + name;
welcomeEl.innerText+="👋";

// Counter button 

let count = 0

 function increment() {
   count += 1;
   countEl.textContent = count;
   // Grabs the allocated text from html to equal the JavaScript variable, so that it can be changed.
 }


// Save button

function save() {
 let countStr = count + " - "; 
 saveEl.textContent += countStr;
 count = 0
 countEl.textContent = 0
}


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

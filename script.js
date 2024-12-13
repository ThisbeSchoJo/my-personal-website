// Add a small console message to greet visitors
console.log("Welcome to Thisbe's personal website!");

//Get the toggle button and body element
const toggleButton = document.getElementById("mode-toggle");
const body = document.body;
//Function to toggle to dark mode
function toggleMode() {
    body.classList.toggle("dark-mode"); // Toggle the dark-mode class on body
    // Change button icon
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "🌞"; // Change icon to sun (day mode)
    } else {
        toggleButton.textContent = "🌙" //Change icon to moon (night mode)
    }    
}

// Attach the function to the button's click event listener
toggleButton.addEventListener("click", toggleMode);

const cursor = document.createElement('div');
cursor.id = "custom-cursor";
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    console.log(`Cursor position: X=${e.pageX}, Y= ${e.pageY}`);
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
});
document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});
document.addEventListener('mouseleave',() => {
    cursor.style.display = 'none';
});

//Navigation Bar//
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('nav').innerHTML = data;
    });

//Book recommendation form//


let inputValue = ''
const formInput = document.getElementById('form-input')

formInput.addEventListener('change', function(event){
    inputValue = event.target.value
})

const form = document.getElementById('form')
form.addEventListener('submit', function(event) {
    event.preventDefault()
    const li = document.createElement('li')
    li.textContent = inputValue
    const ul = document.getElementById('text-container')
    ul.append(li)
})



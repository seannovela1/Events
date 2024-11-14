// Get the button element
const button = document.getElementById('clickButton');
// Define the event listener for the button
function handleButtonClick(){
    alert('Button clicked!');
    // Remove the event listener so it will not trigger again
    button.removeEventListener('click', handleButtonClick);
}
// Add the event listener to the button
button.addEventListener('click', handleButtonClick);
// Get the link element
const link = document.getElementById('myLink');
// Define the event listener for the link
function handleLinkClick(event){
    event.preventDefault();  // Prevent the link from navigating
    alert("No distractions! I’m coding!");  // Show alert
}
link.addEventListener('click', handleLinkClick);

const buttonBackgroundChange = document.querySelector('#button-background-change');
const buttonAlert = document.querySelector('#button-alert');
const buttonChangeText = document.querySelector('#button-change-text');
const buttonToggleVisibility = document.querySelector('#button-toggle-visibility');
const buttonReset = document.querySelector('#button-reset');
const buttonPlayAudio = document.querySelector('#button-play-audio'); // New Button
const body = document.body;
 
buttonBackgroundChange.addEventListener('click', colorChange);
buttonAlert.addEventListener('click', showAlert);
buttonChangeText.addEventListener('click', changeText);
buttonToggleVisibility.addEventListener('click', toggleVisibility);
buttonReset.addEventListener('click', reset);
buttonPlayAudio.addEventListener('click', playAudio); // Event Listener for Audio Button
 
function colorChange() {
    body.style.backgroundColor = 'aqua';
}
 
function showAlert() {
    alert('Hello!');
}
 
function doSomething() {
    document.body.classList.add("red");
    document.body.style.background = "green";
    heading.classList.add("heading-big");
}
 
function anotherfunc() {
    heading.classList.remove("heading-big");
    document.body.classList.remove("red");
}
 
let heading = document.querySelector("#my-heading");
 
let heading2 = document.querySelector("#heading2");
let input = document.querySelector("#your-name");
 
function seyhello() {
    heading2.innerHTML = "Hello ";
    heading2.innerHTML += input.value;
}
 
// New Functions
function changeText() {
    heading.innerHTML = "Text has been changed!";
}
 
function toggleVisibility() {
    if (heading2.classList.contains('hidden')) {
        heading2.classList.remove('hidden');
    } else {
        heading2.classList.add('hidden');
    }
}
 
function reset() {
    heading.innerHTML = "Internet is now deleted";
    heading2.classList.remove('hidden');
    input.value = '';
    body.style.backgroundColor = '';
    document.body.classList.remove("red");
    heading.classList.remove("heading-big");
}
 
// Function to play audio
function playAudio() {
    const audio = document.querySelector('#audio');
    audio.play();
}
 
 
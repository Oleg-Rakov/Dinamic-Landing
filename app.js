// Dom Elements
const time = document.getElementById('time');
console.log(time)
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const bgFix = document.querySelector('.background-edit');
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();


  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format 
  hour = (hour > 12) ? (hour - 12) : hour;

  // Show US Time
  const showUsTime = showAmPm ? amPm : '';

  // Output Time  - Переписать через сложение строк 
  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${showUsTime}`;

  setTimeout(() => showTime(), 1000);
};

// Add Zeros
function addZero(min) {
  let prefix = '';
  if (parseInt(min) < 10) {
    prefix += '0'
  }
  return prefix + min;
};

// Set Background and Greeting
function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('./img/morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = 'white'
  } else {
    // Evening
    document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg)";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
};

// Get Name 
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  };
};

// Set Name
function setName(e) {
  // if (e.type === 'keypress') {
  //   // Make sure enter is pressed
  //   if (e.which == 13 || e.keyCode == 13) {
  //     localStorage.setItem('name', e.target.innerText);
  //     name.blur();
  //   }
  // } else {
  //   localStorage.setItem('name', e.target.innerText);
  // }
  localStorage.setItem('name', e.target.innerText);
}

// Get Focus 
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  };
};

// Set Focus
function setFocus(e) {
  // if (e.type === 'keypress') {
  //   // Make sure enter is pressed
  //   if (e.which == 13 || e.keyCode == 13) {
  //     localStorage.setItem('focus', e.target.innerText);
  //     focus.blur();
  //   }
  // } else {
  //   localStorage.setItem('focus', e.target.innerText);
  // }
  localStorage.setItem('focus', e.target.innerText);
}

// Update Name&Focus
// name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
// focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run Interactive
showTime();
setBgGreet();
getName();
getFocus();



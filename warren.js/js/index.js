console.log('Hello world from Warren.js');

function sayHello() {
  document.getElementById('message').textContent = 'Hello there! You clicked the button 🎉';
}

// Attach the function to the button
document.getElementById('helloButton').addEventListener('click', sayHello);


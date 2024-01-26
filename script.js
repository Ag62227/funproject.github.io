document.getElementById('danceButton').addEventListener('click', () => {
    alert("Hello! I am an alert box!!");
    const turtle = document.getElementById('coolTurtle');
    turtle.style.transform = 'rotate(90deg)';
    
});

document.getElementById('musicButton').addEventListener('click', () => {
    alert("Hello! I am an alert box!!");
    const audio = new Audio('turtleSound.m4a'); 
    audio.play();
    alert("Hello! I am an alert box!!");
});


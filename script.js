document.getElementById('danceButton').addEventListener('click', () => {
    const turtle = document.getElementById('coolTurtle');
    turtle.style.transform = 'rotate(360deg)';
});

document.getElementById('musicButton').addEventListener('click', () => {
    const audio = new Audio('turtle_music.mp3'); // Replace with your turtle music file
    audio.play();
});

document.getElementById('danceButton').addEventListener('click', () => {
    const turtle = document.getElementById('coolTurtle');
    turtle.style.transform = 'rotate(90deg)';
});

document.getElementById('musicButton').addEventListener('click', () => {
    const audio = new Audio('turtleSound.m4a'); 
    audio.play();
    showNotification('Turtle music is playing!');
});
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000); // Remove the notification after 2 seconds
}

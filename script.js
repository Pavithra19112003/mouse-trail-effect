// Create a mouse trail effect
const trailLength = 20; // Number of trail elements
const trails = [];

// Create trail elements and add them to the body
for (let i = 0; i < trailLength; i++) {
    const trailElement = document.createElement('div');
    trailElement.className = 'trail';
    document.body.appendChild(trailElement);
    trails.push(trailElement);
}

// Function to update the position of the trail elements
document.addEventListener('mousemove', (event) => {
    // Set the new position for each trail element
    for (let i = trails.length - 1; i > 0; i--) {
        trails[i].style.left = trails[i - 1].style.left;
        trails[i].style.top = trails[i - 1].style.top;
    }

    // Set the first trail element to follow the mouse cursor
    trails[0].style.left = event.pageX + 'px';
    trails[0].style.top = event.pageY + 'px';
});

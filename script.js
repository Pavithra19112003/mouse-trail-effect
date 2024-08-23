const trailLength = 20; 
const trails = [];
for (let i = 0; i < trailLength; i++) {
    const trailElement = document.createElement('div');
    trailElement.className = 'trail';
    document.body.appendChild(trailElement);
    trails.push(trailElement);
}
document.addEventListener('mousemove', (event) => {
    for (let i = trails.length - 1; i > 0; i--) {
        trails[i].style.left = trails[i - 1].style.left;
        trails[i].style.top = trails[i - 1].style.top;
    }
    trails[0].style.left = event.pageX + 'px';
    tsrails[0].style.top = event.pageY + 'px';
});

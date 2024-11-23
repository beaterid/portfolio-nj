// script.js
document.querySelector('.portfolio-container').addEventListener('wheel', (event) => {
    event.preventDefault();
    event.currentTarget.scrollLeft += event.deltaY;
});

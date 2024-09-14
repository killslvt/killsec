function loadContent() {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');

    overlay.style.transition = 'opacity 1s ease-in-out';
    overlay.style.opacity = 0;

    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);

    content.style.transition = 'opacity 1s ease-in-out';
    content.style.opacity = 1;
}

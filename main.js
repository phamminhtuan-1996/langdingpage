document.addEventListener('DOMContentLoaded', function () {
    const blockDotLeft = document.querySelector('.dot-left');
    const blockDotRight = document.querySelector('.dot-right');
    const dotItem = document.querySelector('.dot-item');
    const createElement = document.createElement("div");
    const classElement = createElement.classList.add('dot-item');
    blockDotRight.appendChild(classElement);
});
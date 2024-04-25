const ventana = document.querySelector('.picBorder');
h3 = ventana.querySelector('header');


function onDrag(movementX, movementY) {
    let getStyle = window.getComputedStyle(ventana);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    ventana.style.left = `${left + movementX}px`;
    ventana.style.top = `${top + movementY}px`;
};

h3.addEventListener('mousedown', ()=> {
    h3.addEventListener('mousemove', onDrag);
});
const isotipo = document.querySelector('#c12');
const navMenu = document.querySelector('#navM');
const efecto = document.querySelector('#c13');

var on = 0;

isotipo.addEventListener('click', () =>{
    if (on < 1){
        isotipo.classList.remove('grow');
        isotipo.classList.add('click');
        setTimeout(() => {
            efecto.classList.add('show');
        }, 1);
        setTimeout(() => {
            animationLogotipo();
            on = 1;
        }, 650);
    } else {
        return
    }
})

function animationLogotipo(numero) {
    var capa1 = '';
    for (var numero = 11; numero > 0 ; numero --) {
        var capa1 = document.querySelector(`#c${numero}`);
        capa1.classList.add('move');
    }
    isotipo.classList.remove('click');
    isotipo.classList.add('move');
    navMenu.classList.add('navAnimation');
}
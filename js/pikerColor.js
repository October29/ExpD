const palettePicker = document.querySelector('.container_picker');
const colorContainer = document.getElementById('colorContainer');
const logoColorsContainerOne = document.querySelector('.ver_full_h');
const logoColorsContainerTwo = document.querySelector('.ver_short_v');
const logoColorsContainerThree = document.querySelector('.ver_short_h');
const hex = document.getElementById('hex');
const rgb = document.getElementById('rgb');
const cmyk = document.getElementById('cmyk');

const bRed = document.getElementById('bRed');
bRed.addEventListener('click', changeColor);

const bYellow = document.getElementById('bYellow');
bYellow.addEventListener('click', changeColor);

const bGreen = document.getElementById('bGreen');
bGreen.addEventListener('click', changeColor);

const bBlue = document.getElementById('bBlue');
bBlue.addEventListener('click', changeColor);

function changeColor(event) {
    const btn = event.target;
    if (btn.id === 'bRed') {
        palettePicker.style.backgroundColor = 'var(--redMainColor)';
        colorContainer.style.backgroundColor = 'var(--redMainColor)';
        hex.style.color = 'var(--redMainColor)';
        rgb.style.color = 'var(--redMainColor)';
        cmyk.style.color = 'var(--redMainColor)';
        hex.innerHTML = '#ff0000';
        rgb.innerHTML = '<span class="strong">RGB: </span>255 0 0';
        cmyk.innerHTML = '<span class="strong">CMYK: </span>0% 95% 91% 0%';
        btn.classList.add('pick_select');
        bYellow.classList.remove('pick_select');
        bGreen.classList.remove('pick_select');
        bBlue.classList.remove('pick_select');
        logoColorsContainerOne.style.fill = 'var(--redMainColor)';
        logoColorsContainerTwo.style.fill = 'var(--redMainColor)';
        logoColorsContainerThree.style.fill = 'var(--redMainColor)';
    } else if(btn.id === 'bYellow') {
        palettePicker.style.backgroundColor = 'var(--yellowMainColor)';
        colorContainer.style.backgroundColor = 'var(--yellowMainColor)';
        hex.style.color = 'var(--yellowMainColor)';
        rgb.style.color = 'var(--yellowMainColor)';
        cmyk.style.color = 'var(--yellowMainColor)';
        hex.innerHTML = '#f4ae00';
        rgb.innerHTML = '<span class="strong">RGB: </span>244 174 0';
        cmyk.innerHTML = '<span class="strong">CMYK: </span>3% 35% 96% 0%';
        btn.classList.add('pick_select');
        bRed.classList.remove('pick_select');
        bGreen.classList.remove('pick_select');
        bBlue.classList.remove('pick_select');
        logoColorsContainerOne.style.fill = 'var(--yellowMainColor)';
        logoColorsContainerTwo.style.fill = 'var(--yellowMainColor)';
        logoColorsContainerThree.style.fill = 'var(--yellowMainColor)';
    } else if(btn.id === 'bGreen') {
        palettePicker.style.backgroundColor = 'var(--greenMainColor)';
        colorContainer.style.backgroundColor = 'var(--greenMainColor)';
        hex.style.color = 'var(--greenMainColor)';
        rgb.style.color = 'var(--greenMainColor)';
        cmyk.style.color = 'var(--greenMainColor)';
        hex.innerHTML = '#00cc00';
        rgb.innerHTML = '<span class="strong">RGB: </span>0 204 0';
        cmyk.innerHTML = '<span class="strong">CMYK: </span>72% 0% 100% 0%';
        btn.classList.add('pick_select');
        bRed.classList.remove('pick_select');
        bYellow.classList.remove('pick_select');
        bBlue.classList.remove('pick_select');
        logoColorsContainerOne.style.fill = 'var(--greenMainColor)';
        logoColorsContainerTwo.style.fill = 'var(--greenMainColor)';
        logoColorsContainerThree.style.fill = 'var(--greenMainColor)';
    } else if(btn.id === 'bBlue') {
        palettePicker.style.backgroundColor = 'var(--blueMainColor)';
        colorContainer.style.backgroundColor = 'var(--blueMainColor)';
        hex.style.color = 'var(--blueMainColor)';
        rgb.style.color = 'var(--blueMainColor)';
        cmyk.style.color = 'var(--blueMainColor)';
        hex.innerHTML = '#0866ff';
        rgb.innerHTML = '<span class="strong">RGB: </span>8 102 255';
        cmyk.innerHTML = '<span class="strong">CMYK: </span>85% 61% 0% 0%';
        btn.classList.add('pick_select');
        bRed.classList.remove('pick_select');
        bYellow.classList.remove('pick_select');
        bGreen.classList.remove('pick_select');
        logoColorsContainerOne.style.fill = 'var(--blueMainColor)';
        logoColorsContainerTwo.style.fill = 'var(--blueMainColor)';
        logoColorsContainerThree.style.fill = 'var(--blueMainColor)';
    }
}
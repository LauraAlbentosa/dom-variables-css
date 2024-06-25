// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

/* 
const rootStyles = document.documentElement.style;

rootStyles.setProperty('--primary-color', 'green');

 por convención para llamar a la var de css llamamos a la constante de js rootStyles
 
 
*/

// - Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.

const rootStyles = document.documentElement.style;
let divGrowth = ''

const getPercentageScroll = () => {
  let maxScrollPosition = document.body.scrollHeight - window.innerHeight;

  let scrollAmount = window.scrollY;
  let scrollPercentage = (scrollAmount * 100) / maxScrollPosition;

  const maxWidthWindow = window.innerWidth;
  divGrowth = (scrollPercentage * maxWidthWindow) / 100;

  rootStyles.setProperty('--div-width', String(divGrowth) + 'px');

  return divGrowth
};

window.addEventListener('scroll', getPercentageScroll);
const a = 80;

// - Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.

const displacementElement = document.getElementById('displacement')

const pxChange = () =>{
    displacementElement.textContent =Math.round(divGrowth) + 'px'
}

window.addEventListener('scroll', pxChange)


// - Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón

const buttonRGBElement = document.getElementById('button-rgb')
const buttoHEXElement = document.getElementById('button-hex')

const colorsRGB = () =>{
    let colorRGB = '';
    for (let i = 0; i<3;i++){
        let randomNumber = Math.floor(Math.random()*255)
        colorRGB += randomNumber +','

        if( i === 2){
            colorRGB += randomNumber
        }
        
    }
    rootStyles.setProperty('--background-color', `rgb(${colorRGB})`)
}

buttonRGBElement.addEventListener('click',colorsRGB)

const colorsHEX = () =>{
    let colorHEX = '#'

}

// - Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él.

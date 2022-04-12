
import '../css/componente.css'; //importando la hoja de estilos
import webpacklogo from '../assets/image/webpack-logo.png';

export const hello = (name) => {
    console.log('iniciando el saludo');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola amiga, ${name}`;

    //para renderizarlo
    document.body.append(h1);

    const divElement = document.createElement('div');
    divElement.classList.add('centrar');

    const img = document.createElement('img');
    img.src = webpacklogo;

    divElement.append(img);

    document.body.append(divElement);
}

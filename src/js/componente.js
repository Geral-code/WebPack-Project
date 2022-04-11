


export const hello = (name) => {
    console.log('iniciando el saludo');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${name}`;


    document.body.append(h1);

    
}

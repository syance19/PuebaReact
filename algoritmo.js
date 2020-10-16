let numeros = [3,2,1,3,];
    let mayor= Math.max.apply(null,numeros);
    let conteo = 0;
    numeros.forEach((i) => {
        if (mayor===numeros[i]) {
            conteo += 1;
        } 
    });
    console.log(conteo);
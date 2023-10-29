let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net']

let combinaciones = [];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extension.length; l++) {

                let combinacion = pronoun[i] + adj[j] + noun[k] + extension[l];
                combinaciones.push(combinacion);
            }
        }
    }
}

// Imprimir las combinaciones en la consola
combinaciones.forEach(combinacion => {
    console.log(combinacion);
});

let startrendu = document.querySelector("#monnaie");
console.log(startrendu);
startrendu.addEventListener('click', function(){
    console.log('ça fonctionne');
const MONNAIE = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
const BILLET = ['Billet de 500', 'Billet de 200', 'Billet de 100', 'Billet de 50', 'Billet de 20', 'Billet de 10', 'Billet de 5', 'Pièce de 2', 'Pièce de 1', 'Pièce de 0.5', 'Pièce de 0.2', 'Pièce de 0.1', 'Pièce de 0.05', 'Pièce de 0.02', 'Pièce de 0.01']

let somme = 0
let input = 0
let rendre = 0 

input = prompt('Entrez le prix d\'un produit (entrez "end" pour valider)')

while (input !== 'end') {
    if (!isNaN(input)) {
        input = parseFloat(input)
        somme += input
        input = prompt('Entrez le prix d\'un produit (entrez "end" pour valider)')
        
    }
    if (isNaN(input) && input !== 'end') {
        input = prompt('Veuillez entrer un nombre SVP')
    }
}console.log(somme);

let argent = prompt('Entrez ici combien vous donnez')
console.log(argent);
do {
    if (isNaN(argent)){        
        argent = prompt('Entrez un nombre SVP')
    }
    if (!isNaN(argent)) {
        argent = parseFloat(argent)
        if (argent < somme) { 
            argent = 0
            argent = prompt('Entrez une valeur supérieur ou égale à l\'achat SVP')
        } else {
            rendre = (argent * 100 - somme * 100) /100
        }
    }
} while (argent < somme || isNaN(argent));

let piece =''

for (let i in MONNAIE) {
    if (rendre % MONNAIE[i] < rendre) {
        piece += ` ${(rendre - (rendre % MONNAIE[i])) /(MONNAIE[i])} x ${BILLET[i]}€,`
        rendre = ((rendre * 100) % (MONNAIE[i] * 100))/100
    }
    if (rendre === 0) {
        break;
    }
}
if (argent === somme) {
    piece = ' rien, le compte est bon. '
}

piece = piece.substring(0, piece.length -1);
document.querySelector('#containermonnaie').insertAdjacentHTML('beforeend', `<div class="reponsemonnaie mt-3">
Vous avez donné : ${argent}€ et vous devez payer : ${somme}€.
<br>
Nous devons vous rendre :${piece}.
</div>`)
console.log(`Nous devons vous rendre :${piece}`);
})

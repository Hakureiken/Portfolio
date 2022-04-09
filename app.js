
let startrendu = document.querySelector("#monnaie");

startrendu.addEventListener('click', function(){
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


// algo pour l'échec
document.querySelector('#startechec').addEventListener('click', function(){
    let plateau = []
    let ligne = [], ligne1=[], ligne2 = [], ligne3 = [], ligne4 = [], ligne5 = [], ligne6 = [], ligne7 = [], ligne8 = [];


    let testechec = document.querySelectorAll('.damier input');
    for (let i = 0; i < testechec.length; i++) {
        ligne.push(testechec[i].value)

        ligne1 = ligne.slice(0,7);
        ligne2 = ligne.slice(8,15);
        ligne3 = ligne.slice(16,23);
        ligne4 = ligne.slice(24,31);
        ligne5 = ligne.slice(32,39);
        ligne6 = ligne.slice(40,47);
        ligne7 = ligne.slice(48,55);
        ligne8 = ligne.slice(56,63);
    }
    plateau.push(ligne1,ligne2,ligne3,ligne4,ligne5,ligne6,ligne7,ligne8)

    console.log(plateau);
    let booleenend = ''
    for (i = 0; i < plateau.length; i++) {

        for (n = 0; n < plateau.length; n++) {
    
            if (plateau[i][n] === 'C') {
                
                if (i + 2 > 7 || n + 1 > 7) {
                    booleen = false
                    console.log(booleen);
                } else {
                    booleen = (plateau[i+2][n+1] === 'p' || plateau[i+2][n+1] === 't' || plateau[i+2][n+1] === 'f' || plateau[i+2][n+1] === 'r' || plateau[i+2][n+1] === 'd' || plateau[i+2][n+1] === 'c')
                }
                
                if (i + 2 > 7 || n - 1 < 0) {
                    booleen1 = false
                } else {
                    booleen1 = (plateau[i+2][n-1] === 'p' || plateau[i+2][n-1] === 't' || plateau[i+2][n-1] === 'f' || plateau[i+2][n-1] === 'r' || plateau[i+2][n-1] === 'd' || plateau[i+2][n-1] === 'c')
                }
                            
                if (i - 2 < 0 || n + 1 > 7) {
                    booleen2 = false
                } else {
                    booleen2 = (plateau[i-2][n+1] === 'p' || plateau[i-2][n+1] === 't' || plateau[i-2][n+1] === 'f' || plateau[i-2][n+1] === 'r' || plateau[i-2][n+1] === 'd' || plateau[i-2][n+1] === 'c')
                }

                if (i - 2 < 0 || n - 1 < 0) {
                    booleen3 = false
                } else {
                    booleen3 = (plateau[i-2][n-1] === 'p' || plateau[i-2][n-1] === 't' || plateau[i-2][n-1] === 'f' || plateau[i-2][n-1] === 'r' || plateau[i-2][n-1] === 'd' || plateau[i-2][n-1] === 'c')
                }
                
                if (i + 1 > 7 || n + 2 > 7) {
                    booleen4 = false
                } else {
                    booleen4 = (plateau[i+1][n+2] === 'p' || plateau[i+1][n+2] === 't' || plateau[i+1][n+2] === 'f' || plateau[i+1][n+2] === 'r' || plateau[i+1][n+2] === 'd' || plateau[i+1][n+2] === 'c')
                }
                
                if (i + 1 > 7 || n - 2 < 0) {
                    booleen5 = false
                } else {
                    booleen5 = (plateau[i+1][n-2] === 'p' || plateau[i+1][n-2] === 't' || plateau[i+1][n-2] === 'f' || plateau[i+1][n-2] === 'r' || plateau[i+1][n-2] === 'd' || plateau[i+1][n-2] === 'c')
                }
                
                if (i - 1 < 0 || n + 2 > 7) {
                    booleen6 = false
                } else {
                    booleen6 = (plateau[i-1][n+2] === 'p' || plateau[i-1][n+2] === 't' || plateau[i-1][n+2] === 'f' || plateau[i-1][n+2] === 'r' || plateau[i-1][n+2] === 'd' || plateau[i-1][n+2] === 'c') 
                }
                
                if (i - 1 < 0 || n - 2 < 0) {
                    booleen7 = false
                } else {
                    booleen7 = (plateau[i-1][n-2] === 'p' || plateau[i-1][n-2] === 't' || plateau[i-1][n-2] === 'f' || plateau[i-1][n-2] === 'r' || plateau[i-1][n-2] === 'd' || plateau[i-1][n-2] === 'c')
                }
                booleenend = booleen || booleen1 || booleen2 || booleen3 || booleen4 || booleen5 || booleen6 || booleen7 ? true : false
            } 
            if (booleenend === true) {
                        break;
                    }
            }
    }

    console.log(booleenend);
    document.querySelector('#echec #result').insertAdjacentHTML("beforebegin",`<div class="boolean text-center">Résultat du check : ${booleenend}</div>`)
    return (booleenend);
})

// switch du texte en anglais/français

let switchFrEng = document.getElementById('switchFrEng');

switchFrEng.addEventListener('click', function switchFrToEng() {
    let testblock = document.querySelectorAll('p, h2, h3, h4');
    console.log(testblock);

    for (let i = 0; i < testblock.length; i++) {
        testblock[i].classList.toggle('none');
    }
    
    if (switchFrEng.innerHTML === 'Switch to English') {
        switchFrEng.innerHTML = 'Changer en Français';
    } else if (switchFrEng.innerHTML === 'Changer en Français') {
        switchFrEng.innerHTML = 'Switch to English';
    }


})

let nineth = "Lancez le test pour savoir si un cavalier blanc (C) peut prendre une pièce noire."
    let nineth1 = "Run the test to see if a white knight (C) can take a black piece."


let twelfth = "Testez ici l'algorithme de rendue de monnaie."
    let twelfth1 = "Click here to test this algorythm."
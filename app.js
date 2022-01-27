
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
let first = "Qui suis-je?"
    let first1 = "Who am I?"
let second = "Je suis passionné par l'Astronomie, les Mathématiques, l'Informatique ainsi que par les Mangas. Lors de mon travail en espace vert, j'ai décidé de me lancer en tant que développeur web j'ai donc suivi la formation RAN PRO métier du numérique et aussi réalisé des petits projets de mon côté."
    let second1 = "I'm passionate by astronomy, Mathematics, computer, manga. When working in green space, i decided to start a new job as developer web si followed the RAN PRO digital and i also make some little project on my own"
let third = "Mes créations."
    let third1 = "My creations."
let fourth = "Avec 2 collègues nous avons fait le site d'un bar à chats sur Troyes lors de notre stage pour la formation RAN PRO métier du numérique, Troyespetitschats sur Wordpress."
    let fourth1 = "With 2 colleagues we make a cat bar site in Troyes on Wordpress during our 'stage' for the formation RAN PRO."
let fifth = "Pour m'entrainer après la formation, j'ai décidé de réaliser ce petit projet de design entre autre pour le côté responsive."
    let fifth1 = "For training during my formation, i decided to make a little design project responsive."
let sixth = "Projet en cours, pour m'entrainer mais cette fois on va toucher au javascript surtout et au design, le responsive viendra à la fin."
    let sixth1 = "Project in progress, training with javaScript and design. I'll make the responsive at the end."
let seventh = "Exercice d'algorithme."
    let seventh1 = "Algorythm exercice."
let eighth = "Pour cet algorithme, vous devez placer les différentes pièces noires ( p (pion), f (fou), d (dame), r (roi), t (tour), c (cavalier)) sur les cases présente de l'échiquier. Ensuite vous placerez le/les cavalier(s) blanc(s) (C (cavalier)). Vous verrez alors, si celui-ci est capable de capturer une pièce noire."
    let eighth1 = "For this algorythm, you have to place different black piece in the chess (p (pawn), f (bishop), d (queen), r (king), t (rook), c (knight)). When you're done, place a white knight (C (knight)). You'll see if the white knight is able to take a black piece."
let nineth = "Lancez le test pour savoir si un cavalier blanc (C) peut prendre une pièce noire."
    let nineth1 = "Run the test to see if a white knight (C) can take a black piece."
let tenth = "Exercice du rendue de monnaie."
    let tenth1 = "Exercice change."
let eleventh = "Ici, vous pouvez tester un algorithme que j'ai fait pendant la formation à la RAN PRO en tant qu'exercice. Attention, si vous lancez l'algorithme, ne changez pas d'onglet sous peine de faire échouer le test, merci."
    let eleventh1 = "Here, you can test an algorythm i make when i was in formation RAN PRO. WARNING, if you want to try it, don't change tab, the test will fails."
let twelfth = "Testez ici l'algorithme de rendue de monnaie."
    let twelfth1 = "Click here to test this algorythm."
function modifyText(id) {
    let switchText = document.getElementById(id)

    if (switchText.firstChild.nodeValue === first) {
        switchText.firstChild.nodeValue = first1
    } else if (switchText.firstChild.nodeValue === first1) {
        switchText.firstChild.nodeValue = first
    }

    if (switchText.firstChild.nodeValue === second) {
        switchText.firstChild.nodeValue = second1
    } else if (switchText.firstChild.nodeValue === second1) {
        switchText.firstChild.nodeValue = second
    }

    if (switchText.firstChild.nodeValue === third) {
        switchText.firstChild.nodeValue = third1
    } else if (switchText.firstChild.nodeValue === third1) {
        switchText.firstChild.nodeValue = third
    }

    if (switchText.firstChild.nodeValue === fourth) {
        switchText.firstChild.nodeValue = fourth1
    } else if (switchText.firstChild.nodeValue === fourth1) {
        switchText.firstChild.nodeValue = fourth
    }

    if (switchText.firstChild.nodeValue === fifth) {
        switchText.firstChild.nodeValue = fifth1
    } else if (switchText.firstChild.nodeValue === fifth1) {
        switchText.firstChild.nodeValue = fifth
    }

    if (switchText.firstChild.nodeValue === sixth) {
        switchText.firstChild.nodeValue = sixth1
    } else if (switchText.firstChild.nodeValue === sixth1) {
        switchText.firstChild.nodeValue = sixth
    }

    if (switchText.firstChild.nodeValue === seventh) {
        switchText.firstChild.nodeValue = seventh1
    } else if (switchText.firstChild.nodeValue === seventh1) {
        switchText.firstChild.nodeValue = seventh
    }

    if (switchText.firstChild.nodeValue === eighth) {
        switchText.firstChild.nodeValue = eighth1
    } else if (switchText.firstChild.nodeValue === eighth1) {
        switchText.firstChild.nodeValue = eighth
    }

    if (switchText.firstChild.nodeValue === nineth) {
        switchText.firstChild.nodeValue = nineth1
    } else if (switchText.firstChild.nodeValue === nineth1) {
        switchText.firstChild.nodeValue = nineth
    }

    if (switchText.firstChild.nodeValue === tenth) {
        switchText.firstChild.nodeValue = tenth1
    } else if (switchText.firstChild.nodeValue === tenth1) {
        switchText.firstChild.nodeValue = tenth
    }

    if (switchText.firstChild.nodeValue === eleventh) {
        switchText.firstChild.nodeValue = eleventh1
        console.log(eleventh1);
    } else if (switchText.firstChild.nodeValue === eleventh1) {
        switchText.firstChild.nodeValue = eleventh
        console.log(eleventh);
    }

    if (switchText.firstChild.nodeValue === twelfth) {
        switchText.firstChild.nodeValue = twelfth1
    } else if (switchText.firstChild.nodeValue === twelfth1) {
        switchText.firstChild.nodeValue = twelfth
    }
}

  

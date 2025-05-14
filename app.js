//Déroulement du quizz: 
//1: On affiche la question et les réponse
//2: L'utilisateur choisie une réponse (écrit la réponse A, B, C ou D)(une seule bonne réponse)
//3: On compare la réponse attendue a la réponse de l'utilisateur
//4: On affiche si c'est la bonne réponse ou non 
//5: On passe a la question suivante pour recommencer la même chose
//6: possibilité de rejouer


//Créer un tableau qui stock les questions et les réponses
let qst = [
    {
        question: "Quel est le panneau piste cyclable ?",
        a: "panneau A",
        b: "panneau B",
        c: "panneau C",
        d: "panneau D",
        r: "a"
    },

    {
        question: "Le panneau est une obligation de",
        a: "tourner à droite",
        b: "tourner à gauche",
        c: "faire demi-tour",
        d: "parking",
        r: "b"
    },

    {
        question: "Qui est prioritaire dans cette situation ?",
        a: "véhicule A",
        b: "véhicule B",
        c: "véhicule C",
        d: "aucun des trois",
        r: "b"
    },

    {
        question: "Sans présence de panneau de vitesse a combien êtes vous autorisé à rouler ?",
        a: "50 km/h",
        b: "60 km/h",
        c: "70 km/h",
        d: "80 km//h",
        r: "d"
    },

    {
        question: "Quel est le mot manquant sur le panneau ?",
        a: "Gendarmerie",
        b: "Garderie",
        c: "Prison",
        d: "Aire de jeu",
        r: "a"
    },
]


//role: afficher la question et la réponse
//paramètre: le tableau qst
//retourne: rien

let compteur=0

function quizz() {
    qst.forEach(question => {
        let reponse = prompt(`${question.question} : \n
            a: ${question.a} \n
            b: ${question.b} \n
            c: ${question.c} \n
            d: ${question.d}`)
            //si la réponse de l'utilisateur est égale à la reponse attendue alors il affiche bonne réponse
        if (reponse === question.r) {
            alert("Bonne réponse")
            compteur++
            //sinon, il affiche mauvaise réponse
        } else {
            alert(`Mauvaise réponse, la réponse est: ${question.r}`)
        }

    });
}
quizz()
alert(`ton score est de ${compteur} points`)


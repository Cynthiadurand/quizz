//Déroulement du quizz: 
//1: On affiche la question et les réponse
//2: L'utilisateur choisie une réponse (écrit la réponse A, B, C ou D)(une seule bonne réponse)
//3: On compare la réponse attendue a la réponse de l'utilisateur
//4: On affiche si c'est la bonne réponse ou non 
//5: On passe a la question suivante pour recommencer la même chose
//6: possibilité de rejouer


//Créer une boucle qui compare la réponse de l'utilisateur à la réponse attendue
//Créer une fonction afficher 
//Créer une fonction question suivante pour afficher la question suivante


//Créer un tableau qui stock les questions et les réponses

let qst = [
        {
            question: "Quel est le panneau piste cyclable ?",
            r: "a",
        },

        {
            question: "Le panneau est une obligation de tourner à gauche",
            r: "c",
        },

        {
            question: "Êtes vous prioritaire dans cette situation ?",
            r: "non",
        },

        {
            question: "Sans présence de panneau de vitesse a combien êtes vous autorisé à rouler ?",
            r: "80 km/h"
        },

        {
            question: "Quel est le mot manquant sur le panneau ?",
            r: "gendarmerie"
        },
    ]
    


//Créer une variable qui va stocker la réponse utilisateur via un prompt



//role: afficher la question et la réponse
//paramètre: le tableau qst
//retourne: rien



function quizz() {
    qst.forEach(question => {
        let reponse = prompt(question.question)
        if (reponse === question.r) {
            alert("Bonne réponse")
        } else {
            alert(`Mauvaise réponse, la réponse est: ${question.r}`)
        }

    });
}
quizz()


import React from "react";

function Card(){

    const url = 'https://www.blockchain.com/ticker#';

    // Créer une requête
    let requete = new XMLHttpRequest(); // Créer un objet
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200) {
                let reponse = requete.response; // Stockage de la réponse.
                let prixEnEuros = reponse.EUR.last;
                console.log(prixEnEuros);
            } else {
                alert ("Un problème est survenu: merci de revenir plus tard.");
            }
        }
    }

    return (
        <div>
            <h1>Card</h1>
        </div>
    )
}

export default Card;
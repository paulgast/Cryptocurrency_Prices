import React from "react";

export default function Card(){

    const url = 'https://www.blockchain.com/ticker#';

    // Créer une requête
    let requete = new XMLHttpRequest(); // Créer un objet
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    return (
        <div>
            <h1>Card</h1>
        </div>
    )
}

export default Card
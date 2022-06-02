let count = 3

function login(){
    let mdp = "zaire";
    let input = document.getElementById("input").value

    if (input != mdp && count > 0) {
        console.log("Erreur mdp user")
        count=count-1
        console.log(count)
        alert("Mauvais mot de passe - Tentative restante ="+ (count+1))
        return false;
    }

    if (input == mdp) {
        console.log("Accès user validé")
        alert("Welcome!")
        return true;
    }
    else{
        console.log("Demande d'assitance user détecté")
        alert("Accès verrouillé - Contactez un admin")
        return false;
    }
}


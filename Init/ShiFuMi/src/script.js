function runGame() {
    let pi="pierre"
    let f="feuille"
    let c="ciseaux"
    let myList = [pi,f,c]
    let user_nbr_round= prompt("\nEn combien de manches ?")
    let nbr_round=0
    let scorePL=0
    let scorecpu=0
    
    while (nbr_round < user_nbr_round){
        PL= prompt("\nPierre... Feuille... Ciseaux...")
        if (PL == pi || PL == f || PL == c){
            console.log("-----------------------------------")
            cpu= myList[Math.floor(Math.random()*myList.length)];
            nbr_round+=1
            console.log(cpu)
        }
            if (PL == cpu){
                alert("\nMatch nul ! Manche"+nbr_round+"sur"+ user_nbr_round)
            }
            else if (PL == pi && cpu == c){
                scorePL+=1
                alert("\nLe joueur gagne ! Manche"+nbr_round+"sur"+ user_nbr_round)
            }
            else if (PL == f && cpu == pi){
                scorePL+=1
                alert("\nLe joueur gagne ! Manche"+nbr_round+"sur"+ user_nbr_round)
            }
            else if (PL == c && cpu == f){
                scorePL+=1
                alert("\nLe joueur gagne ! Manche"+nbr_round+"sur"+ user_nbr_round)
            }
            else{
                scorecpu+=1
                alert("\nL'ordinateur gagne ! Manche"+nbr_round+"sur"+ user_nbr_round)
            }
    }    
    if (scorePL > scorecpu){
        alert("\nBravo tu as gagné la partie ! :)  Score = "+scorePL+" à "+scorecpu)
    }
    else if (scorecpu > scorePL){
        alert("\nPerdu le CPU gagne la partie ! :(  Score = "+scorecpu+" à "+scorePL)
    }
    else{
        alert("\nPartie fini sur une égalité   :/   Score = "+scorePL+" à "+scorecpu)
    }
}

runGame();


let board = document.querySelectorAll('canvas');
let rounds = 0;
let show_rounds = document.getElementById('rounds');
let show_winner = document.getElementById('winner');
let player = {"1" : 'X', "2" : 'O'};
let cases = [0, 0, 0, 0, 0, 0, 0, 0, 0];
 
// # check board
(function state(){

    for (let i = 0; i < board.length; i++){
        board[i].addEventListener('click', function(){
            if (rounds%2 == 0){
                if (player[1] == cases[i] || player[2] == cases[i]){
                    console.log('Case déjà jouée !');
                }
                else{
                    draw(board[i]);
                    cases[i] = 'X';
                    if (is_player_win() == player[1]){
                        show_winner.innerHTML = "Le joueur 1 gagne !"
                    }                   
                }
            }
            else{
                if (player[1] == cases[i] || player[2] == cases[i]){
                    console.log('Case déjà jouée !');
                }
                else{
                    draw(board[i]);
                    cases[i] = 'O';
                    if (is_player_win() == player[2]){
                        show_winner.innerHTML = "Le joueur 2 gagne !"
                    }
                }
            }
            console.log(cases)
            show_rounds.innerHTML = "Tour : "+rounds
        })
    }
})()

// # check if winner

function is_player_win(){


    if (cases[0] == player[1] && cases[1] == player[1] && cases[2] == player[1]){
        console.log("Le joueur 1 gagne !");
        return player[1]
    }
    else if (cases[0] == player[2] && cases[1] == player[2] && cases[2] == player[2]){
        console.log("Le joueur 2 gagne !")
        return player[2]
    }
    if (cases[3] == player[1] && cases[4] == player[1] && cases[5] == player[1]){
        console.log("Le joueur 1 gagne !")
        return player[1]
    }
    else if (cases[3] == player[2] && cases[4] == player[2] && cases[5] == player[2]){
        console.log("Le joueur 2 gagne !")
        return player[2]
    }
    if (cases[6] == player[1] && cases[7] == player[1] && cases[8] == player[1]){
        console.log("Le joueur 1 gagne !")
        return player[1]
    }
    else if (cases[6] == player[2] && cases[7] == player[2] && cases[8] == player[2]){
        console.log("Le joueur 2 gagne !")
        return player[2]
    }
    if (cases[0] == player[1] && cases[3] == player[1] && cases[6] == player[1]){
        console.log("Le joueur 1 gagne !")
        return player[1]
    }
    else if (cases[0] == player[2] && cases[3] == player[2] && cases[6] == player[2]){
        console.log("Le joueur 2 gagne !")
        return player[2]
    }
    if (cases[1] == player[1] && cases[4] == player[1] && cases[7] == player[1]){
        console.log("Le joueur 1 gagne !")
        return player[1]
    }
    else if (cases[1] == player[2] && cases[4] == player[2] && cases[7] == player[2]){
        console.log("Le joueur 2 gagne !")
        return player[2]
    }
    if (cases[2] == player[1] && cases[5] == player[1] && cases[8] == player[1]){
        console.log("Le joueur 1 gagne !")
        return player[1]
    }
    else if (cases[2] == player[2] && cases[5] == player[2] && cases[8] == player[2]){
        console.log("Le joueur 2 gagne !")
        return player[2]
    }
    if (cases[0] == player[1] && cases[4] == player[1] && cases[8] == player[1]){
        console.log("Le joueur 1 gagne !")
        return player[1]
    }
    else if (cases[0] == player[2] && cases[4] == player[2] && cases[8] == player[2]){
        console.log("Le joueur 2 gagne !")
        return player[2]
    }
    if (cases[2] == player[1] && cases[4] == player[1] && cases[6] == player[1]){
        console.log("Le joueur 1 gagne !")
        return player[1]
    }
    else if (cases[2] == player[2] && cases[4] == player[2] && cases[6] == player[2]){
        console.log("Le joueur 2 gagne !")
        return player[2]
    }
}

// # change mode
function change_mode(){
    let mode = document.getElementById('mode');
    
    if (mode.innerHTML == 'PvP'){
        mode.innerHTML = 'Player vs IA';
    }
    else{
        mode.innerHTML = 'PvP';
    }
}




// # method restart
function restart(){

    for (let i = 0; i < board.length; i++){
        if (board[i].getContext){
            var ctx = board[i].getContext('2d');
            ctx.clearRect(0,0,100,100);
            rounds = 0;
            cases = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            show_rounds.innerHTML = "Tour : " + rounds;
            show_winner.innerHTML = ""
        }
    }
}

// # method draw
function draw(c){

    if (rounds%2 == 0){
        if (c.getContext){
            var ctx = c.getContext('2d');
            ctx.beginPath();
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.moveTo(10,10);
            ctx.lineTo(90,90);
            ctx.moveTo(10,90);
            ctx.lineTo(90,10);
            ctx.stroke();
            rounds+=1;
            console.log("Tour : "+rounds);
        }
    }
    else{
        if (c.getContext){
        var ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle ='rgb(0, 0, 0)';
        ctx.arc(50,50,40,0,2 * Math.PI);
        ctx.stroke();
        rounds+=1;
        console.log("Tour : "+rounds)
        }
    }
}

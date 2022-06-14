let board = document.querySelectorAll('canvas');
let main_board = document.getElementById('board');
let rounds = 0;
let show_rounds = document.getElementById('rounds');
let show_winner = document.getElementById('winner');
let player = {"1" : 'X', "2" : 'O'};
let cases = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let win = false;
 
// # check board
(function state(){
    

    for (let i = 0; i < board.length; i++){
        board[i].addEventListener('click', function(){
            if (!win){
                if (rounds%2 == 0){
                    if (cases[i] != 0){
                        console.log('Case déjà jouée !');
                    }
                    else{
                        draw(board[i]);
                        cases[i] = 'X';
                        if (is_player_win() == player[1]){
                            show_winner.innerHTML = "Le joueur 1 gagne !"
                            win = true
                        }                   
                    }
                }
                else{
                    if (cases[i] != 0){
                        console.log('Case déjà jouée !');
                    }
                    else{
                        draw(board[i]);
                        cases[i] = 'O';
                        if (is_player_win() == player[2]){
                            show_winner.innerHTML = "Le joueur 2 gagne !"
                            win = true
                        }
                    }
                }
                console.log(cases)
                show_rounds.innerHTML = "Tour : "+rounds
            }
        })
    }
})()

// # check if winner

function is_player_win(){


    if (cases[0] == player[1] && cases[1] == player[1] && cases[2] == player[1]){
        console.log("Le joueur 1 gagne !");
        document.getElementById('case1').classList.add('winning-cases');
        document.getElementById('case2').classList.add('winning-cases');
        document.getElementById('case3').classList.add('winning-cases');
        return player[1]
    }
    else if (cases[0] == player[2] && cases[1] == player[2] && cases[2] == player[2]){
        console.log("Le joueur 2 gagne !")
        document.getElementById('case1').classList.add('winning-cases');
        document.getElementById('case2').classList.add('winning-cases');
        document.getElementById('case3').classList.add('winning-cases');
        return player[2]
    }
    if (cases[3] == player[1] && cases[4] == player[1] && cases[5] == player[1]){
        console.log("Le joueur 1 gagne !")
        document.getElementById('case4').classList.add('winning-cases');
        document.getElementById('case5').classList.add('winning-cases');
        document.getElementById('case6').classList.add('winning-cases');
        return player[1]
    }
    else if (cases[3] == player[2] && cases[4] == player[2] && cases[5] == player[2]){
        console.log("Le joueur 2 gagne !")
        document.getElementById('case4').classList.add('winning-cases');
        document.getElementById('case5').classList.add('winning-cases');
        document.getElementById('case6').classList.add('winning-cases');
        return player[2]
    }
    if (cases[6] == player[1] && cases[7] == player[1] && cases[8] == player[1]){
        console.log("Le joueur 1 gagne !")
        document.getElementById('case7').classList.add('winning-cases');
        document.getElementById('case8').classList.add('winning-cases');
        document.getElementById('case9').classList.add('winning-cases');
        return player[1]
    }
    else if (cases[6] == player[2] && cases[7] == player[2] && cases[8] == player[2]){
        console.log("Le joueur 2 gagne !")
        document.getElementById('case7').classList.add('winning-cases');
        document.getElementById('case8').classList.add('winning-cases');
        document.getElementById('case9').classList.add('winning-cases');
        return player[2]
    }
    if (cases[0] == player[1] && cases[3] == player[1] && cases[6] == player[1]){
        console.log("Le joueur 1 gagne !")
        document.getElementById('case1').classList.add('winning-cases');
        document.getElementById('case4').classList.add('winning-cases');
        document.getElementById('case7').classList.add('winning-cases');
        return player[1]
    }
    else if (cases[0] == player[2] && cases[3] == player[2] && cases[6] == player[2]){
        console.log("Le joueur 2 gagne !")
        document.getElementById('case1').classList.add('winning-cases');
        document.getElementById('case4').classList.add('winning-cases');
        document.getElementById('case7').classList.add('winning-cases');
        return player[2]
    }
    if (cases[1] == player[1] && cases[4] == player[1] && cases[7] == player[1]){
        console.log("Le joueur 1 gagne !")
        document.getElementById('case2').classList.add('winning-cases');
        document.getElementById('case5').classList.add('winning-cases');
        document.getElementById('case8').classList.add('winning-cases');
        return player[1]
    }
    else if (cases[1] == player[2] && cases[4] == player[2] && cases[7] == player[2]){
        console.log("Le joueur 2 gagne !")
        document.getElementById('case2').classList.add('winning-cases');
        document.getElementById('case5').classList.add('winning-cases');
        document.getElementById('case8').classList.add('winning-cases');
        return player[2]
    }
    if (cases[2] == player[1] && cases[5] == player[1] && cases[8] == player[1]){
        console.log("Le joueur 1 gagne !")
        document.getElementById('case3').classList.add('winning-cases');
        document.getElementById('case6').classList.add('winning-cases');
        document.getElementById('case9').classList.add('winning-cases');
        return player[1]
    }
    else if (cases[2] == player[2] && cases[5] == player[2] && cases[8] == player[2]){
        console.log("Le joueur 2 gagne !")
        document.getElementById('case3').classList.add('winning-cases');
        document.getElementById('case6').classList.add('winning-cases');
        document.getElementById('case9').classList.add('winning-cases');
        return player[2]
    }
    if (cases[0] == player[1] && cases[4] == player[1] && cases[8] == player[1]){
        console.log("Le joueur 1 gagne !")
        document.getElementById('case1').classList.add('winning-cases');
        document.getElementById('case5').classList.add('winning-cases');
        document.getElementById('case9').classList.add('winning-cases');
        return player[1]
    }
    else if (cases[0] == player[2] && cases[4] == player[2] && cases[8] == player[2]){
        console.log("Le joueur 2 gagne !")
        document.getElementById('case1').classList.add('winning-cases');
        document.getElementById('case5').classList.add('winning-cases');
        document.getElementById('case9').classList.add('winning-cases');
        return player[2]
    }
    if (cases[2] == player[1] && cases[4] == player[1] && cases[6] == player[1]){
        console.log("Le joueur 1 gagne !")
        document.getElementById('case3').classList.add('winning-cases');
        document.getElementById('case5').classList.add('winning-cases');
        document.getElementById('case7').classList.add('winning-cases');
        return player[1]
    }
    else if (cases[2] == player[2] && cases[4] == player[2] && cases[6] == player[2]){
        console.log("Le joueur 2 gagne !")
        document.getElementById('case3').classList.add('winning-cases');
        document.getElementById('case5').classList.add('winning-cases');
        document.getElementById('case7').classList.add('winning-cases');
        return player[2]
    }

    if (rounds >= 9){
        console.log("Match nul !")
        show_winner.innerHTML = "Match nul !"
    }
}

// # change mode
function change_mode(){
    let mode = document.getElementById('mode');
    
    if (mode.innerHTML == 'PvP'){
        mode.innerHTML = 'PvE';
        
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
            win = false
            cases = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            document.getElementById('case1').classList.remove('winning-cases');
            document.getElementById('case2').classList.remove('winning-cases');
            document.getElementById('case3').classList.remove('winning-cases');
            document.getElementById('case4').classList.remove('winning-cases');
            document.getElementById('case5').classList.remove('winning-cases');
            document.getElementById('case6').classList.remove('winning-cases');
            document.getElementById('case7').classList.remove('winning-cases');
            document.getElementById('case8').classList.remove('winning-cases');
            document.getElementById('case9').classList.remove('winning-cases');
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
            ctx.strokeStyle = 'rgb(0, 0, 255)';
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
        ctx.strokeStyle ='rgb(255, 0, 0)';
        ctx.arc(50,50,40,0,2 * Math.PI);
        ctx.stroke();
        rounds+=1;
        console.log("Tour : "+rounds)
        }
    }
}

 //Partie IA
 let p = 4;  //valeur donné a l'ordinateur dans le tableau de jeu
 let opponent = 1; //valeur donné au joueur dans le tableau de jeu
 let b = [];
 for (let i = 0; i<3;i++){
     for(let j = 0; j<3;j++){
         b[i][j] = cases[i*3+j]
     }
 }    
 
 //la fonction qui va vous donner le coup que va jouer l'ordinateur
 function findBestMove(){
     for (let i = 0; i<3;i++){
        for(let j = 0; j<3;j++){
            b[i][j] = cases[i*3+j]
        }
    }    
     bestVal = -1000;
     bestMove = -1;
     
     for(let i =0 ; i<3 ;i++)
     {
         for(let j =0 ; j<3;j++){
             if(b[i][j] === 0)
             {
                 b[i][j]=p;
                 moveVal = minmax(b,0,false)
                 b[i][j]=0
                 if(moveVal > bestVal)
                 {
                     bestMove = i*3+j
                     bestVal = moveVal
                 }
             }
         }
     }
     console.log(bestVal)
     return bestMove;
 }

function minmax(b,depth,isMax)
{
 //console.log('minmax',depth,isMax,b)

 score = evaluate(b);
 if(score === 10)
 {
     return score;
 }
 if(score === -10)
 {
     return score;
 }
 if(!b.flat().includes(0))
 {
    // console.log('eval 0')
     return 0;
 }
 
// console.log(isMax);
 if(isMax)
 {
     //console.log('ismax')
     best =-1000;
     for(let i=0;i<3;i++)
     {
         for(let j=0;j<3;j++)
         {
             if(b[i][j]===0){
                 b[i][j]=p;
                // console.log('ismax')
                 best = Math.max(best,minmax(b,depth +1 , !isMax));
                 //debugger;
                 b[i][j]=0;
             }
         }
     }
 }
 else
 {
      best =1000;
     for(let i=0;i<3;i++)
     {
         for(let j=0;j<3;j++)
         {
             if(b[i][j]===0){
                 b[i][j]=opponent;
                 //console.log(b,depth)
                //console.log('ismin')
                 //console.log(minmax(b,depth +1 , !isMax))
                 best = Math.min(best,minmax(b,depth +1 , !isMax));
                 //debugger;
                 b[i][j]=0;
             }
         }
     }
 }
 
 return best;

}

function evaluate(b)
{
 //console.log('ev',b)
 for(let row=0;row<3;row++)
 {
     if (b[row][0]===b[row][1] &&  b[row][1]===b[row][2]){
     if (b[row][0]===p){
        //console.log('fintrouvé',b);
             return +10;
         }
     else if (b[row][0]===opponent){
        //console.log('fintrouvé',b);
             return -10 }}
 }
 
 for(let col=0;col<3;col++)
 {
     if (b[0][col]===b[1][col] &&  b[1][col]===b[2][col]){
     if (b[0][col]===p){ 
            //console.log('fintrouvé',b);
             return +10
             }
     else if (b[0][col]===opponent) {
       // console.log('fintrouvé',b);
             return -10 ;}}
 }
 
   if (b[0][0]==b[1][1] && b[1][1]==b[2][2]){
       
     if (b[0][0]===p){
       // console.log('fintrouvé',b);
         return +10 ;}
     else if (b[0][0]===opponent){
       // console.log('fintrouvé',b);
         return -10 ;}}
 

 if (b[0][2]==b[1][1] && b[1][1]==b[2][0]){
 
     if (b[0][2]==p){ 
       // console.log('fintrouvé',b);
         return +10 }
     else if (b[0][2]==opponent){
       // console.log('fintrouvé',b);
         return -10 
     }}
 
 return 0  ;
}




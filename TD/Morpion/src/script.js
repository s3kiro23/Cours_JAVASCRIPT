let board = document.querySelectorAll('canvas');
let rounds = 0;
let show_rounds = document.getElementById('rounds');
let show_winner = document.getElementById('winner');
let player = {"1" : 'X', "2" : 'O'};
let shapes_cases = {};
 
// # check board
(function state(){

    for (let i = 0; i < board.length; i++){
        board[i].addEventListener('click', function(e){
            draw(board[i])
            show_rounds.innerHTML = "Tour : "+rounds
        })
    }
})()

// # check if winner

function is_player_win(){

if 

}

// # change mode
function change_mode(){
    let mode = document.getElementById('mode');

    mode.addEventListener('click', function(e){

        if (mode.innerHTML == 'PvP'){
            this.innerHTML = 'Player vs IA';
        }
        else{
            this.innerHTML = 'PvP';
        }
    })
}

// # method restart
function restart(){

    for (let i = 0; i < board.length; i++){
        if (board[i].getContext){
            var ctx = board[i].getContext('2d');
            ctx.clearRect(0,0,100,100);
            rounds = 0;
            show_rounds.innerHTML = "Tour : " + rounds;
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

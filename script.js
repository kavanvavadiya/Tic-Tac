console.log("welcome to my game")
let music = new Audio("Music/music.mp3")
let audioTurn = new Audio("Music/ding.mp3")
let gameover = new Audio("Music/win.mp3")
let isgameover = false;
let turn = "X";
let playerturn = document.querySelector('.playerturn')
let sign1 = document.querySelector('.sign1')
let sign2 = document.querySelector('.sign2')
let score1 = document.querySelector('.score1')
let score2 = document.querySelector('.score2')
let msg = document.querySelector(".msg")

// let player1 = prompt("Please enter your name", "Player 1");
// let player2 = prompt("Please enter your name", "Player 2");
let player1 = "Player 1";
let player2 = "Player 2";
// console.log(player1)
// console.log(player2)
document.querySelector('.player1').innerText = player1;
document.querySelector('.player2').innerText = player2;
sign1.innerText = "X";
sign2.innerText = "0";
score1.innerText = 0;
score2.innerText = 0;
console.log(playerturn.innerText)

// let round = document.getElementsByClassName('round');
let round = document.querySelector('.round');
console.log(round.innerText)
const changeTurn = ()=>{
    if(playerturn.innerText == 1){
        playerturn.innerText = 2;
    }
    else{
        playerturn.innerText = 1;
    }
    // playerturn.innerText = 1?2:1;
    console.log(playerturn.innerText)
    return turn === "X"?"0":"X"
}


const checkWin =()=>{
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if((boxtexts[e[0]].innerText ===  boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText ===  boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            let win = playerturn.innerText==="1"?player2:player1;
            if(win==player1){
                score1.innerText++;
            }
            if(win==player2){
                score2.innerText++;
            }
            document.querySelector('.info').innerText = "Player " + win  + " Win " ;
            isgameover = true;
            if(round.innerText == 5){
                // audioTurn.pause();
            
                if(score1.innerText > score2.innerText){
                    msg.innerText = player1  + " Won ";
                }
                else if(score1.innerText < score2.innerText){

                    msg.innerText = player2  + " Won ";
                }
                    
                    else{
                        msg.innerText = "Match Draw";
                        
                    }
                    round.innerText = "Over";   
                }
                else{

                    round.innerText++;
                }
                music.pause();
                gameover.play();
                // gameover.loop = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '156px';
            }

    });
}


// Game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    
        element.addEventListener('click',()=>{
            // console.log(isgameover)
            if(!isgameover){

                if(boxtext.innerText === ''){
                    music.play();
                    music.loop = true;
                    boxtext.innerText = turn;
                 turn = changeTurn();
                    audioTurn.play();
                    audioTurn.playbackRate = 5;

                    // audioTurn.played();
                    checkWin();
                    if(!isgameover)
                    document.getElementsByClassName("info")[0].innerText = "Turn for Player " + playerturn.innerText;
            }
            }
        })
});

// Add onclick lisitner to reset button
reset.addEventListener('click',()=>{
    msg.innerText = "";
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    turn = "X";
    playerturn.innerText = 1;
    sign1.innerText = "X";
    sign2.innerText = "0";
    score1.innerText = 0;
    score2.innerText = 0;
    round.innerText = 1;
    isgameover = false
            document.getElementsByClassName("info")[0].innerText = "Turn for Player " + playerturn.innerText;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
})
playagain.addEventListener('click',()=>{
    msg.innerText = "";
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    if(round.innerText%2==0){

        turn = "0";
        playerturn.innerText = 2;
    }
    else{
        turn = "X";
        playerturn.innerText = 1;
    }
    if(round.innerText=="Over"){
        score1.innerText = 0;
    score2.innerText = 0;
    round.innerText = 1;
    }
    isgameover = false
            document.getElementsByClassName("info")[0].innerText = "Turn for Player " + playerturn.innerText;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
})
name1.addEventListener('click',()=>{
    player1 = prompt("Please enter your name", player1);
    document.querySelector('.player1').innerText = player1;
// document.querySelector('.player2').innerText = player2;
// let player2 = prompt("Please enter your name", "Player 2");
   
})
name2.addEventListener('click',()=>{
    player2 = prompt("Please enter your name", player2);
    // document.querySelector('.player1').innerText = player1;
document.querySelector('.player2').innerText = player2;
// let player2 = prompt("Please enter your name", "Player 2");
   
})

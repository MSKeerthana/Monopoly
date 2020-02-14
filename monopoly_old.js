const board = [];
for(var i = 0; i<16;i++)
{
    board[i] = i*10;
}
const player1_button = document.getElementById("player-1");
const player2_button = document.getElementById("player-2");
console.log(player1_button);
console.log(player2_button);

player1_button.addEventListener('click',rolldice_1);
player2_button.addEventListener('click',rolldice_2);

var player1 = ["A",0,1000];
var player2 = ["B",0,1000];

function rolldice_1()
{
    let position = Math.floor(Math.random()*6)+1;
    console.log(position);
    changePosition1(player1[1],position);
}
function changePosition1(old,newPos)
{
    let updPos = old + newPos;
    player1[1] = updPos;
    console.log("Player1 - position", player1[1]);
    changeMoney1(player1[1]);
}
function changeMoney1(updPos)
{
    if(updPos<board.length)
    player1[2] = player1[2] - board[updPos];
    else
    {
    updPos %= 15;
    player1[2] = player1[2] - board[updPos];
    }
    console.log("Player1 - amount", player1[2]);
}
function rolldice_2()
{
    let position = Math.floor(Math.random()*6)+1;
    console.log(position);
    changePosition2(player2[1],position);
}
function changePosition2(old,newPos)
{
    let updPos = old + newPos;
    player2[1] = updPos;
    changeMoney1(player2[1]);
    console.log("Player2 - position", player2[1]);
}
function changeMoney2(updPos)
{
    if(updPos<board.length)
    player2[2] = player2[2] - board[updPos];
    else
    {
    updPos %= 15;
    player2[2] = player2[2] - board[updPos];
    }
    console.log("Player1 - amount", player1[2]);
}

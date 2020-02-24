var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');
var box6 = document.querySelector('#box6');
var box7 = document.querySelector('#box7');
var box8 = document.querySelector('#box8');
var box9 = document.querySelector('#box9');
var box10 = document.querySelector('#box10');
var box11 = document.querySelector('#box11');
var box12 = document.querySelector('#box12');
var box13 = document.querySelector('#box13');
var box14 = document.querySelector('#box14');
var box15 = document.querySelector('#box15');
var box16 = document.querySelector('#box16');

var imageArray = [box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16];
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
//player1_button.addEventListener('click',myFunction);
player2_button.addEventListener('click',rolldice_2);

var player1 = ["A",0,1000];
var player2 = ["B",0,1000];

function rolldice_1()
{
   let position = Math.floor(Math.random()*6)+1;
   console.log(position);
   changePosition1(player1[1],position);
}
var count = 0;
var c = 0;
function changePosition1(old,newPos)
{
   count++;
   if(count>1)
   {
       var elem=document.getElementById('img11');
       elem.remove();
   }
   let updPos = old + newPos;
   player1[1] = updPos;
   if(updPos>board.length)
   updPos %= 15;
   console.log("Player1 - position", player1[1]);
   let template = '<img src="assets/redcone.jfif" id="img11" alt="red" style="width: 36px;">';
   //document.querySelector('#img1').style.display = "";
   imageArray[updPos].innerHTML += template;
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
   console.log("Player1 - amount",player1[2]);
   document.getElementById('score1').innerHTML = player1[2];
}
function rolldice_2()
{
   let position = Math.floor(Math.random()*6)+1;
   console.log(position);
   changePosition2(player2[1],position);
}
function changePosition2(old,newPos)
{
   c++;
   if(c>1)
   {
       var elem=document.getElementById('img12');
       elem.remove();
   }
   let updPos = old + newPos;
   player2[1] = updPos;
   changeMoney1(player2[1]);
   console.log("Player2 - position", player2[1]);
   let template = '<img src="assets/yellowcone.jfif" id="img12" alt="red" style="width: 36px;">';
   //document.querySelector('#img1').style.display = "";
   imageArray[updPos].innerHTML += template;
}
function changeMoney2(updPos)
{
   if(updPos<board.length)
   player2[2] = player2[2] - board[updPos] + 10;
   else
   {
   updPos %= 15;
   player2[2] = player2[2] - board[updPos] + 10;
   }
   console.log("Player2 - amount", player2[2]);
   document.getElementById('score2').innerHTML = player2[2];
}

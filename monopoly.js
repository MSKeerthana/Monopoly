class player{
    constructor(name,position,money)
    {
        this.name = name;
        this.position = position;
        this.money = money;
    }
    rollDice(player_image)
    {
        let pos = Math.floor(Math.random()*6)+1;
        console.log(pos);
        this.updatePosition(pos);
    }
    updatePosition(pos)
    {
        this.position += pos;
        console.log(this.position);
        console.log("position",this.position);
        this.updateMoney();
    }
    updateMoney()
    {   
        if(this.position<board.length)
        this.money -= board[this.position];
        else
        {
            this.position %= 15;
            this.money -= board[this.position];
        }
        console.log("balance",this.money);
    }
}
const player1_button = document.getElementById("player-1");
const player2_button = document.getElementById("player-2");
console.log(player1_button);
console.log(player2_button);

var player1 = new player("A",0,1000);
var player2 = new player("B",0,1000);
var player_image_1 = "assets/yellowcone.jfif";
var player_image_2 = "assets/redcone.jfif";
player1_button.addEventListener('click',function()
{
    player1.rollDice(player_image_1)
},false);
player2_button.addEventListener('click',function()
{
    player2.rollDice(player_image_2)
},false);

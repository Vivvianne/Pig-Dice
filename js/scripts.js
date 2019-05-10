var roller1 = "";
var roller2 = "";

var throwdice = function(){
    return Math.floor(6* Math.random()) +1
}
function Roller(turn){
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.rollerName;
}
roller.prototype.roll1 = function(){
    if (this.roll ===1) {
        this.tempscore=0;
        alert("Very sorry" + this.rollerName + " ,you got a 1, your turn is over")
        }else {
            this.tempscore += this.roll;
    }
}

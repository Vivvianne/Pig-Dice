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
roller.prototype.hold = function(){
    this.totalscore += this.tempscore;
    this.tempscore =0; 
    alert(this.rollerName + " , your turn is over, let the other roller play.")
}
roller.prototype.newRound = function(){
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = "";
}

// User interface

$(document).ready(function(){
    $("button#Begin").click(function(event){
        roller1 = new Roller(true);
        roller2 = new Roller(false);
        $(".scores-container").show();
        $(".btn1-menu").hide();

        var roller1Name = $(".roller1Name").val();
        $("#roller1Name").text(roller1Name);

        var roller2Name = $(".roller2Name").val();
        $("#roller2Name").text(roller2Name);
    })
})
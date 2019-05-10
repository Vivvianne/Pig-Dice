// usiness logic

var roller1 = "";
var roller2 = "";

var throwdice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Roller(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.rollerName;
}

Roller.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry " + this.rollerName + ", you rolled a 1! Your turn is over!")

  } else {
    this.tempscore += this.roll;
  }
}

Roller.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.rollerName + ", your turn is over, pass the mouse!");
}

Roller.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert(this.rollerName + " You are the winner!");
  }
}

Roller.prototype.newRound = function() {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.rollerName = "";
}

// User Interface
$(document).ready(function() {

  $("button#begin").click(function(event) {
    roller1 = new Roller(true);
    roller2 = new Roller(false);
    $(".scores-container").show();
    $(".begin-menu").hide();

    var roller1Name = $(".roller1Name").val();
    $("#roller1Name").text(rollerr1Name);

    var roller2Name = $(".roller2Name").val();
    $("#roller2Name").text(roller2Name);

    roller1.rollerName = roller1Name;
    roller2.rollerName = roller2Name;

  });
  $("button#new-round").click(function(event) {
    $(".scores-container").hide();
    clearValues();
    roller1.newGame();
    roller2.newGame();
    $("#total-round1").empty();
    $("#score-total1").empty();
    $("#roll-die1").empty();
    $("#total-round2").empty();
    $("#score-total2").empty();
    $("#roll-die2").empty();

    $(".begin-menu").show();
  });

  $("button#roller1-roll").click(function(event) {
    roller1.roll = throwdice();
    $("#roll-die1").text(roller1.roll);
    roller1.rollone();
    $("#total-round1").text(roller1.tempscore);
  });

  $("button#roller2-roll").click(function(event) {
    roller2.roll = throwdice();
    $("#roll-die2").text(roller2.roll);
    roller2.rollone();
    $("#total-round2").text(roller2.tempscore);
  });

  $("button#roller1-hold").click(function(event) {
    roller1.hold();
    $("#score-total1").text(roller1.totalscore);
    $("#total-round1").empty();
    $("#roll-die1").empty();
    roller1.winnerCheck();
  });

  $("button#roller2-hold").click(function(event) {
    roller2.hold();
    $("#score-total2").text(roller2.totalscore);
    $("#score-total2").empty();
    $("#roll-die1").empty();
    roller2.winnerCheck();
  });

});
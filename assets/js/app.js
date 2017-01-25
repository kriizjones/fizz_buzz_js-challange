
var onReadyEvents = function(){
  var team1 = new team();
  var team2 = new team();


$('#click_me').click(function() {
  var input = parseInt(s("#fizzBuzzInput".val()));
  fizzbuzz = new fizzBuzzer();
  var output = fizzbuzz.fizzBuzzer(input);

$("#team1roll").click(function() {
  var rollresult1 = team1.roll();
  $("#team1result").html("Team 1" + rollresult1);
});

$("#team2roll").click(function() {
  var rollresult2 = team2.roll();
  $("#team2result").html("Team 2" + rollresult2);
});
});

};

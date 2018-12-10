$(document).ready(function() {

  $("#submit").click(function(event) {
    var questOne = $("input:radio[name=question1]:checked").val();
    var questTwo = $("input:radio[name=question2]:checked").val();
    var questThree = $("input:radio[name=question3]:checked").val();
    var questFour = $("input:radio[name=question4]:checked").val();
    var questFive = $("input:radio[name=question5]:checked").val();

    var yourScore = parseInt(questOne) + parseInt(questTwo) + parseInt(questThree) + parseInt(questFour) + parseInt(questFive);
    $("#yourScore").text("Your score is:" + yourScore + "%");

    $("#formOne").hide();
    $("#yourScore").show();
    event.preventDefault();
  });

});

$(document).ready(function(){

  $("form#form").submit(function(event){
    var qN1 = $("input:radio[name=question1]:checked").val();
    var qN2 = $("input:radio[name=question2]:checked").val();
    var qN3 = $("input:radio[name=question3]:checked").val();
    var qN4 = $("input:radio[name=question4]:checked").val();
    var qN5 = $("input:radio[name=question5]:checked").val();

    var yourScore = parseInt(qN1)+parseInt(qN2)+parseInt(qN3)+parseInt(qN4)+parseInt(qN5);
      $("#yourScore").text("Your score is:") + yourScore + "%");


  })
})

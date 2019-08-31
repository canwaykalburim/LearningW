if(jQuery){
  var checkAnswers = function() {
    var answerString = "";
    var answers = $(":checked");
    answers.each(function(i) {
      answerString = answerString + answers[i].value; 
    });
    $(":checked").each(function(i) {
      var answerString = answerString + answers[i].value;
    });
    checkIfCorrect(answerString);
  };

  var checkIfCorrect = function(theString) {
    if(parseInt(theString, 16) === 811124566973) {
      $("body").addClass("correct");
      $("h1").text("승리했습니다!");
      $("canvas").show();
    }
  };

  $("#question1").show();
};

if(jQuery){
  $("#question2").show();
};

if(jQuery){
  $("#question3").show();
};

if(jQuery){
  $("#question4").show();
};

if(jQuery){
  $("#question5").show();
};

if(jQuery){
  $("#question6").show();
};

if(jQuery){
  $("#question7").show();
};

if(jQuery){
  $("#question8").show();
};

if(jQuery){
  $("#question9").show();
};

if(jQuery){
  $("#question10").show();
};
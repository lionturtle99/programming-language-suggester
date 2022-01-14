let languages = {
  "Javascript": [1, 2, 3, 3],
  "Python": [2, 3, 3, 2],
  "C#": [1, 2, 2, 1]
}

function langCompat(user, lang) {
  let userScore = 0;

  for (let i = 0; i < user.length; i++) {
    if (user[i] === lang[i]) {
      userScore += 1;
    }
  }
  return userScore;
}

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    let userSign = $("#sign").val();
    let drink = parseInt($("input[name='drink']:checked").val());
    let food = parseInt($("input[name='food']:checked").val());
    let landscape = parseInt($("input[name='landscape']:checked").val());
    let software = parseInt($("input[name='software']:checked").val());
    let userChoices = [drink, food, landscape, software];

    let bestMatch = ["", 0];

    if (userSign === "" || userSign.length < 3) {
      $("#output").text("Please input a actual astrological sign");
      return;
    }
    
    for (let key in languages) {
      let tempMatch = langCompat(userChoices, languages[key]);
      
      if (tempMatch > bestMatch[1]) {
        bestMatch = [key, tempMatch];
      }
    }

    $("#output").text("You most match with " + bestMatch[0] + " with a score of " + bestMatch[1] + " !!");
    $(".language").show();
  });
});
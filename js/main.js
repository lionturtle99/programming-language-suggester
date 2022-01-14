let languages = {
  "Javascript": [1, 2, 3, 3],
  "Python": [2, 3, 3, 2],
  "C#": [1, 2, 2, 1]
}

function langComp(user, lang) {
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
    const userSign = $("#sign").val();
    const drink = parseInt($("input[name='drink']:checked").val());
    const food = parseInt($("input[name='food']:checked").val());
    const landscape = parseInt($("input[name='landscape']:checked").val());
    const software = parseInt($("input[name='software']:checked").val());
    console.log(userSign, drink, food, landscape, software)
    
    let userChoices = [drink, food, landscape, software];
    let bestMatch = ["", 0];

    if (userSign === "" || userSign.length < 3) {
      $("#output").text("Please input a real astrological sign");
      return;
    }
    
    for (let key in languages) {
      let tempMatch = langComp(userChoices, languages[key]);
      
      if (tempMatch > bestMatch[1]) {
        bestMatch = [key, tempMatch];
      }
    }

    $("#ouput").text("You most match with " + bestMatch + " !!!");
    $(".language").show();
  });
});
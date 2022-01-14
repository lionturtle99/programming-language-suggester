$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    const sign = $("#sign").val();
    const drink = parseInt($("input[name='drink']:checked").val());
    const food = parseInt($("input[name='food']:checked").val());
    const landscape = parseInt($("input[name='landscape']:checked").val());
    const software = parseInt($("input[name='software']:checked").val());
    console.log(sign, drink, food, landscape, software);
  });
});
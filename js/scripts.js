$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const streetlInput= $("input#animal").val();
    const cityInput = $("input#city").val();
    const stateInput = $("input#state").val();
    // const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".street").text(streetlInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    // $(".noun").text(nounInput);

    $("#story").show();
    // $("#.card").toggle();

    event.preventDefault();
  });
});
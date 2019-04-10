
//Variables

// Holds the number  for 
var totalScore = [];
var scoreCounter = '';
var userCounter = 0;
var pcNumber = "";
var wins = 0;
var losses = 0;



//PC generates a random number between 19-120
$(function () {

    // random number ()
    var pcNumber = Math.floor((Math.random() * 121) + 19);
    $("#pcGuess").html(pcNumber);


    // // random values between (1-12) are assigned to each button 
    // var ruby = Math.floor((Math.random() * 13) + 1);
    // var emerald = Math.floor((Math.random() * 13) + 1);
    // var sapphire = Math.floor((Math.random() * 13) + 1);
    // var canary = Math.floor((Math.random() * 13) + 1);


    // console.log(ruby)
    // console.log(emerald)
    // console.log(sapphire)
    // console.log(canary)
    // for (var i = 0; i < userOptions.length; i++) {

    // // random values between (1-12) are assigned to each button 




    //user will click over the buttons and they will be added in the userGuess field

    $(".crystalimg").on('click', function () {
        var gemValue = Math.floor((Math.random() * 13) + 1);
        var scoreCounter = ($(this).attr(gemValue));

        $("#userGuess").html(scoreCounter);

        console.log(scoreCounter)


        //if the user matches the PC generated number it will add a win & reset values for PC and gems
        // if the user goes above the the PC generated number it will add a lose & reset values for PC and gems


        if (userCounter === targetNumber) {
            alert("You win!");
            wins++;
            var pcNumber = Math.floor((Math.random() * 121) + 19);
            $("#pcGuess").html(pcNumber);

        }

        else if (userCounter >= targetNumber) {
            alert("You lose!!");
            losses++;
            var pcNumber = Math.floor((Math.random() * 121) + 19);
            $("#pcGuess").html(pcNumber);
        }



    })


});

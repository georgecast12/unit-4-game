
//Variables

// Holds the number  for 
var userCounter = 0;
var wins = 0;
var losses = 0;



//PC generates a random number between 19-120
$(function () {

    // random number ()
    var pcNumber = Math.floor((Math.random() * 120) + 19);
    $("#pcGuess").html(pcNumber);


    // random values between (1-12) are assigned to each button 
    var ruby = Math.floor((Math.random() * 13) + 1);
    var emerald = Math.floor((Math.random() * 13) + 1);
    var sapphire = Math.floor((Math.random() * 13) + 1);
    var canary = Math.floor((Math.random() * 13) + 1);


    console.log(ruby)
    console.log(emerald)
    console.log(sapphire)
    console.log(canary)

    // //user will click over the buttons and they will be added in the userGuess field

    $("#r").on('click', function () {
        userCounter = userCounter + ruby;

        $("#userGuess").html(userCounter);

        if (userCounter === pcNumber) {
            wins++;
            $("#w").html("Wins: " + wins);
            location.reload(pcNumber);

            console.log(userCounter)
            console.log(wins)

        }

        else if (userCounter >= pcNumber) {
            losses++;
            $("#l").html("losses: " + losses);
            location.reload(pcNumber);

        }
    })

    $("#e").on('click', function () {
        userCounter = userCounter + emerald;

        $("#userGuess").html(userCounter);

        if (userCounter === pcNumber) {
            wins++;
            $("#w").html("Wins: " + wins);
            location.reload(pcNumber);

            console.log(userCounter)
            console.log(wins)

        }

        else if (userCounter >= pcNumber) {
            losses++;
            $("#l").html("losses: " + losses);
            location.reload(pcNumber);
        }

    })
    $("#s").on('click', function () {
        userCounter = userCounter + sapphire;

        $("#userGuess").html(userCounter);

        if (userCounter === pcNumber) {
            wins++;
            $("#w").html("Wins: " + wins);
            location.reload(pcNumber);

            console.log(userCounter)
            console.log(wins)

        }

        else if (userCounter >= pcNumber) {
            losses++;
            $("#l").html("losses: " + losses);
            location.reload(pcNumber);
        }
    })
    $("#c").on('click', function () {
        userCounter = userCounter + canary;

        $("#userGuess").html(userCounter);

        if (userCounter === pcNumber) {
            wins++;
            $("#w").html("Wins: " + wins);
            location.reload(pcNumber);

            console.log(userCounter)
            console.log(wins)

        }

        else if (userCounter >= pcNumber) {
            losses++;
            $("#l").html("losses: " + losses);
            location.reload(pcNumber);
        }
    })

})
//if the user matches the PC generated number it will add a win & reset values for PC and gems
// if the user goes above the the PC generated number it will add a lose & reset values for PC and gems









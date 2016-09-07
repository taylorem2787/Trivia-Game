// You'll create a trivia game that shows only one question 
//until the player answers it or their time runs out.

// If the player selects the correct answer, 
//show a screen congratulating them for choosing the right option. 
//After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, 
//tell the player that time's up and display the correct answer. 
//Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, 
//tell the player they selected the wrong option and then display the correct answer. 
//Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, 
//incorrect answers, and an option to restart the game (without reloading the page).

//USER PRESSES BUTTON START TO BEGIN GAME
//1ST ROUND - QUESTION APPEARS ON SCREEN W/ MULTIPLE CHOICE OPTIONS 
//TIMER COUNTS DOWN - 20 SECONDS
//USER DOES ONE OF 3 THINGS:
//	1.USER ANSWERS CORRECT 
//	2.USER ANSWERS QUESTIONS WRONG 
//	3.TIME IS UP
//ALERTS:
//	1. WHEN USER ANSWERS CORRECTLY
//	2. WHEN USER ANSWERS WRONG
//	3. WHEN TIME IS UP
//SCOREBOARD IS UPDATED:
//	1. WINS
//	2. LOSSES
//2ND ROUND BEGINS NEXT QUESTION APPEARS WITH MULTIPLE CHOICE OPTIONS - SAME PROCESS RUNS THROUGH
//LAST QUESTION
//MOVES ONTO NEXT QUESTION AND PROCESS BEGINS AGAINS UNTIL LAST QUESTION
//LOOPS THROUGH THIS UNTIL LAST QUESTION RUN THROUGH
//DETERMINES PLAYER'S FINAL SCORE
//RESTART/RESET GAME

//GLOBAL VARIABLES
//========================================================================
// var questions = "";
// var multipleChoice = [];
// var rounds = 
// var counter = 1000 * 20;
// var timer = 0
$(document).ready(function(){
  


var slideshowIntervalId = 0;
var displayEachQuestion = 0;

var gameHolder = {
     count: 0,
     wins: 0,
     losses: 0,
     round: 1, 
     corectAnswer: [],
     //gameOver = false;
     //nextRound = false;

    questions: {
 
        "slideOne": {
            "question": "question1",
            "options":    
                [
                    { 
                    "optionOne": "option1"
                },
                    {
                    "optionTwo": "option2"
                },
                   { 
                    "optionThree": "option3"
                },
                    {
                    "optionFour": "option4"
                }
                ]
        }, 

        "slideTwo": {
            "question": "question2",
            "options":    
                [
                    { 
                    "optionOne": "option1"
                },
                    {
                    "optionTwo": "option2"
                },
                   { 
                    "optionThree": "option3"
                },
                    {
                    "optionFour": "option4"
                }
                ]
        }, 

        "slideThree": {
            "question": "question3",
            "options":    
                [
                    { 
                    "optionOne": "option1"
                },
                    {
                    "optionTwo": "option2"
                },
                   { 
                    "optionThree": "option3"
                },
                    {
                    "optionFour": "option4"
                }
                ]
        },   

        "slideFour": {    
            "question": "question4",
            "options":    
                [
                    { 
                    "optionOne": "option1"
                },
                    {
                    "optionTwo": "option2"
                },
                   { 
                    "optionThree": "option3"
                },
                    {
                    "optionFour": "option4"
                }
                ]
        }
    }
}
  

window.onload = function(){
    $('#lap').on('click', stopwatch.recordLap);
    $('#stop').on('click', stopwatch.stop);
    $('#reset').on('click', stopwatch.reset);
    $('#start').on('click', stopwatch.start);
};


var stopwatch = {
    time:0,
    lap:1,
    reset: function(){
        stopwatch.time = 0;
        stopwatch.lap = 1;
        $('#display').html('00:00');
        $('#laps').html('');
    },
    start: function(){
        counter = setInterval(stopwatch.count, 1000);
    },
    stop: function(){
        clearInterval(counter);
    },
    recordLap: function(){
        //if you use "this" here, it will point to the lap button, not this object.
        var converted = stopwatch.timeConverter(stopwatch.time);
        $('#laps').append('<p>Lap ' + stopwatch.lap + ' : ' + converted + '</p>');
        stopwatch.lap++;
    },
    count: function(){
        stopwatch.time++;
        var converted = stopwatch.timeConverter(stopwatch.time);
        $('#display').html(converted);
    },
    timeConverter: function(t){
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
};



    //Use jQuery to run "startSlideshow" when you click the "start" button
        // $("#start").on("click", startSlideshow);
        $("#start").on("click", displayQuestion);

    //Use jQuery to run "stopSlideshow" when you click the "stop" button
        $("#stop").on("click", stopSlideshow);


    function displayQuestion (){
        var keys = Object.keys(gameHolder.questions);
            $('.question').html(gameHolder.questions[keys[gameHolder.count]].question);
            $('.optionOne').html(gameHolder.questions[keys[gameHolder.count]].options[0].optionOne);
            $('.optionTwo').html(gameHolder.questions[keys[gameHolder.count]].options[1].optionTwo);
            $('.optionThree').html(gameHolder.questions[keys[gameHolder.count]].options[2].optionThree);
            $('.optionFour').html(gameHolder.questions[keys[gameHolder.count]].options[3].optionFour);


                // if (user == gameholder.questions.question.options.answers){
                //     gameholder.wins++;
                // }

                // else (user == options);
                // gameHolder.losses++ 

            //console.log("displayQuestion");
           console.log("running displayQuestion");
    }

    

    // $(".options").on("click", function(){
    //     gameHolder.losses++;
    //     //gameHolder.corectAnswer === gameHolder.wins;
    //     $(".lossCounter").html("Losses: " +gameHolder.losses);
    //     gameHolder.round++;
    //     $(".roundCounter").html("Round: " +gameHolder.round);

    //     gameHolder.nextRound == true;
    // });

    // $(".a1").on("click", function(){
    //     gameHolder.corectAnswer === gameHolder.wins;
    //     gameHolder.wins++;
    //     $(".winCounter").html("Wins: " +gameHolder.wins);
    //     gameHolder.round++;
    //     $(".roundCounter").html("Round: " +gameHolder.round);
    //     alert('right!');
    //     gameHolder.nextRound == true;
    //  });

    function nextQuestion(){   //increment the count by 1
        gameHolder.questions.count++;
        console.log("count: " + gameHolder.count);
        //if the count is the same as the length of the image array, reset the count to 0
            if (gameHolder.questions.count === gameHolder.questions.length) {
            gameHolder.questions.count = 0;

            console.log("running displayQuestion");
    }



        displayQuestion();     //show "image-holder" div
}


    function startSlideshow (){     //use a setInterval to run nextImage
        console.log("start slideshow");
        slideshowIntervalId = setInterval(nextImage, 1000 * 5);
}

function stopSlideshow () {     //put your clearInterval here:
    clearInterval(slideshowIntervalId);


   console.log("running displayQuestion");
}

}) //end of document.ready






//FUNCTIONS
//========================================================================


//MAIN PROCESS
//========================================================================
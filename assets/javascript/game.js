//USER PRESSES BUTTON START TO BEGIN GAME
//1ST ROUND - QUESTION APPEARS ON SCREEN W/ MULTIPLE CHOICE OPTIONS 
//timeLeft COUNTS DOWN - 20 SECONDS
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

//VARIABLES
//========================================================================
$(document).ready(function(){

    var questions = [{
                    question: "\"Why so serious?\"",
                    choices: ["Suicide Squad", "Batman Begins", "The Dark Knight"],
                    answer: 2
                    },{
                    question: "\"Could you describe the ruckus, Sir?\"",
                    choices: ["The Breakfast Club", "16 Candles", "Scary Movie"],
                    answer: 1
                    },{
                    question: "\"You talkin\' to me?\"",
                    choices: ["Taxi Driver", "Scarface", "The Godfather"],
                    answer: 1
                    },{
                    question: "\"I keep getting older...they stay the same age\"",
                    choices: ["Empire Records", "Dazed and Confused", "How High"],
                    answer: 2
                    },{
                    question: "\“I’m having an old friend for dinner\”",
                    choices: ["Psycho", "Hannibal", "Silence of The Lambs"],
                    answer: 1
                    },{
                    question: "\"I will look for you, I will find you, and I will kill you.\"",
                    choices: ["Taken", "Terminator 2", "Terminator"],
                    answer: 1
                    },{
                    question: "\"Ma!!! The meatloaf!!!\"",
                    choices: ["Wedding Crashers", "The Wedding Singer", "Old Scool"],
                    answer: 1
                    }];


    $('#testDiv').hide();
    $('img#bm').hide();   

    var counter = 0;
    var round = 0;
    var correct = 0;
    var wrong = 0;
    var correctArray = [];
    var wrongArray = [];

    function displayQuestion(index){
        var currentQ = $('<div id="questionDiv">');
        var currentP = $('<p>');
        currentP.append(questions[index].question);
        currentQ.append(currentP);
        return currentQ;
    };

    function displayFirst(index){
        var newDiv = $('<div id=answer1>');
        var answer1 = $('<p>');
        answer1.text(questions[index].choices[0]);
        newDiv.append(answer1)
        return newDiv;
    };

    function displaySecond(index){
        var newDiv = $('<div id=answer2>');
        var answer2 = $('<p>');
        answer2.text(questions[index].choices[1]);
        newDiv.append(answer2);
        return newDiv;
    };

        function displayThird(index){
        var newDiv = $('<div id=answer3>');
        var answer3 = $('<p>');
        answer3.text(questions[index].choices[2]);
        newDiv.append(answer3);
        return newDiv;
    };

    function nextQuestion(){

        if (counter < questions.length){
            //$(".char").remove();
            $('#questionDiv').remove();
            $('#answer1').remove();
            $('#answer2').remove();
            $('#answer3').remove();


            var next = displayQuestion(counter);
            $('#questionDisplay').append(next);

            var firstQ = displayFirst(counter);
            $('#firstQ').append(firstQ);

            var secondQ = displaySecond(counter);
            $('#secondQ').append(secondQ);

            var thirdQ = displayThird(counter);
            $('#thirdQ').append(thirdQ);
            } else {
            $('#testDiv').hide();
            $('#start').hide();
            $('#finalAnswer').text("You got " + correctArray.length + " correct");
            $('img#bm').show();
        }
    };

    function choice(){
       var answer = document.getElementsByName('q');
        for(i = 0; i < answer.length; i++){
          if (answer[i].checked){
            if (answer[i].value == questions[counter].answer.length){
                correct++;
                correctArray.push(questions[counter].answer);
                $(".winCounter").html("correct: " + correct);
                round++;
                $(".roundCounter").html("Round: " + round);
                break;
                } //2nd if
            

             else if (answer[i].value !== questions[counter].answer){
                wrong++;
                $(".lossCounter").html("Wrong: " + wrong);
                wrongArray.push(questions[counter].answer);
                round++;
                $(".roundCounter").html("Round: " + round);
                break;
                }
            } 
        }   
    }; //CHOICE

    $('#start').on('click', function(){
        $('#testDiv').show();
        $('#start').hide();
        nextQuestion();
    });

    $('#next').on('click', function(){
        choice();
        counter++;
        nextQuestion();
    });
//STOP WATCH
    var stopwatch = {
          number: 15,
          run: function() {
            count = setInterval(stopwatch.decrement, 1000);
          },
          decrement: function(){
            stopwatch.number--;
            $('#show-number').html('<h2>' + stopwatch.number + '<h2>');
                if (stopwatch.number === 0){
                    choice();
                    counter++;
                    nextQuestion();
                    stopwatch.clear();
                    stopwatch.resetCounter();
                    stopwatch.run();
                }   
          },
        resetCounter: function(){
                stopwatch.number = 16;
          },
        clear: function(){
                clearInterval(count);
          }
    };

    $('#start').on('click', function(){
        $('#testDiv').show();
        $('#start').hide();
        nextQuestion();
        stopwatch.run();
    });

    $('#next').on('click', function(){
        choice();
        counter++;
        nextQuestion();
        stopwatch.clear();
        stopwatch.resetCounter();
        stopwatch.run();
    }); //STOPWATCH END
})


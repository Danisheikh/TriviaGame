$('#Start').on('click', function () {
    game.start();

})

$(document).on('click','#end',function(){
    game.done();
})

var questions = [{
    question: "What was the first full length CGI movie?",
    answers: ["A bug's life", "MOnster Inc", "Toy story", "The Lion king"],
    correctAnswer: "Toy Story"
}, {
    question: "which one is not the name of one of the spice girls?",
    answers: ["Sprty spice", "Fred Spice", "Scary spice", "Posh spice"],
    correctAnswer: "Fred Spice"
}, {
    question: 'Which group released song,"Smellm like team Sp?" ',
    answers: ["Nirvana", "Backdtreet Boys", "The offsprings", "No Doubt"],
    correctAnswer: "Nirvana"
}, {
    question: "Which NBA team won the most titles in the 90's?",
    answers: ["Newyork knocks", "Portland Trsilblazers", "los Angeles", "Chicago Bulls"],
    correctAnswer: "Chicago Bulls"
}, {
    question: 'Which popular Disney movie feature the song, "Circle of Life"?',
    answers: ["Alladin", "Hercules", "Mulan", "The loin King"],
    correctAnswer: "The Loin King"
}, {
    question: "Finish this line from the Prince of Bel-Air theme",
    answers: ["Dice", "Mirror", "Fresh", "Cab"],
    correctAnswer: "Fresh"
}, {
    question: "What was the Doug's best friend's name?",
    answers: ["Skeeter", "Mark", "Zach", "Cody"],
    correctAnswer: "Skeeter"
}, {
    question: "What was the name of the principal at Bayside High in School?",
    answers: ["Mr.Zhcu", "Mr.Diggers", "Mr.Belding", "Mr.Page"],
    correctAnswer: "Mr.Blending"

}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {

        timer = setInterval(game.countdown, 1000);
        $('#subWrapper').prepend('<h2>Time remaining: <span id="counter">120</span> seconds</h2>');
        $("#Start").remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subWrapper').append('<h2>' + questions[i].question + '</h2');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subWrapper").append("<input type='radio' name = 'question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }

        }

        $("#subWrapper").append('<br><button id="end">Done</button>')
    },

    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;

            }
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;

            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;

            }
        });

        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;

            }
        });

        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;

            }
        });

        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;

            }
        });

        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;

            }
        });

        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;

            }
        });

        this.result();

    },

    result: function () {
        clearInterval(timer);
        $('#subWrapper h2').remove();

        $('#subWrapper').html("<h2>All Done!</h2>");
        $('#subWrapper').append("<h3>Correct Answers:" + this.correct + "</h3>");
        $('#subWrapper').append("<h3>Incorrect Answers:" + this.incorrect + "</h3>");
        $('#subWrapper').append("<h3>Unanswered:" + (questions.length-(this.incorrect + this.correct)) + "</h3>");
    }
}
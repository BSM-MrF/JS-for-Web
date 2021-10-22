/* Generate the quiz - passing in paramerters to identify
    the different HTML areas/elements to use
*/
function generateQuiz(questions, quizBox, resultsBox, checkButton){

    function showQuestions(questions, quizBox){
        //Your code here!
        //We need to store the questions and answers. This will be done using arrays.
        //The content/html will be added to each array and then this will be joined to display on the page

        var questionOutput = [];
        var answers = [];

        //Loop through each question
        for (var i = 0; i < questions.length; i++){
            //reset the answer list
            answers = [];

            //Inner loop - for each possible answer...
            for (answer in questions[i].answers){
                // add a radio button
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i +'" value="'+answer+'">'
                    + answer + ': '
                    + questions[i].answers[answer]
                    + '</label>'
                );
            }

            //Add the question and the answers to the output queue (list)
            questionOutput.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        //Join the output list into a single HTML string to output on the screen
        quizBox.innerHTML = questionOutput.join('');
    }

    function showResults(questions, quizBox, resultsBox){
        //Your code here!
    }

    //Display the questions
    showQuestions(questions, quizBox);

    //Btn click - show results when button clicked
    checkButton.onclick = function(){
        showResults(questions, quizBox, resultsBox);
    }
}


//Create questions as 'objects' in an array
var myQuestions = [
    {
        question: "What is RAM short for?",
        answers: {
            a: "Random Access Memory",
            b: "Radio Allows Music",
            c: "Random Android Memories"
        },
        correctAnswer: "a"
    },
    {
        question: "Complete the phase: Central Processing...?",
        answers: {
            a: "User",
            b: "Utility",
            c: "Unit"
        },
        correctAnswer: "c"
    }
];

var quizBox = document.getElementById('quiz');
var resultsBox = document.getElementById('results');
var checkButton = document.getElementById('submit');

generateQuiz(myQuestions, quizBox, resultsBox, checkButton);
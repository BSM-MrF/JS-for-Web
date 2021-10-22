/* Generate the quiz - passing in paramerters to identify
    the different HTML areas/elements to use
*/
function generateQuiz(questions, quizBox, resultsBox, checkButton){

    function showQuestions(questions, quizContainer){
        //Your code here!
    }

    function showResults(questions, quizContainer, resultsBox){
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

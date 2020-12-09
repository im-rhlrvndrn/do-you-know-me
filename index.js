const readlineSync = require("readline-sync");

var userName;
var highscore = 3;
var score = 0;

const questions = [{
    question:"How old am I? ",
    answer: '21',
},{
    question:"Where do I live? ",
    answer: "mumbai",
},{
    question:"What is my favorite color? ",
    answer: "blue",
},{
    question:"Who is my favorite Indian actor (male)",
    answer: "hrithik roshan",
},]

userName = readlineSync.question("What is your name ? ");console.log("Welcome ", userName);

const askQuestion = (question, answer) => {
    const userInput = readlineSync.question(question);

        if(userInput.toLowerCase() == answer.toLowerCase()){
            console.log('You\'re correct!!\n\n');
            score += 1;
        }else{
            console.log('You\'re wrong!!\n\n');
        }		
}

for(var i=0; i < questions.length; i++){
	askQuestion(questions[i].question, questions[i].answer);
}

console.log("You're final score is: ", score);
if(highscore < score){
	console.log('You just made a new highscore!!!!');
}

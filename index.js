console.log("****----Welcome to CrazyAstronomyQuizzing----****\n")
console.log("Instructions : \n-----------------------");
console.log("There will be total 5 questions with 4 options to each question and each question will have a single correct answer. Type any one of 1, 2, 3 or 4 to give your answer. Best of Luck !!")
console.log("----------------------- \n");
const questions = [
  {
    question_statement : "The existence of black hole was predicted by which eminent scientist’s ‘Theory of General Relativity’ ?",
    options : ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
    answer : "2"
  },
  {
    question_statement : "How much of the galaxy can you see in a night sky ?",
    options : ["1 %", "5 %", "10 %", "0.000003 %"],
    answer : "4"
  },
  {
    question_statement : "What type of galaxy is our Milky Way ?",
    options : ["Spiral", "Elliptical", "Irregular", "Ring"],
    answer : "1"
  },
  {
    question_statement : "Who first proposed that the galaxy was expanding ?",
    options : ["Albet Einstein", "Stephen Hawking", "Edwin Hubble", "Johannes Kepler"],
    answer : "3"
  },
  {
    question_statement : "Neil Armstrong became the first person to step foot on the Moon in 1969 followed by Buzz Aldrin, but what was the name of their third crewmate who remained in the Apollo 11 command module ?",
    options : ["James Lovell Jr.", "Michael Collins", "William Anders", "Fred Haise Jr."],
    answer : "2"
  },
];

const readLineSync = require('readline-sync');
// const name = readLineSync.question("What is your name ? \n");
// console.log(`Hello ${name}`);

let total_correct_answer = 0;
for(i=0; i<=4; i++){
    let q = `Q${i+1}. ${questions[i].question_statement}\n`;
    for(j = 0; j<=3; j++){
        q+=`\t${j+1}. ${questions[i].options[j]}\n`;
    }
    q+= `\nEnter your answer : `;
    const user_answer = readLineSync.question(q);
    console.log(`Your answer : ${user_answer}\nCorrect answer : ${questions[i].answer}`)
    if(user_answer === questions[i].answer){
        console.log("Your answer is correct !!\n")
        total_correct_answer++;
    }
    else{
        console.log("Your answer is incorrect.\n")
    }
}

console.log(`\nYour total score : ${total_correct_answer}\n`);
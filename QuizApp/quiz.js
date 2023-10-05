//next button
var nextButton = document.getElementById('next');  
//submitButton
var submitButton = document.createElement('button');
submitButton.classList.add('btn')
submitButton.textContent = "submit quiz";

//backBUtton
var backButton = document.createElement('button');
backButton.classList.add('btn')
backButton.textContent = "Back";

//reload Page Button
var reloadPage = document.createElement('button');
reloadPage.textContent = "Restart Quiz";
reloadPage.classList.add('btn');
reloadPage.setAttribute('onclick', "window.location.reload();" )


//Get container of all elements
var container = document.getElementsByClassName('container')[0];
var backButtonContainer = document.getElementsByClassName('back-button-container')[0];

//Get questions Classes
var questions = document.getElementsByClassName('questions');
var resultContainer = document.getElementsByClassName('final-result-container');

//To put it currentQUestion / total questions
var currentQuestionNumber = document.getElementById('current-question');
var totalNumberOfQuestions = document.getElementById('numberOfQuestions');
totalNumberOfQuestions.innerText = questions.length;

var hideQuestionNumber = document.getElementsByTagName('h1')[0];

//initialize the first question to 1
var questionCounter = 1;
currentQuestionNumber.innerText = questionCounter;

//counter for questions. used in questions[count], total score, and array to keep record
var count = 0;
var totalScore =0;
var arrayScore = [0];


//create a result container
var finalResulContainer = document.createElement('div');
finalResulContainer.style.cssText = "font-size: 40px; padding: 10px; color: #04AA6D; border: 2px solid black; border-radius: 20px; margin-top:30%; margin-bottom: 10px";
var paragraphScore = document.createElement('p');
var paragraphDecision = document.createElement('p');

//NEXT BUTTON
nextButton.addEventListener("click", function(){

 backButtonContainer.appendChild(backButton);
 if (backButton.classList.contains('hide-button')){
    backButton.classList.remove('hide-button');
 }
 
currentQuestionNumber.innerText = ++questionCounter;
count++;

// console.log('positiveCount', count)

//hide previous question and add new one
questions[count-1].classList.remove('show-active-questions');
questions[count].classList.add('show-active-questions');

//if we get to the last question. lenght-1 because the counter starts at 0 for first question
//hide next button and show submit button when we get to the last question
if (count === questions.length-1){
    nextButton.classList.add('hide-button');
    container.appendChild(submitButton); 

    //show submit button if hidden. import coz submit button might have been hidden when going backward
    if (submitButton.classList.contains('hide-button')){
        submitButton.classList.remove('hide-button');
    }        
}
});

//BACK BUTTON
backButton.addEventListener("click", function(){

// hide submit button  if it's not hidden
if(!submitButton.classList.contains('hide-button')){
    submitButton.classList.add('hide-button')
}
//show next button if it is hidden
if (nextButton.classList.contains('hide-button')){
    nextButton.classList.remove('hide-button');
}

// hide current question, show previous question
//decrement the counter for question and decrement the current current number
questions[count].classList.remove('show-active-questions');
questions[count-1].classList.add('show-active-questions');
count-=1;
currentQuestionNumber.innerText = --questionCounter;
console.log('negativeCount', count)

//add backButton for the first question
if (count === 0){
    backButton.classList.add('hide-button');
}

});
// console.log('count', count);

    submitButton.addEventListener("click", function(){

    //add backButton. we still need it at the least question
    backButton.classList.add('hide-button');
   //when click on submit, hide the last question , and hide the question counter, and hide submit button
    questions[questions.length-1].classList.remove('show-active-questions');
    hideQuestionNumber.classList.add('hide-question-number');
    submitButton.style.display = "none";
    
  
    if (totalScore < questions.length){
        paragraphDecision.textContent = "You can do better. Try again!";
    }else{
        paragraphDecision.textContent = "Congrats, You made it!";
    }

   
    paragraphScore.textContent = `your score is ${totalScore} / ${questions.length}`;

    //Append result container to html
    finalResulContainer.appendChild(paragraphScore);
    finalResulContainer.appendChild(paragraphDecision);
    finalResulContainer.appendChild(reloadPage);
    container.appendChild(finalResulContainer);
    })
   
//poweful function for checking the answer
//Inspired from : 'https://www.codegrepper.com/code-examples/html/onclick+on+radio+button'

function checkRadio(value) {
if (value==='correct'){
    arrayScore[count]=1;
    console.log('array', arrayScore)
}else{
    arrayScore[count]=0;
    console.log('array', arrayScore)

}
// total score function
function myScore(array){
    let finalScore =0;
    for(let i=0; i<array.length; i++){
         finalScore+=array[i];
    }
    return finalScore;
}
totalScore = myScore(arrayScore);
console.log('total Score', totalScore)
}

//WHAT I STRUGGLED WITH 
    //difficult: How to hide and show an element when it was created in html?
    // since I coulnt do it I had to create the submit button and the result container in javascript so it would be invisible...
    //... unless I append it to the html
    // example for '<div class="finalResult"><Result</div>' created in html, I hid it in css by doing .finalResult{display:none}
    // and in js script I wanted to add it to show the result after I clicked submit button  but...
    // document.getElementbyClassName('finalresult').style.display = 'block'; DOES NOT WORK. it was still invisible

//Questions
//Questions
// 1. How to select a bunch of lines and indent back. I can indent forward  by doing ctrl+A+tab but to indent back
// 2. Is there a way to write css in javascript by putting every style on different line. Ref 'finalResulContainer.style.cssText'
//3.in checkRadio, instead of passing only one or two parametre how can I pass all the element and how to access...
//... each attribute of that element
//4. Restart button only works in vscode not here on codepen
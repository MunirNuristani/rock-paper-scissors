
/* funciton gets the user input and decides if it is one of the four cases, rock, paper, scissors or bomb. 
and converts it to lower case for easy comparison*/
// @param   is recevid from user input.
/*----Page Navigation----*/
 function nav(element, page) {
   const navButton = document.getElementById(element);
    navButton?.addEventListener('click', ()=>{
     window.location.href= page;
   })
 }
 nav('home-classic','index.html');
 nav('about-classic','about.html');
 nav('rpsls-classic','rpsls.html');

/*----classic Game Play----*/
const youWin = 'You Win';
const computerWin = 'Computer Wins';
const buttons = document.querySelectorAll('button.btn');
const container = document.querySelector('div.game-container');
const playAgainButton = document.getElementById('play-again')
const result = document.getElementById('winner')
let userChoice = "";
let playerTalley=0;
let computerTalley=0;

for(let i =0; i< buttons.length; i++){
  buttons[i].addEventListener('click', ()=>{
    container.style.display = 'none';
    playAgainButton.style.display ='block';
    userChoice = buttons[i].value;
    const[winner, computerChoice]=playGame()
    result.innerHTML= `You picked: ${userChoice}, <br>
    Computer picked: ${computerChoice},<br> ${winner}`
    result.style.display = 'block';
  })
}
playAgainButton.addEventListener('click',()=>{
  container.style.display = 'block';
  playAgainButton.style.display = 'none';
  result.style.display = 'none';
})


// creates a random number and assigns it a choice of rock, paper or scissors.
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
  if(randomNumber === 0){
    return 'Rock'
  }else if (randomNumber === 1){
    return 'Paper'
  }else if (randomNumber === 2){
    return 'Scissors'
  }
}
//the funciton determines who won based on the outputs from the above two funcitons.
const determineWinner = (userChoice, computerChoice)=>{
  if(userChoice === computerChoice){
    return 'It\'s a tie game'
  }
  if(userChoice === 'Rock'){
    if (computerChoice === 'Paper'){
     return computerWin;
    } return youWin;
  }
  if(userChoice === 'Paper'){
    if (computerChoice === 'Scissors'){
     return computerWin;
    }return youWin;
  }
  if(userChoice === 'Scissors'){
    if (computerChoice === 'Rock') {
      return computerWin;
    }return youWin;
  }
}

const playGame = () =>{
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice,computerChoice);
  console.log("winner: ", winner);
  talley(winner);
  return[winner, computerChoice]
}

const talley = (whoWins) =>{
  // console.log("whoWins",whoWins);
  if(whoWins==youWin){
    playerTalley++;
    // console.log("You winnnnn");
  }
  if(whoWins==computerWin){
    computerTalley++;
    // console.log("Computer wins.");
  }
  console.log("The score is you: ",playerTalley, " and the computer: ", computerTalley);
  const scoreDiv = document.getElementById("score");
  const firstString = `<p>Your score is: ${playerTalley}.</p>`;
  const secontString = `<p>The computer's score is ${computerTalley}.</p>`;
  // scoreDiv.innerHTML=`<p>Your score is: ${playerTalley}.</p><p>The computer's score is ${computerTalley}.</p>`;
  scoreDiv.innerHTML=firstString+secontString;
  // console.log(scoreDiv);
}
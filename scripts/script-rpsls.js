
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
 nav('home-rpsls','index.html');
 nav('about-rpsls','about.html');
 nav('classic-rpsls','classic.html');

/*----classic Game Play----*/
const buttons = document.querySelectorAll('button.btn');
const container = document.querySelector('div.game-container2');
const playAgainButton = document.getElementById('play-again')
const result = document.getElementById('winner')
const winnerPlaceholder = document.getElementById('winnerPlaceholder')
const reset =  document.getElementById('reset');
const youWin = 'You Win';
const computerWin = 'Computer Wins';
let userChoice = "";
let playerTalley=0;
let computerTalley=0;

for(let i =0; i< buttons.length; i++){
  buttons[i].addEventListener('click', ()=>{
    container.style.display = 'none';
    playAgainButton.style.display ='block';
    userChoice = buttons[i].value;
    const[winner, computerChoice]=playGame()
    winnerPlaceholder.textContent = `${winner}`
    result.innerHTML= `You picked: ${userChoice}, <br>
    Computer picked: ${computerChoice}`
    result.style.display = 'block';
  })
}
playAgainButton.addEventListener('click',()=>{
  container.style.display = 'block';
  playAgainButton.style.display = 'none';
  result.style.display = 'none';
  winnerPlaceholder.textContent = 'Make A Choice'
})


// creates a random number and assigns it a choice of rock, paper or scissors.
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*5);
  if(randomNumber === 0){
    return 'Rock'
  }else if (randomNumber === 1){
    return 'Paper'
  }else if (randomNumber === 2){
    return 'Scissors'
  }else if (randomNumber === 3){
    return 'Lizard'
  }else if (randomNumber === 4){
    return 'Spock'
  }
}
//the funciton determines who won based on the outputs from the above two funcitons.
const determineWinner = (userChoice, computerChoice)=>{
  if(userChoice === computerChoice){
    return 'It\'s a tie game'
  }
  if(userChoice === 'Scissors'){
    if (computerChoice === 'Paper' || computerChoice ==='Lizard'){
     return youWin;
    } return computerWin;
  }
  if(userChoice === 'Paper'){
    if (computerChoice === 'Rock' || computerChoice === 'Spock'){
      return youWin;
    } return computerWin;
  }
  if(userChoice === 'Rock'){
    if (computerChoice === 'Lizard' || computerChoice === 'Scissors'){
      return youWin;
    } return computerWin;
  }
  if(userChoice === 'Lizard'){
    if (computerChoice === 'Paper' || computerChoice === 'Spock'){
      return youWin;
    } return computerWin;
  }
  if(userChoice === 'Spock'){
    if (computerChoice === 'Rock' || computerChoice === 'Scissors'){
      return youWin;
    } return computerWin;
  }
}

const playGame = () =>{
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice,computerChoice);
  talley(winner);
  return[winner, computerChoice]
}

function generateText (player, computer) {
  const scoreDiv = document.getElementById("score");
  const firstString = `<p>Your score is: ${player}.</p>`;
  const secontString = `<p>The computer's score is ${computer}.</p>`;
  return scoreDiv.innerHTML=firstString+secontString;
}

const talley = (whoWins) =>{
  if(whoWins==youWin){
    playerTalley++;
  }
  if(whoWins==computerWin){
    computerTalley++;
  }
  generateText(playerTalley, computerTalley)
}

reset.addEventListener('click', () => {
  playerTalley = 0;
  computerTalley = 0;
  generateText(0, 0)
})
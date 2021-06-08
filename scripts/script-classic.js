
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
const buttons = document.querySelectorAll('button.btn');
const container = document.querySelector('div.game-container');
const playAgainButton = document.getElementById('play-again')
const result = document.getElementById('winner')
let userChoice = "";

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
     return 'Computer Wins';
    } return 'You Win';
  }
  if(userChoice === 'Paper'){
    if (computerChoice === 'Scissors'){
     return 'Computer Wins';
    }return 'You Win';
  }
  if(userChoice === 'Scissors'){
    if (computerChoice === 'Rock') {
      return'Computer Wins'
    }return'You Win';
  }
}

const playGame = () =>{
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice,computerChoice);
  return[winner, computerChoice]
}

/* funciton gets the user input and decides if it is one of the four cases, rock, paper, scissors or bomb. 
and converts it to lower case for easy comparison*/
// @param   is recevid from user input.
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'){
    return userInput;
  }else if (userInput === 'paper'){
    return userInput;
  }else if (userInput === 'scissors'){
    return userInput;
  }else if (userInput === 'bomb'){
    return userInput;
  }else{
    //if the input is not recognized the following message is shown
    alert (`Your input was not recognized. Please enter 'rock', 'paper' or 'scissors'.`)
  }
}
// creates a random number and assigns it a choice of rock, paper or scissors.
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
  if(randomNumber === 0){
    return 'rock'
  }else if (randomNumber === 1){
    return 'paper'
  }else if (randomNumber === 2){
    return 'scissors'
  }
}
//the funciton determines who won based on the outputs from the above two funcitons.
const determineWinner = (userChoice, computerChoice)=>{
  //if the choices are same, game is tie.
  if(userChoice === computerChoice){
    return 'a tie game'
  }
  //decides between rock and paper
  if(userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer wins'
    }
    return 'The user wins'
  }
  //decides betwen paper and scissors
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer wins'
    }
    return 'The user wins'
  }
  //decides between scissors and rock
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer wins'
    }
    return 'The user wins'
  }
  //specail case. If bomb was the input user wins in all cases. 
  if(userChoice === 'bomb'){
    return 'The user wins'
  }
}
//this function ties every thing together. 
const playGame = () =>{
  //receives the input from the user.
  var input = prompt(`Enter your choice: ('rock', 'paper' or 'scissors') `)
  //plugs the user input into the first function
  const userChoice = getUserChoice(input);
  const computerChoice = getComputerChoice();
  document.getElementById('main').innerHTML =`<p>The user chose:      ${userChoice} <br>The computer chose:     ${computerChoice}<br><br>
  <h1>${determineWinner(userChoice, computerChoice)}</h1></p>`

}
playGame()
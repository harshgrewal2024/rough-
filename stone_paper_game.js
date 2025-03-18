let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");

const msg =  document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genmcomputerChoice =()=>{

  const options = ["stone","paper","scissors"];
  const r =Math.floor(Math.random()*3);
  return options[r];

}

const drawGame=()=>{
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor="#081b31";
    
}

const showWinner = (userWin,userChoice,computerChoice)=>{
   if(userWin){
    userScore++;
    userScorePara.innerText=userScore;

    msg.innerText = `You win! Your ${userChoice} beats ${computerChoice} `;
    msg.style.backgroundColor="green";

   }
   else{
    computerScore++;
    computerScorePara.innerText=computerScore;
  
    msg.innerText = `You loss! Your ${computerChoice} beats ${userChoice} `;
    msg.style.backgroundColor="red";
   }
};

const playGame = (userChoice)=>{
    // generate computer choice

    const computerChoice = genmcomputerChoice();
   
    if(userChoice === computerChoice){
        // draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="stone"){
            userWin = computerChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            userWin= computerChoice ==="scissors" ? false : true;

        }
        else{
            userWin= computerChoice ==="stone" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);

    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
    
});
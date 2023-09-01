let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return Math.floor(Math.random()*10);
  };

//console.log(generateTarget())

const compareGuesses = (user, computer, target) =>{
    if(Math.abs(user - target) < Math.abs(computer -target)){
        return true;
    }else if(Math.abs(user - target) === Math.abs(computer -target)){
        return true;
    }else{
        return false;
    }
};


const updateScore = winner =>{
    if(winner === 'human'){
        humanScore = humanScore +1;
    }else if(winner === 'computer'){
        computerScore = computerScore +1;
    }
};

const advanceRound = () =>{
    currentRoundNumber= currentRoundNumber +1;
}


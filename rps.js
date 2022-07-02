
 //function to provide a random play from the computer:
 function computerPlays()
 {
let results=['rock','paper','scissors'];
let selector=(Math.floor(Math.random()*3));
return results[selector];
 }

//function to play one round between the player and the computer

function playRound(playerSelection,computerSelection)
{
playerSelection=playerSelection.toLowerCase();
switch (playerSelection)
{
case 'rock':
    if(computerSelection==='rock')
    {
        console.log('computer chose rock.It is a tie!');
        return 'tie';
    }
    else if(computerSelection==='paper')
    {
        console.log('computer chose paper.You lose!');
        return 'computerWin';
    }
    else
    {
        console.log('computer chose scissors.You win!!');
        return 'playerWin';
    }
    
break;

case 'paper':
    
    if(computerSelection==='rock')
    {
        console.log('computer chose rock.You win!!');
        return 'playerWin';
    }
    else if(computerSelection==='paper')
    {
        console.log('computer chose paper.It is a tie!');
        return 'tie';
    }
    else
    {
        console.log('computer chose scissors.You lose!');
        return 'computerWin';
    }
    
break;

case 'scissors':

    if(computerSelection==='rock')
    {
        console.log('computer chose rock.You lose!');
        return 'computerWin';
    }
    else if(computerSelection==='paper')
    {
        console.log('computer chose paper.You win!!');
        return 'playerWin';
    }
    else
    {
        console.log('computer chose scissors.It is a tie!');
        return 'tie';
    }
    
break;

default:
   console.log('you have entered an invalid selection.try again');
    
}

}

//a function to play a game of five rounds .
function game()
{
let playerWins= 0;
let computerWins= 0;
let roundResult;

for(let i=0;i<5;i++)
{
let playerChoice=prompt('enter your selection:')
roundResult=playRound(playerChoice,computerPlays());
if (roundResult==='playerWin')
{
    playerWins++;
}
else if (roundResult==='computerWin')
{
computerWins++;
}

console.log(`you:${playerWins} - computer:${computerWins}`);

}


}

game();
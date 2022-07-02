
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
let gameResult;
switch (playerSelection)
{
case 'rock':
    if(computerSelection==='rock')
    {
        gameResult='computer chose rock.It is a tie!';
    }
    else if(computerSelection==='paper')
    {
        gameResult='computer chose paper.You lose!';
    }
    else
    {
        gameResult='computer chose scissors.You win!!';
    }
    
break;

case 'paper':
    
    if(computerSelection==='rock')
    {
        gameResult='computer chose rock.You win!!';
    }
    else if(computerSelection==='paper')
    {
        gameResult='computer chose paper.It is a tie!';
    }
    else
    {
        gameResult='computer chose scissors.You lose!';
    }
    
break;

case 'scissors':

    if(computerSelection==='rock')
    {
        gameResult='computer chose rock.You lose!';
    }
    else if(computerSelection==='paper')
    {
        gameResult='computer chose paper.You win!!';
    }
    else
    {
        gameResult='computer chose scissors.It is a tie!';
    }
    
break;

default:
    gameResult='you have not entered a valid selection.try again';
    
}
return gameResult;


}

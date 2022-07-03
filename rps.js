
 //function to provide a random play from the computer:
 const container=document.querySelector('container');
 const paragraph=document.querySelector('intro');
 let display=document.createElement('p');
 display='Results go here';
 container.appendChild(display);
 let playerOverallResult=0;
 let computerOverAllResult=0;
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
if(playerOverallResult==5)
{
    container.remove(display);
    display=`Game ended! Player wins "${playerOverallResult}"-"${computerOverAllResult}"`;
    container.appendChild(display);
    return;
}
else if(computerOverAllResult==5)
{
container.remove(display);
display=`Game ended! Computer Wins "${computerOverAllResult}"-"${playerOverallResult}"`;
container.appendChild(display);
return;
}
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
        computerOverAllResult++;
        return 'computerWin';
    }
    else
    {
        console.log('computer chose scissors.You win!!');
        playerOverallResult++;
        return 'playerWin';
    }
    
break;

case 'paper':
    
    if(computerSelection==='rock')
    {
        console.log('computer chose rock.You win!!');
        playerOverallResult++;
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
        computerOverAllResult++;
        return 'computerWin';
    }
    
break;

case 'scissors':

    if(computerSelection==='rock')
    {
        console.log('computer chose rock.You lose!');
        computerOverAllResult++;
        return 'computerWin';
    }
    else if(computerSelection==='paper')
    {
        console.log('computer chose paper.You win!!');
        playerOverallResult++;
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

const buttons=document.querySelectorAll('button');

buttons.forEach(button=>button.addEventListener('click',()=>{playRound(button.classList.value,computerPlays())}))

//a function to play a game of five rounds .
/*function game()
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
*/
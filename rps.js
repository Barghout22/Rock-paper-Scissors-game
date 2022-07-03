
 //function to provide a random play from the computer:
 const container=document.querySelector('#container');
 const display=document.createElement('p');
 display.classList.add('display');
 display.textContent='';
 const result=document.createElement('p');
 result.classList.add('result');
 result.textContent='';
 container.appendChild(display);
 container.appendChild(result);
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
  
  switch (playerSelection)
  {
  case 'rock':
      if(computerSelection==='rock')
      {
        display.textContent='computer chose rock.It is a tie!'; 
      }
      else if(computerSelection==='paper')
      {
        display.textContent='computer chose paper.You lose!';
          computerOverAllResult++;
      }
      else
      {
        display.textContent='computer chose scissors.You win!!';
          playerOverallResult++;
      }
      result.textContent=`player:${playerOverallResult}- Computer: ${computerOverAllResult}`;
  
  
      if(playerOverallResult==5)
      {
          display.textContent=`Game ended! Player wins ${playerOverallResult}-${computerOverAllResult}`;
          result.textContent= 'Press a button to play again!';
         // container.appendChild(display);
          computerOverAllResult=0;
          playerOverallResult=0;
          return;
      }
      else if(computerOverAllResult==5)
      {
       
        display.textContent=`Game ended! Computer Wins:${computerOverAllResult}-${playerOverallResult}`; 
        result.textContent='Press a button to play again!';
        //container.appendChild(display);
        computerOverAllResult=0;
        playerOverallResult=0;
        return;  
      }
  
  
  
      break;
  
  case 'paper':
      
      if(computerSelection==='rock')
      {
        display.textContent='computer chose rock.You win!!';
          playerOverallResult++;
      }
      else if(computerSelection==='paper')
      {
        display.textContent='computer chose paper.It is a tie!';
      }
      else
      {
        display.textContent='computer chose scissors.You lose!';
          computerOverAllResult++;
      }

      result.textContent=`player:${playerOverallResult}- Computer: ${computerOverAllResult}`;


      if(playerOverallResult==5)
      {
          display.textContent=`Game ended! Player wins ${playerOverallResult}-${computerOverAllResult}`;
          result.textContent= 'Press a button to play again!';
         // container.appendChild(display);
          computerOverAllResult=0;
          playerOverallResult=0;
          return;
      }
      else if(computerOverAllResult==5)
      {
       
        display.textContent=`Game ended! Computer Wins:${computerOverAllResult}-${playerOverallResult}`; 
        result.textContent='Press a button to play again!';
        //container.appendChild(display);
        computerOverAllResult=0;
        playerOverallResult=0;
        return;  
      }
  break;
  
  case 'scissors':
  
      if(computerSelection==='rock')
      {
          display.textContent='computer chose rock.You lose!';
          computerOverAllResult++;
      }
      else if(computerSelection==='paper')
      {
        display.textContent='computer chose paper.You win!!';
          playerOverallResult++;
      }
      else
      {
        display.textContent='computer chose scissors.It is a tie!';
      }
      result.textContent=`player:${playerOverallResult}- Computer: ${computerOverAllResult}`;
  
      if(playerOverallResult==5)
      {
          display.textContent=`Game ended! Player wins ${playerOverallResult}-${computerOverAllResult}`;
          result.textContent= 'Press a button to play again!';
         // container.appendChild(display);
          computerOverAllResult=0;
          playerOverallResult=0;
          return;
      }
      else if(computerOverAllResult==5)
      {
       
        display.textContent=`Game ended! Computer Wins:${computerOverAllResult}-${playerOverallResult}`; 
        result.textContent='Press a button to play again!';
        //container.appendChild(display);
        computerOverAllResult=0;
        playerOverallResult=0;
        return;  
      }
  
  
  
  
      break;
      
  
  }
  
  }
 
  const buttons=document.querySelectorAll('button');
  
  buttons.forEach(button=>button.addEventListener('click',()=>{playRound(button.classList.value,computerPlays())}))
  

  
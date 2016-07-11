
//Generate a random number between 1 and 100. Using the browser functions 
//prompt and alert, ask the user to guess the number. You should give them 4 tries 
//to guess the number. If they guess wrong, tell them if it's higher or lower. 
//If they guess right, congratulate them. Otherwise, give them a message saying 
//what the correct number was, as well as their list of guesses.

//Instead of using prompt and alert, you will have to use capabilities from NodeJS 
//and any external module. 
//HINT: there is an npm library called prompt that can help you with that :)

var prompt = require('prompt');
prompt.start();

function guessTheNumber(){
    
    return prompt.get('number', function(err,response){
        
    var randomNumber = Math.round(Math.random() * 100);
    var tries = 4;

    if (number<randomNumber ){
    console.log('higher!');
    console.log('You have '+tries+' tries left');
    }
    
    else if (number>randomNumber){
      console.log('lower!');
      console.log ('You have '+tries+' tries left');
    }
      
    else if (number === randomNumber){
      console.log ('you win !')
      console.log ('You have '+lives+' lives left');
    }
    else{
        console.log ('the correct number was+'randomNumber);
        console.log('You have only '+ (4-tries)+ 'tries left');
    }
    
        }
      
  });

    
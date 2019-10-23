/*Section 01: This holds most of the variables that will be used within the program*/
    
  
var paragraphs = document.getElementsByTagName('p'); //Grabs All H1s on the page

	
   var searchButton = document.getElementById('find'); //Puts the search button into a variable
    

     var resetButton = document.getElementById('reset'); //Puts the reset button into a variable
    

       var keepGoing = true; //Tells the program to keep going if the search field is NOT blank
    

          var theParas; //Variable that I used to store all the paragraphs (was used for my own readability)
    

            var doesItExist = []; //An array used to hold the position numbers of the words that user searches if the words are found
                       
    
                var amountFound = document.getElementsByName('iExist'); //Pulls all the mark tags and later is used to count the amount of times that a word/phrase is found
    

                    var field = document.getElementById('words'); //Pulls the search field and puts it into a variable
    

                       
    

 var stopWhenFinished = 0; //Helps to prevent typeError. The For Loop below will increment this by one with each loop until it gets to the value equal to paragraphs.length; when it gets there it prompts a break which prevents undefined variables from being read 
    
    
 
/*--------------End of Section 01*/
	  
	  
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
/*Section 02: This section checks to see if the search field is blank, if so an alert and error message is prompted. If the field is 
not blank and a word is found, the if statement calls the function "runCaseSensitive() which loop searches for the words entered by the user"*/    
    


searchButton.addEventListener('click', function(){
  
  /*Makes sure text field is not left blank*/
  
  if(field.value === ""){alert('Field Cannot Be Left Blank!');
                         
  document.getElementById('status').innerHTML = "Status: *No Words Entered. Please Reset Form!";
                         
  document.getElementById('status').setAttribute("class", "bad");
                         
  field.style.backgroundColor = "#ffb5b5"; 
                         
  keepGoing = false;}
 
   
	
  if(keepGoing === true){runCaseSensitive();}
  

});




/*--------------End of Section 02*/
    
    
    
    
    
    
    
    
    
    
    
/*Section 03: Runs a function that loops and searches for the words/phrase that the user entered. I decided to use regular expressions to accomplish this task*/     
      
  

function runCaseSensitive(){ /*----------open function--------------*/
  
 
  
  
  
  
  
  
  
  
  var wordBeingSeachedFor = field.value; /*gets the word being searched for*/
  
  for(var z = 0; z <= paragraphs.length; z++){
    
    theParas = paragraphs[z].innerHTML; /*puts all paragraphs into theParas array*/
    
    
    var wordParamAsRegExp = new RegExp(wordBeingSeachedFor, 'g'); //Does a global search for the word being looked for by the user
      
    doesItExist =  theParas.search(wordParamAsRegExp); /*if the word exists, this provides a number > -1 */
 
      
    
    
    
    
    //Subsection below runs if the word is found   
    
       
    if(doesItExist > -1){
      
    paragraphs[z].innerHTML = theParas.replace(wordParamAsRegExp, "<mark name='iExist'>" + wordBeingSeachedFor + "</mark>");
      
      
      document.getElementById('status').innerHTML = "Status: Word or Phrase Was Found " + amountFound.length + " Times!";
      
      
      document.getElementById('status').setAttribute("class", "good");}
    
     
  
    
    
    
    
    
     //Subsection below runs if the word is  NOT found  
    
 
     if(amountFound.length === 0) {
      
      
     document.getElementById('status').innerHTML = "Status: *Word or Phrase Not Found. Please Reset Form!";
      
     document.getElementById('status').setAttribute("class", "bad");}
  
 
  
    
    
   
    /*I kept getting a TypeError after the final loop, so in order to stop it I put the condition below to
    
    stop running the for loop with a break when the variable stopWhenFinished is equal to the loop limiter paragraphs.length*/
    
     stopWhenFinished++;
    
    
    if (stopWhenFinished === paragraphs.length){
      
      break;}
  
  
  
  
  
 
  //Subsection below resets the text search field to empty after the user search for a word/phrase. This executes regardless if a word is found or not
  //I did this because I didnt want the user to keep htting the search button and cause errors
    
    
  var y = document.getElementById('words').defaultValue;
  
   document.getElementById('words').value = y;
  
  
  
 }/*----------End For Loop--------------*/
	
}/*----------close function--------------*/

  


/*--------------End of Section 03*/
  
 
  
  
  
  

  
  

/*Section 04: This section resets the search field, status message and reverts 
the paragraph text beck to before it was highlighted*/


    
//Subsection below resets the paragraph text to before it was highlighted using a little bit of jQuery which replaces all the <mark> tags with nothing ('')
resetButton.addEventListener('click', function(){
  
  
  
  
  for(var i = 0; i < paragraphs.length; i++){
    
  
  $('mark').contents().unwrap().wrap('');
 
  
  }

  

  
//Subsection resets all variables, fields, buttons, etc to perform a fresh search   
  
  var field = document.getElementById('words');
  
  var x = document.getElementById('words').defaultValue;
  
  document.getElementById('words').value = x;
  
  var status = document.getElementById('status');
  
  status.innerHTML = "Status: Ready";
  
  status.setAttribute("class", "good");
  
  field.style.backgroundColor = "white";
  
  keepGoing = true;
             
  doesItExist = [];
  
  stopWhenFinished = 0;
  
  
  
  
});



/*--------------End of Section 04*/







	  
	  

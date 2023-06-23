let input = document.getElementById("inputField");

// Execute a function when the user presses a key on the keyboard
inputField.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
});


function onclickfunction(){
  let userGuess = document.getElementById('inputField').value;
  let responseText = document.getElementById('responseText')
  
  //Clears the previous guess
  input.value = "";
 
  if (userGuess.toUpperCase() == "OVERBOARD"){
    document.getElementById('inputField').style.outline='2px solid #fdf14e';
    document.getElementById('btn').style.background='#fdf14e';
    responseText.innerHTML = "Claim your first ticket role using <a href='https://discordapp.com/channels/1066815802621317171/1071317218257801237/1077976939291230369'>this message</a> and then check the channel list";
  }
  else if (userGuess.toUpperCase() == "093640263"){
    document.getElementById('inputField').style.outline='2px solid #4efda6'
    document.getElementById('btn').style.background='#4efda6';
    responseText.innerHTML = "Claim your second ticket role using <a href='https://discordapp.com/channels/1066815802621317171/1075288591313403954/1095574270404464720'>this message</a> and then check the channel list once again";
  }
  else if (userGuess.toUpperCase() == "H0RNSW0GGLE"){
    document.getElementById('inputField').style.outline='2px solid #7f8ff4';
    document.getElementById('btn').style.background='#7f8ff4';
    responseText.innerHTML = "Congratulations! Claim your final ticket role using <a href='https://discordapp.com/channels/1066815802621317171/1076247721314369606/1093226507633176627'>this message</a>";
  }
  else if (userGuess.toUpperCase() == "33"){
    document.getElementById('inputField').style.outline='2px solid #fd4e4e'
    document.getElementById('btn').style.background='#fd4e4e';
    responseText.innerText = "Maybe focus on how many digits are required for this code.";
  }
  else {
    document.getElementById('inputField').style.outline='2px solid #fd4e4e'
    document.getElementById('btn').style.background='#fd4e4e';
    responseText.innerText = "Incorrect, Please Try Again";
  }
}

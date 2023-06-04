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
  let link = document.getElementById('link');
  
  //Clears the previous guess
  input.value = "";

  if (userGuess.toUpperCase() == "093640263"){
    document.getElementById('inputField').style.outline='2px solid #4efda6'
    document.getElementById('btn').style.background='#4efda6';
    responseText.innerHTML = "Claim your second ticket role using <a href='#'>this message</a> and then check the channel list once again";
  }
  else if (userGuess.toUpperCase() == "33"){
    document.getElementById('inputField').style.outline='2px solid #fd4e4e'
    document.getElementById('btn').style.background='#fd4e4e';
    responseText.innerText = "Maybe focus on how many digits are required for this code.";
  }
  else if (userGuess.toUpperCase() == "OVERBOARD"){
    document.getElementById('inputField').style.outline='2px solid #fdf14e'
    document.getElementById('btn').style.background='#fdf14e';
    responseText.innerHTML = "Claim your first ticket role using <a href='#'>this message</a> and then check the channel list";
  }
  else {
    document.getElementById('inputField').style.outline='2px solid #fd4e4e'
    document.getElementById('btn').style.background='#fd4e4e';
    responeText.innerText = "Incorrect, Please Try Again";
  }

}

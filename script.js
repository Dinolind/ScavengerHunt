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
  let responeText = document.getElementById('responseText')
  
  //Clears the previous guess
  input.value = "";

  if (userGuess.toUpperCase() == "093640263"){
    document.getElementById('inputField').style.outline='2px solid #4efda6'
    document.getElementById('btn').style.background='#4efda6';
    responeText.innerText = "Correct, Search E2 and Change the O's to 0's";
  }
  else if (userGuess.toUpperCase() == "33"){
    document.getElementById('inputField').style.outline='2px solid #fd4e4e'
    document.getElementById('btn').style.background='#fd4e4e';
    responeText.innerText = "Maybe undo a step and try again";
  }
  else if (userGuess.toUpperCase() == "OVERBOARD"){
    document.getElementById('inputField').style.outline='2px solid #fd4e4e'
    document.getElementById('btn').style.background='#fd4e4e';
    responeText.innerText = "Close, now check what's lurking below";
  }
  else {
    document.getElementById('inputField').style.outline='2px solid #fd4e4e'
    document.getElementById('btn').style.background='#fd4e4e';
    responeText.innerText = "Incorrect, Please Try Again";
  }

}
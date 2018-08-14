$(document).ready(function(){
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var userInput =$("#userText").val();


// console.log(userInput);
// var output =userInput.replace("a" || "e" || "i" || "o" || "u" || "y", "-");
// console.log(output);


    var userArray = userInput.split("");
    // console.log(userArray);

    for (var index = 0; index <= userArray.length; index += 1) {
      if (userArray[index] === "a" || userArray[index] === "e" || userArray[index] === "i" || userArray[index] === "o" || userArray[index] === "u"   ) {
        userArray.splice(index, 1, "-");
        console.log(userArray);
    }
  }
      var finalOutput = userArray.join("");

      $("#output").text(finalOutput);

      $("#userInput").toggle();

  });
});

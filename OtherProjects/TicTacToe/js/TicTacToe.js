$(document).ready(function() {

  var circleOrEx = "o"; // this variable determines whose turn it is first (right now it is "o")
  var isGameInProgress = true; // once the page loads, the game is on
  var winningCombos = { // this variable outlines the winning combinations, the numbers below
    // represent a box in a 3 x 3 grid like this
    // 0 | 1 | 2
    // ---------
    // 3 | 4 | 5
    // ---------
    // 6 | 7 | 8

    0: [ // this shows winning combinations starting from the top left corner (the box with 0 in it)
      [1, 2], //the winning combination would be 0, 1, 2
      [3, 6], //the winning combination would be 0, 3, 6
      [4, 8]  //the winning combination would be 0, 4, 8
    ],
    1: [ // this shows winning combinations starting from the top middle box (the box with 1 in it)
      [0, 2], //the winning combination would be 1, 0, 2
      [4, 7]  //the winning combination would be 1, 4, 7
    ],
    2: [ // this shows winning combinations starting from the top right corner (the box with the 2 in it)
      [0, 1], //the winning combination would be 2, 0, 1
      [5, 8], //the winning combination would be 2, 5, 8
      [4, 6]  //the winning combination would be 2, 4, 6
    ],
    3: [ // this shows winning combinations starting from the middle left box (the box with the 3 in it)
      [0, 6], //the winning combination would be 3, 0, 6
      [4, 5]  //the winning combination would be 3, 4, 5
    ],
    4: [ // this shows winning combinations starting from the middle box (the box with the 4 in it)
      [1, 8], //this should be [0, 8] should it not?
      //the winning combination would be 4, 0, 8
      [2, 6], //the winning combination would be 4, 2, 6
      [1, 7], //the winning combination would be 4, 1, 7
      [3, 5]  //the winning combination would be 4, 3, 5
    ],
    5: [ // this shows winning combinations starting from the middle right box (the box with the 5 in it)
      [2, 8], //the winning combination would be 5, 2, 8
      [3, 4]  //the winning combination would be 5, 3, 4
    ],
    6: [ //this shows winning combinations starting from the bottom left corner (the box with the 6 in it)
      [0, 3], //the winning combination would be 6, 0, 3
      [2, 4], //the winning combination would be 6, 4, 5
      [7, 8]  //the winning combination would be 6, 7, 8
    ],
    7: [ // this shows winning combinations starting from the bottom middle box (the box with the 7 in it)
      [1, 4], //the winning combination would be 7, 4, 1
      [6, 8]  //the winning combination would be 7, 6, 8
    ],
    8: [ // this shows winning combinations starting from the bottom right corner (the box with the 8 in it)
      [0, 4], //the winning combination would be 8, 0, 4
      [2, 5], //the winning combination would be 8, 2, 5
      [6, 7]  //the winning combination would be 8, 6, 7
    ]
  };

  // Explain what this event does
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) {
    // if isGameInProgress = true and a box is clicked that hasClass "empty"
    // then this("empty") class is removed (.removeClass) and a circleOrEx is put into the square that had been clicked
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");
      //this lets the user put the circleOrEx in the empty square

      checkIfWon($(this).index(), circleOrEx); // this determines whose turn it is and checkIfWon the game

      if (circleOrEx === "o") { // if "o" has had their turn
              circleOrEx = "x"; // an "x" is played
      } else {
        circleOrEx = "o"; // if "o" has not played or "x" has played, it is "o"s turn
      }
    }

  });

  // If you click on the game board, the game begins and the function runs
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); // the variable takes on the the 'div's in each of the 9 boxes
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { // this puts the previously played game somewhere else on the document
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    // this function empties the empty class for games that in progress
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  // this function checks to see if the playerWon, chosenSquare is the final value of a winning combination
  // the possible chosenSquare values can be anywhere from 0 - 8
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { // this nested loop provides the length of the multidimensional array
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        //value of j starts at zero
        //If j starts at 1 only two more divs must match in order to win.
        //If j is two 2 only one more div must be matched in order to win (which would be any square on the board)
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) {
          // if the #board finds the divs are equal(equal amount of "x" and "o" then nothing happens)
          playerWon = false;
        }
      }

      if (playerWon) { // if they playerWon do this code

        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green");
          //This changes the divs i and j (the first two inputs) of the winning combination to green
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");
        // this changes the chosenSquare (the deciding div) of the winning combination to green aswell
        alert("Winner is " + circleOrEx.toUpperCase() + "!");
        // this makes an alert pop up saying who the winner is
        isGameInProgress = false;
        // at this point the game is not in progress anymore
        return false; //this exits the loop
      }
    }


  }
})

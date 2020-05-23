
//create gameboard with listeners that is ready to accept marks
const gameBoard = (() => {
  board = ["","","","","","","","",""];
  endgame = false;

  const addSquares = function() {
    for (i=1; i<=9; i++) {
      const square = document.createElement('div');
      square.classList.add("btn");
      square.setAttribute("id", "item"+i);

      square.addEventListener("click", function() {
        if (square.textContent == "") {
          square.textContent = "X";
          let choice = parseInt(square.getAttribute("id").replace( /^\D+/g, ''), 10);
          board[choice-1] = "X";
          gameOver.check();
          if (!endgame) {
            opponent.play();
          }
        }
      });

      document.querySelector(".grid-container").appendChild(square);
    }
  }
  
  return {
    board,
    addSquares,
    endgame,
  }
})();


//Check bordstate and announce winner or tie
const gameOver = (() => {
  
  const annnouncement = function(message) {
    document.querySelector(".msg").textContent = message;
    document.querySelector(".announce").style.visibility = "visible";
  }
  
  const check = function() {
    if (
      (board[0] == board[1] && board[2] == board[1] && board[0] !== "") ||
      (board[3] == board[4] && board[5] == board[4] && board[3] !== "") ||
      (board[6] == board[7] && board[8] == board[7] && board[6] !== "") ||
      (board[0] == board[3] && board[6] == board[3] && board[0] !== "") ||
      (board[1] == board[4] && board[7] == board[4] && board[1] !== "") ||
      (board[2] == board[5] && board[8] == board[5] && board[2] !== "") ||
      (board[0] == board[4] && board[8] == board[4] && board[0] !== "") ||
      (board[2] == board[4] && board[6] == board[4] && board[2] !== "")
    ) {
      let _counterMarks = board.reduce(function (allMarks, mark) {
        if (mark in allMarks) {
          allMarks[mark]++;
        } else {
          allMarks[mark] = 1;
        }
        return allMarks;
      }, {});
    
      if (_counterMarks.X > _counterMarks.O)  {
        annnouncement("You Win!");
        endgame = true;
      } else {
        annnouncement("You Lose!");
        endgame = true;
      }
    }
    if (board.indexOf("") < 0 && !endgame) {
      annnouncement("Tie!");
    }
  };

  return {
    check,
  }

})();


//AI opponent
const opponent = (() => {
  const play = function() {
    let cpuChoice;
    while (true) {
      cpuChoice = Math.floor(Math.random() * 9);
      if (board[cpuChoice] == "") {
        let box = document.getElementById("item"+(cpuChoice+1));
        box.textContent = "O";
        board[cpuChoice] = "O";
        gameOver.check();
        break;
      }
    }
  };

  return {
    play,
  }

})();



gameBoard.addSquares();









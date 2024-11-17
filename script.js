let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = " Congratulations , Winner is " + winner;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

let count = 0;
let cnt = () => {
  count++;
};

const checkWinner = () => {
  for (pattern of winPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    let track = addEventListener("click", cnt);
    if (count === 9) {
      msg.innerText = "Its a draw!!";
    }

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val && pos3val === pos1val) {
        // console.log(pos1val + " wins");

        showWinner(pos1val);
      }
    }
  }
};

const resetgame = () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

newGamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
// b1 = document.querySelector("#b1");
// b1.addEventListener("click", () => {
//   console.log("box 1 was clicked");
// });

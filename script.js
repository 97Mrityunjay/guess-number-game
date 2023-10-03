let randomNumber = Math.trunc(Math.random()*100)+1;
console.log(randomNumber);
const resetGame = document.querySelector(".again-btw");
const num = document.querySelector(".number");
const guessNum = document.getElementById("guess-num");

const checkNum = document.querySelector(".check-num");
const message = document.querySelector(".message");
const score = document.querySelector(".label-score");
// console.log(score);
const highScore = document.querySelector(".final-score");
console.log(highScore);
// console.log(typeof Number(guessNum.value))
// console.log(Number(guessNum.value))
checkNum.addEventListener("click", function(){
  if(Number(score.innerHTML)!=0)
  {
    if(Number(guessNum.value)=== randomNumber)
    {
        message.innerHTML = `Correct number`;
        highScore.innerHTML = score.innerHTML;
        num.innerHTML = String(randomNumber);
        document.body.style.backgroundColor = `green`;
        guessNum.style.backgroundColor = `green`;
    }
    else if(Number(guessNum.value) < randomNumber)
    {
        message.innerHTML = `Too low`;
        score.innerHTML = Number(score.innerHTML)-1;
    }
    else
    {
        message.innerHTML =`Too high`;
        score.innerHTML = Number(score.innerHTML)-1;
    }
}
   
else
{
        message.innerHTML = `You have lost the game`;
        document.body.style.backgroundColor = `red`;
        // highScore.innerHTML = `0`;
 }


})

resetGame.addEventListener("click", (e)=>{
      num.innerHTML = `?`;
      message.innerHTML = `Start Guessing...`;
      score.innerHTML = `20`;
      highScore.innerHTML = `0`;
      guessNum.value = "";
      document.body.style.backgroundColor = `#414141`;
})
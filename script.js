for(let i=0; i<3; i++){
  document.querySelectorAll(".play")[i].addEventListener("click", (e) => {
    let buttonInnerHtml = this.innerHTML;
    let name = e.target.id;
    console.log("generate")
    console.log(name);
    generate(name);
  });
}

function generate(idName){
  let compu = getComputerChoice();
  let player = idName;
  let result = check(compu, player);
  console.log(player);
  console.log(compu);
  if(compu == player){
    // skip
  } else if(result == 1){
    let now = Number(document.getElementById("compuScore").innerHTML);
    now += 1;
    console.log(now);
    document.getElementById("compuScore").innerHTML = now;
  } else {
    let now = Number(document.getElementById("playerScore").innerHTML);
    now += 1;
    console.log(now);
    document.getElementById("playerScore").innerHTML = now;
  }

}

function check(compu, player){
  if((compu == "Scissors" && player == "Paper") || (compu == "Rock" && player == "Scissors") || (compu == "Paper" && player == "Rock")){
    return 1;
  } else return 0;
}

function getComputerChoice(){
  let x = Math.random()*3;
  x = x | 0;
  if(x == 0){
    return "Rock";
  } else if(x == 1){
    return "Paper";
  } else {
    return "Scissors";
  }
}
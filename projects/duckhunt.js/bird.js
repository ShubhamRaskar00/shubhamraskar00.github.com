var count = 0;
 var run = () => {
    const bird = document.getElementsByTagName('img');
    for(let i = 1; i < bird.length; i++){
        bird[i].style.display = "block"; 
    }
    document.getElementById("start").style.display='none'
}
var bird = (duck) => {
    const play = document.getElementById("start");
    duck.style.display="none";
    count++;
    document.getElementById("score").innerHTML = "Score:"+ " "+ count;
    const score = document.getElementById("score");
    if (score.innerHTML.length == 9) {
        play.style.display = "block"
        play.innerHTML = "Restart"
        count = 0;
    }
}
var count = 0;
var timer;
var currColor = "33BCFF";
var flip = 0;

//begin counting down from inputted start value
var countdown = function(start){
  count = start;

  //change button function to stop timer
  document.getElementById("button1").innerHTML = "STOP";
  document.getElementById("button1").onclick = stopcount;

  timer = setInterval(decrement, 1000); //countdown interval
}

//change value in mainbox for each timer interval
var decrement = function(){
  console.log("in decrement");
        
  if (flip==1) {
    document.getElementById("forBG").style.backgroundColor = randomColor();
  }

  if (count>0){ //keep counting down
    console.log(count);
    flip = 0;
    document.getElementById("mainbox").innerHTML = count;
    count--;
  }
  else { //reset timer and change background color
    console.log("reached 0");
    document.getElementById("mainbox").innerHTML = count;
    count = 20;
    flip = 1;
    //document.getElementById("forBG").style.backgroundColor = randomColor();
  }
}

//stop the counter
var stopcount = function(){
  console.log("in stopcount");
  clearTimeout(timer);
}

var currColor = "33BCFF";

//change background colour to indicate reset of timer
var randomColor = function(){
  var newColor = currColor.substring(1,6) + currColor.substring(0,1);

  console.log(currColor + " " + newColor);
  currColor = newColor;
  return newColor;
}

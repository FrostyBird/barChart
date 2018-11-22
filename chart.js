var canvDiv = document.getElementById("canvDiv");
var width = 500;
var height = width * .6;
var myCanv = document.getElementById("myCanv");
var ctx = myCanv.getContext("2d");  
myCanv.height = height;
myCanv.width = width;

var xAxisStart = width/4;
var xAxisEnd = width-(width/16);
var yAxisStart = height/16;
var yAxisEnd = height-(height/5);

var nums = [];
var maxNum;

var data = [
  ["history",5],
  ["fiction",2],
  ["non-fiction",10],
  ["sci-fi",5],
  ["romance",8]
];

function drawAxes(){
  ctx.beginPath();
  ctx.moveTo(width/4,height/16);
  ctx.lineTo(width/4,height-(height/5));
  ctx.lineTo(width-(width/16),height-(height/5));
  ctx.stroke();
}

function divide(){
  
  var chartTop = height/12;
  var barMax = xAxisEnd-xAxisStart
  var barHeight = (yAxisEnd - yAxisStart) / data.length;
  var thisHeight = yAxisStart+1;
  var marginHeight = thisHeight - (thisHeight/16);
  
  
  for(i=0;i<data.length;i++){
    
    thisBar = data[i][1] / maxNum;
    console.log("thisBar is: " + thisBar);
    
    //draw the actual bar
    ctx.fillStyle = "#0f0";
    ctx.fillRect(xAxisStart+1,thisHeight,thisBar * barMax,barHeight-marginHeight);
    
    /*
    ctx.strokeStyle = "#f00";
    ctx.beginPath();
    ctx.moveTo(xAxisStart+1,thisHeight);
    ctx.lineTo(barMax,thisHeight);
    ctx.stroke();
    //draw the margin
    ctx.strokeStyle = "#00f";
    ctx.beginPath();
    ctx.moveTo(xAxisStart+1,(thisHeight + barHeight)-marginHeight);
    ctx.lineTo(barMax,(thisHeight + barHeight)-marginHeight);
    ctx.stroke();
    console.log("bar: " + thisHeight);
    console.log("margin: " + marginHeight);
    */
    thisHeight += barHeight;
    
  }  
}

function graphNums(){
  
  for(i=0;i<data.length;i++){
    nums.push(data[i][1]);
  }
  
  maxNum = nums.reduce(function(a, b) {
    return Math.max(a, b);
  });
}


window.onload = function(){
 drawAxes();
 graphNums();
 divide(); 
}

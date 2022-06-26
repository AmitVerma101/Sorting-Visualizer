function count(number) {
  let a = 0;
  let x = number[0].childNodes;
  Array.from(x).forEach(() => {
    a++;
  });
  console.log(x);
  return a;
}

function calcTime(speed){
  if(speed==1){
    return 200
  }
  else if(speed>1&&speed<=20){
    return 160
  }
  else if(speed>20&&speed<=40){
    return 120
  }
  else if(speed>40&&speed<=60){
    return 80
  }
  else if(speed >60&&speed<=80){
    return 50
  }
  else {
    return 30
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo1(x,index1, index2, a, b, time) {
  // demo(index1,index2,a,b)
  await sleep(time)
  x[index1].style.height = `${b}px`;
  
  // await sleep(time)
  x[index2].style.height = `${a}px`;
  
  
  
}
async function BubbleSort() 
{
  let speed = document.getElementById("myRange1").value;
  console.log("speed is "+speed);
   let time = calcTime(speed)
   console.log("Time required is "+time)  
  let number = document.getElementsByClassName("graph");
  let noOfDiv = count(number);
  let x = number[0].childNodes;
  console.log(x)
//   x[0].style.backgroundColor = 'orange'

  for (let index = 0; index < noOfDiv-1 ; index++) {
    for (let index1 = 0; index1 < noOfDiv-index-1 ; index1++) {
        x[index1].style.backgroundColor = "orange";
        
      if (x[index1].clientHeight > x[index1+1].clientHeight)
       {
        let a = x[index1].clientHeight;
        let b = x[index1+1].clientHeight;
        console.log("before swapping",a,b)
        demo1(x,index1,index1+1,a,b,time)
        // setTimeout(demo1,time,x[index1], x[index1+1], a, b, time)
        await sleep(time);

        console.log("after setInterval");
      }
      else {
             
             await sleep(time);
        //   x[index1].style.backgroundColor = "orange";
        //   x[index1 + 1].style.backgroundColor = "blue";
        console.log("after inner loop");
      }
      x[index1].style.backgroundColor = "blue";
        x[index1 + 1].style.backgroundColor = "orange";
        
    }
    x[noOfDiv-index-1].style.backgroundColor = "green";
  }
  x[0].style.backgroundColor="green"
}



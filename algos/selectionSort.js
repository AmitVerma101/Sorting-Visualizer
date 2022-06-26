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

  async function demo2(a,b,time){
        await sleep(time)
        a.style.backgroundColor = 'blue'
        b.style.backgroundColor = 'purple'
        

  }
  async function swap1(a,b,c,time)
  {
      await sleep(time)
      let num1 = a[b].clientHeight
      let num2 = a[c].clientHeight
      a[c].style.height = `${num1}px`
      a[b].style.height = `${num2}px`
      
      a[b].style.backgroundColor = 'blue'
      
      //a[c].style.backgroundColor = 'green'
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

async function SelectionSort(){
  let close=document.getElementById("stop");
  close.style.display="inline"; 
  let min_index;
    let speed = document.getElementById("myRange1").value;
   let time = calcTime(speed)
      let number = document.getElementsByClassName("graph");
  let noOfDiv = count(number);
  console.log(noOfDiv)
  let x = number[0].childNodes;
  for (let index = 0; index < noOfDiv -1 ; index++) {
         min_index=index;
    for (let index1 = index+1; index1 < noOfDiv; index1++) {
        x[min_index].style.backgroundColor = 'purple'
            x[index1].style.backgroundColor = 'orange'
            if(x[index1].clientHeight < x[min_index].clientHeight)
            {
                demo2(x[min_index],x[index1],time)
                await sleep(time)
                min_index = index1
            }   
            else {
                await sleep(time)
                x[index1].style.backgroundColor="blue"
            }    
    }
    swap1(x,min_index,index,time)
}
//x[noOfDiv-1].style.backgroundColor='green'
}


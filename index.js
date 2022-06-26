function removeAllChildNodes(container) {
    while (container[0].firstElementChild) {
        container[0].removeChild(container[0].firstElementChild);
    }
}
function Repeat(width,interval,container,element){
    for (let index = 0; index < width; index=index+interval+1) {
        let element=document.createElement('div')
        element.style.height= `${100+Math.random()*400}px`;
        element.style.width= `${interval}px`
        container[0].appendChild(element);
        console.log("Hello")
    element.style.backgroundColor='blue';
        element.style.margin='1px';
}
}
function createArray(){
    let a = document.getElementById("myRange2");
    let container= document.getElementsByClassName("graph");
    let width=container[0].clientWidth;
    console.log(width)
    removeAllChildNodes(container);
    if(a.value==1){
        let interval = 52.3;
        Repeat(width,interval,container); 
        }
        else if(a.value==20){
            let interval = 39;
        Repeat(width,interval,container); 

        }
        else if(a.value==40){
            let interval = 31;
        Repeat(width,interval,container); 
 
        }
        else if(a.value==60){
            let interval = 25.6;
        Repeat(width,interval,container); 
 
        }
        else if(a.value==80){
            let interval = 21.8;
        Repeat(width,interval,container); 
 
        }
        else {
            let interval =19;
        Repeat(width,interval,container); 


        }

    }



function setValue(){
   let a = document.getElementById("myRange1");
   if(a.value==1){
       a.value = "1";
       console.log(a.value);
   } 
   if(a.value<20&&a.value>1){
        a.value = "20";
        console.log(a.value)

    }
    else if(a.value>=20&&a.value<40){
        a.value = "40";
        console.log(a.value)
    }
    else if(a.value>=40&&a.value<60)
    {
        a.value = "60";
        console.log(a.value)
    }
    else if(a.value>=60&&a.value<80)
    {
        a.value = "80";
        console.log(a.value)
    }
    else if(a.value>=80&&a.value<100) {
        a.value = "100";
        console.log(a.value)
    }
    
}
function setValue2(){
    let a = document.getElementById("myRange2");
    if(a.value==1){
        a.value = "1";
        console.log(a.value);
    } 
    if(a.value<20&&a.value>1){
         a.value = "20";
         console.log(a.value)
 
     }
     else if(a.value>=20&&a.value<40){
         a.value = "40";
         console.log(a.value)
     }
     else if(a.value>=40&&a.value<60)
     {
         a.value = "60";
         console.log(a.value)
     }
     else if(a.value>=60&&a.value<80)
     {
         a.value = "80";
         console.log(a.value)
     }
     else if(a.value>=80&&a.value<100) {
         a.value = "100";
         console.log(a.value)
     }
     
 }

 
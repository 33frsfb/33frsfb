const play1=document.querySelector("#b1");
const play2=document.querySelector("#b2");
const reset=document.querySelector("#b3");
  
const playerOne=document.querySelector("#s1");
const playerTwo=document.querySelector("#s2");
const winSelect=document.querySelector("#num");

let gameOver=false;
let winner=4;
let p1score=0;
let p2score=0;



   play1.addEventListener('click',function(){

       if(!gameOver)
       {
          p1score+=1;
          if(p1score===winner){
             gameOver=true;
             playerOne.classList.add('winner');
             playerTwo.classList.add('loser');
          }
           playerOne.textContent=p1score;
       }
   })


   play2.addEventListener('click',function(){

     if(!gameOver)
     {
        p2score+=1;
        if(p2score===winner){
           gameOver=true;
           playerOne.classList.add('loser');
           playerTwo.classList.add('winner');
        }
         playerTwo.textContent=p2score;
     }

   })

   winSelect.addEventListener('change',function(){

     winner=parseInt(this.value);
     resetting();
   })

   reset.addEventListener('click',resetting)

   function resetting(){

       gameOver=false;

          p1score=0;
        playerOne.textContent=p1score;
        playerOne.classList.remove('winner','loser');
        playerTwo.classList.remove('winner','loser');
        p2score=0;
         playerTwo.textContent=p2score;

   }

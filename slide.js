var arrowLeft = document.getElementById('arrowLeft');

var arrowRight = document.getElementById('arrowRight');

var counts = document.getElementById('count');

var mssg = document.getElementById('mssg');

var number = document.getElementById('numb');

var clickSound = new Audio('Click Audio.wav');

var count = 0;

arrowRight.addEventListener('click' , increase);

function increase(){

     if(count < number.value){

          count++;     
          
    }
    
    clickSound.play();
    mssg.innerHTML = ""; 
    counts.innerHTML = count;

     if(count == number.value){

          mssg.innerHTML = "No More Slides Available";
          clickSound.pause();
          
     }


}

arrowLeft.addEventListener('click' , decrease);

function decrease(){

     if(count > 0 ){

          count--;

         
      }
     
     clickSound.play();
     mssg.innerHTML = "";
     counts.innerHTML = count;

     if(count == 0 ){

          mssg.innerHTML = "Less Than 0 is not Allowed";
          clickSound.pause();
     }

    
}


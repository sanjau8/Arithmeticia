var interval;
var min=2,sec=0;
function countdown() {
    
    
       
    setTimeout(function(){
        if(sec===0){
            sec=59;
            min--;
        }
        else{
            sec--;
        }
        
        document.querySelector('.min').textContent=min;
        document.querySelector('.sec').textContent=sec;
        if(min===0&&sec===0){
        location.replace("last_page.html");
        clearTimeout();
        }
        else
        countdown();
    },1000); 
       
    
}



    

  




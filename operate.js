var operators=['+','-','*','/'];



var crct=0,wrng=0,tot=0,op,num1,num2;
var chk=0;


function vale(){
    chk=1;
    document.getElementById("button").disabled = true;
    document.getElementById('answer').value='';
num1=Math.floor(Math.random()*99)+1;
num2=Math.floor(Math.random()*99)+1;
op=Math.floor(Math.random()*4);
document.querySelector('#first-num').textContent = num1 ;
document.querySelector('#second-num').textContent = num2 ;
document.querySelector('#operator').textContent = operators[op];



}



function enterpressalert(e, textarea){
    if(chk==1){
        
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
        tot++;
        var ans=document.getElementById('answer').value;
        var actans;
        switch(op){
        case 0: actans=num1+num2;
        break;
        case 1:actans=num1-num2;
        break;
        case 2:actans=num1*num2;
        break;
        case 3:actans=Math.floor(num1/num2);
        break;
        }
        if(ans==actans)
        crct++;
        else
        wrng++;

        localStorage.setItem("tot",tot);
        localStorage.setItem("crct",crct);
        localStorage.setItem("wrng",wrng);       
     vale();
    }   
    }
    }
    

    
    
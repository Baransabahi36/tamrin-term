 
function check(){
    var val1=0,val2=0;
     val1=  document.getElementById("qad").value /100; 
     val2=  document.getElementById("vazn").value ;
     var BMI= val2 / (val1*val1);                
     document.getElementById("result").innerText= BMI;
     if(BMI<18.5) 
        document.getElementById("text").innerText="کمبود وزن";
     else if(BMI>18.5 && BMI<24.9)
        document.getElementById("text").innerText="نرمال  ";
     else if(BMI>24.9 && BMI<29.9)
        document.getElementById("text").innerText=" اضافه وزن";     
    else if(BMI>30)
        document.getElementById("text").innerText="  چاق ";                   
}
 
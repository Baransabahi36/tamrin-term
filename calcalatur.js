
var result=0;
///عمل جمع
function jam(){
var val1=0,val2=0;
val1= Number(document.getElementById("number1").value); 
val2= Number(document.getElementById("number2").value);             
result =val1+val2;
document.getElementById("result").innerText=result;
}
///عمل تفریق
function menha(){
var val1=0,val2=0;
val1= Number(document.getElementById("number1").value); 
val2= Number(document.getElementById("number2").value);             
result =val1-val2;
document.getElementById("result").innerText=result;
}
///عمل ضرب
function zarb(){
var val1=0,val2=0;
val1= Number(document.getElementById("number1").value); 
val2= Number(document.getElementById("number2").value);             
result =val1*val2;
document.getElementById("result").innerText=result;
}
///عمل تقسیم
 function taqsim(){
var val1=0,val2=0;
val1= Number(document.getElementById("number1").value); 
val2= Number(document.getElementById("number2").value);             
result =val1/val2;
document.getElementById("result").innerText=result;
}
 ///عمل باقیمانده
 function baqimande(){
var val1=0,val2=0;
val1= Number(document.getElementById("number1").value); 
val2= Number(document.getElementById("number2").value);             
result =val1%val2;
document.getElementById("result").innerText=result;
}

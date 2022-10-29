
flag=1;
function f1(){

if(flag==1){
document.getElementById("s").value="x";
document.getElementById("s").disabled=true;
flag=0;}
else{document.getElementById("s").value="0";}
document.getElementById("s").disabled=true;
flag=1;
}
function f2(){

if(flag==1){document.getElementById("s1").value="x";
document.getElementById("s1").disabled=true;flag=0;}
else{document.getElementById("s1").value="0";
document.getElementById("s1").disabled=true;flag=1;}
}
function f3(){

if(flag==1){document.getElementById("s2").value="x";
document.getElementById("s2").disabled=true;flag=0;}
else{document.getElementById("s2").value="0";
document.getElementById("s2").disabled=true;
flag=1;}
}
function f4(){

if(flag==1){document.getElementById("s3").value="x";
document.getElementById("s3").disabled=true;flag=0;}
else{document.getElementById("s3").value="0";
document.getElementById("s3").disabled=true;
flag=1;}
}
function f5(){

if(flag==1){document.getElementById("s4").value="x";
document.getElementById("s4").disabled=true;flag=0;}
else{document.getElementById("s4").value="0";
document.getElementById("s4").disabled=true;
flag=1;}
}
function f6(){

if(flag==1){document.getElementById("s5").value="x";
document.getElementById("s5").disabled=true;flag=0;}
else{document.getElementById("s5").value="0";
document.getElementById("s5").disabled=true;
flag=1;}
}
function f7(){

if(flag==1){document.getElementById("s6").value="x";document.getElementById("s6").disabled=true;
flag=0;}
else{document.getElementById("s6").value="0";
document.getElementById("s6").disabled=true;flag=1;}
}
function f8(){

if(flag==1){document.getElementById("s7").value="x";
document.getElementById("s7").disabled=true;flag=0;}
else{document.getElementById("s7").value="0";
document.getElementById("s7").disabled=true;flag=1;}
}
function f9(){

if(flag==1){document.getElementById("s8").value="x";
document.getElementById("s8").disabled=true;flag=0;}
else{document.getElementById("s8").value="0";
document.getElementById("s8").disabled=true;flag=1;}
}
function log(){
s=document.getElementById("s").value;
s1=document.getElementById("s1").value;
s2=document.getElementById("s2").value;
s3=document.getElementById("s3").value;
s4=document.getElementById("s4").value;
s5=document.getElementById("s5").value;
s6=document.getElementById("s6").value;
s7=document.getElementById("s7").value;
s8=document.getElementById("s8").value;
if(s=="x" && s1=="x"&& s2=="x"){
alert("Player 1 is won.");
}
else if(s=="0" && s1=="0" && s2=="0"){
alert("Player 2 is won ");
}
else if(s3=="x" && s4=="x"&& s5=="x"){
alert("Player 1 is won.");
}
else if(s3=="0" && s4=="0" && s5=="0"){
alert("Player 2 is won ");
}
else if(s6=="x" && s7=="x"&& s8=="x"){
alert("Player 1 is won.");
}
else if(s6=="0" && s7=="0" && s8=="0"){
alert("Player 2 is won ");
}
else if(s=="x" && s4=="x"&& s8=="x"){
alert("Player 1 is won.");
}
else if(s=="0" && s4=="0" && s8=="0"){
alert("Player 2 is won ");
}
else if(s2=="x" && s4=="x"&& s6=="x"){
alert("Player 1 is won.");
}
else if(s2=="0" && s4=="0" && s6=="0"){
alert("Player 2 is won ");
}
else if(s=="x" && s3=="x"&& s6=="x"){
alert("Player 1 is won.");
}
else if(s=="0" && s3=="0" && s6=="0"){
alert("Player 2 is won ");
}
if(s1=="x" && s4=="x"&& s7=="x"){
alert("Player 1 is won.");
}
else if(s1=="0" && s4=="0" && s7=="0"){
alert("Player 2 is won ");
}
if(s2=="x" && s5=="x"&& s8=="x"){
alert("Player 1 is won.");
}
else if(s2=="0" && s5=="0" && s8=="0"){
alert("Player 2 is won ");
}
}

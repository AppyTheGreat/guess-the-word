p1n=localStorage.getItem("player1name")
p2n=localStorage.getItem("player2name")
p1s=0;
p2s=0;
document.getElementById("player1_name").innerHTML=p1n+" : ";
document.getElementById("player2_name").innerHTML=p2n+" : ";
document.getElementById("player1_score").innerHTML=p1s
document.getElementById("player2_score").innerHTML=p2s
document.getElementById("player_question").innerHTML="question turn: "+p1n
document.getElementById("player_answer").innerHTML="answer turn: "+p2n
function send(){
getword=document.getElementById("word").value;
word=getword.toLowerCase();
c1=word.charAt(0)
middle=Math.floor(word.length/2)
c2=word.charAt(middle)
last=word.length-1
c3=word.charAt(last)
removec1=word.replace(c1,"_")
removec2=removec1.replace(c2,"_")
question=removec2.replace(c3,"_")
x=" <h4 id='word_display'> Q: "+question+"</h4>";
y="<br> A: <input type='text' id='ibox'>";
z="<br> <br> <button class='btn btn-info' onclick='check()'>CHECK</button>";
a=x+y+z
document.getElementById("output").innerHTML=a;
document.getElementById("word").value="";
}
questionturn="player1"
answerturn="player2"
function check(){
getans=document.getElementById("ibox").value;
ans=getans.toLowerCase();
if(ans==word){
if(answerturn=="player1"){
p1s=p1s+1;
document.getElementById("player1_score").innerHTML=p1s;
}
else{
p2s=p2s+1;
document.getElementById("player2_score").innerHTML=p2s;
}
}
if(questionturn=="player1"){
    questionturn="player2"
    document.getElementById("player_question").innerHTML="question turn : "+p2n; 
}
else{
questionturn="player1";
document.getElementById("player_question").innerHTML="question turn = "+p1n;
}
if(answerturn=="player1"){
    answerturn="player2"
    document.getElementById("player_answer").innerHTML="answer turn : "+p2n; 
}
else{
answerturn="player1";
document.getElementById("player_answer").innerHTML="answer turn = "+p1n;
}










}
function adduser(){
    p1name=document.getElementById("player1_name_input").value;
    p2name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1name",p1name);
    localStorage.setItem("player2name",p2name);
    window.location="game.html";
        
    }
function signin(){     player1_name=document.getElementById("name1").value     
player2_name=document.getElementById("name2").value     
localStorage.setItem("player_1", player1_name)     
localStorage.setItem("player_2", player2_name)     
window.location="game_page.html" }
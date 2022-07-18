player1name=localStorage.getItem("player_1")
player2name=localStorage.getItem("player_2")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1name+":"
document.getElementById("player2_name").innerHTML=player2name+":"
document.getElementById("player1score").innerHTML=player1_score
document.getElementById("player2score").innerHTML=player2_score
document.getElementById("positionq").innerHTML=player1name+"-Question Turn"
document.getElementById("positiona").innerHTML=player2name+"-Answering Turn"
function submit(){
    getword=document.getElementById("word").value 
    word=getword.toLowerCase()
    console.log(word)
    lengthofword=word.length 
    first=word.charAt(1)
    console.log(first)
    middle=word.charAt(Math.floor(lengthofword/2))
    end=word.charAt(lengthofword-1)
    console.log(middle)
    console.log(end)
    repalcewordstart=word.replace(first, "_")
    replacewordmiddle=repalcewordstart.replace(middle, "_")
    replacewordFINAL=replacewordmiddle.replace(end,"_")
    console.log(replacewordFINAL)
    displayword="<h4 id='word_display'>Scrambled Word:"+replacewordFINAL+"</h4>"
    inputbox="<input type='text' class='form-control' placeholder='Enter Guess Here'></input>"
    button="<button id='buttonsubmit' class='btn btn danger' onclick='Check()'>Submit</button>"
    row=displayword+inputbox+button
    document.getElementById("output").innerHTML=row
}
function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	answer = parseInt(number1) * parseInt(number2);
	console.log(answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}


question_turn = "player1";
answer_turn = "player2";
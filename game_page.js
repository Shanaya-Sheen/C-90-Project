player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question_turn: " + player1_name;
document.getElementById("player_answer").innerHTML="answer_turn: " + player2_name;

function send(){

get_word= document.getElementById("word").value;
word= get_word.toLowerCase();
character1=word.charAt(1);
console.log(character1);

length_divide_2=Math.floor(word.length/2);
character2=word.charAt(length_divide_2);
console.log(character2);

length_minus_2=word.length - 2;
character3=word.charAt(length_minus_2);
console.log(character3);

remove_char1=word.replace(character1 , "_");
remove_char2=remove_char1.replace(character2 , "_");
remove_char3=remove_char2.replace(character3 , "_");

console.log(remove_char3);

question_word= "<h4 id = 'word_display'>Q. " + remove_char3 + "</h4>";
input_box="<br>answer: <input type='text' id= 'input_check_box'>";
check_button="<br><br><button class='btn btn-success'onclick='check()'>AA KE DEKH BHI LEn ABB, MAHARAJ!!!!</button>";
row=question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;

document.getElementById("word").value="";
}
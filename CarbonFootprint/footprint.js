var state = 1;
var score = 0;

function changeState(){
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var third = document.getElementById("third");
    if(!first.checked && !second.checked && !third.checked){//checks if any choice i selected
        alert("please choose an option");//maybe add para after submit saying to choice one
    }
    else{
        //update global point system based on answer
        if(first.checked)
            score+=2
        if(second.checked)
            score++
        //goes to new question
        switch(state){
            case 1:
                document.getElementById("question1").style.display = "none";
                document.getElementById("question2").style.display = "block";
                state++;
                break;
            case 2:
                document.getElementById("question2").style.display = "none";
                document.getElementById("question3").style.display = "block";
                state++;
                break;
            case 3:
                document.getElementById("question3").style.display = "none";
                document.getElementById("question4").style.display = "block";
                state++;
                break;
        }
    }
    first.checked=false;
    second.checked=false;
    third.checked=false;
}
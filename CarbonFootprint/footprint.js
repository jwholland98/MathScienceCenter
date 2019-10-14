var state = 1;
var score = 0;
var plzSelectdisplay = false;

function verify(){
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var third = document.getElementById("third");
    if(!first.checked && !second.checked && !third.checked){//checks if any choice i selected
        if(!plzSelectdisplay)
            displayError();//maybe add para after submit saying to choice one
    }
    else{
        //update global point system based on answer
        if(first.checked)
            score=score+2;
        if(second.checked)
            score++;
        changeState();
        first.checked=false;
        second.checked=false;
        third.checked=false;
    }
}

function changeState(){
        plzSelectdisplay = false;
        //goes to new question
        switch(state){
            case 1:
                document.getElementById("question1").style.display = "none";
                document.getElementById("factoid1").style.display = "block";
                state++;
                break;
            case 2:
                document.getElementById("factoid1").style.display = "none";
                document.getElementById("question2").style.display = "block";
                state++;
                break;
            case 3:
                document.getElementById("question2").style.display = "none";
                document.getElementById("factoid2").style.display = "block";
                state++;
                break;
            case 4:
                document.getElementById("factoid2").style.display = "none";
                document.getElementById("question3").style.display = "block";
                state++;
                break;
            case 5:
                document.getElementById("question3").style.display = "none";
                document.getElementById("factoid3").style.display = "block";
                state++;
                break;
            case 6:
                outputScore();
                document.getElementById("factoid3").style.display = "none";
                document.getElementById("finalScore").style.display = "block";
                break;
            default:
                alert("There has been an error");
        }
}

function displayError(){//tells user to pick an option
    plzSelectdisplay = true;
    var element = document.createElement("p");
    var text = document.createTextNode("Please select an option");
    var question;
    switch(state){
        case 1:
            question = document.getElementById("question1")
            break;
        case 2:
            question = document.getElementById("question2")
            break;
        case 3:
            question = document.getElementById("question3")
            break;
    }
    question.appendChild(element);
    element.appendChild(text);
    //resize text below
    var pAttribute = document.createAttribute("id");
    pAttribute.value = "plzSelect";
    element.setAttributeNode(pAttribute);
}

function outputScore(){
    document.getElementById("finalScore1").innerHTML = "Your score:";
    document.getElementById("finalScore2").innerHTML = score + " out of 10";

}
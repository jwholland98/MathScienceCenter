var state = 1;
var score = 0;
var plzSelectDisplay = false;
var badAnswers=[[true,"You can begin recycling more"],
                [true, "You can start carpooling more"],
                [true, "You can begin riding your bike to places closer to you"]]

function verify(){
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var third = document.getElementById("third");
    if(!first.checked && !second.checked && !third.checked){//checks if any choice i selected
        if(!plzSelectDisplay)
            displayError();//maybe add para after submit saying to choice one
    }
    else{
        //update global point system based on answer
        if(first.checked)
            score=score+2;
        if(second.checked)
            score++;
        first.checked=false;
        second.checked=false;
        third.checked=false;
        changeState(second, third);
    }
}

function changeState(second, third){
        plzSelectDisplay = false;
        //goes to new question or factoid
        switch(state){
            case 1:
                document.getElementById("question1").style.display = "none";
                document.getElementById("factoid1").style.display = "block";
                state++;
                //if(second.checked)

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
        case 3:
            question = document.getElementById("question2")
            break;
        case 7:
            question = document.getElementById("question3")
            break;
        case 9:
            question = document.getElementById("question4")
            break;
        case 11:
            question = document.getElementById("question5")
            break;
        case 13:
            question = document.getElementById("question6")
            break;
        case 15:
            question = document.getElementById("question7")
            break;
        case 17:
            question = document.getElementById("question8")
            break;
        case 19:
            question = document.getElementById("question9")
            break;
        case 21:
            question = document.getElementById("question10")
            break;
        default:
            alert("An error has occurred")
    }
    question.appendChild(element);
    element.appendChild(text);
    //resizes text below
    var pAttribute = document.createAttribute("id");
    pAttribute.value = "plzSelect";
    element.setAttributeNode(pAttribute);
}

function outputScore(){
    var total="";
    document.getElementById("finalScore2").innerHTML = score + " out of 10";
    var end = document.getElementById("howWell");
    if(score == 0)
        end.innerHTML = "You have a long ways to go, but here is some ways you can reduce your footprint:";
    //add for other scores
    for(var i=0;i<badAnswers.length;i++){
        if(badAnswers[i][0]==true)
            total= total + "<br> - " + badAnswers[i][1];
    }
    document.getElementById("getBetter").innerHTML = total;
}
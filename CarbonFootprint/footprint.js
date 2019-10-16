var state = 0;
var score = 0;
var plzSelectDisplay = false;
var factoid = false;
var badAnswers=[[true,"You can begin recycling more"],
                [true, "You can start carpooling more"],
                [true, "You can begin riding your bike to places closer to you"]];
var questions=[
    {question:"How often do you recycle?", getBetter:"Recycling can help by..."},
    {question:"How often do you carpool?", getBetter:"Carpooling helps cut down on..."},
    {question:"How often do you ride a bike?", getBetter: "Riding your bike lowers..."}
];

function verify(){
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var third = document.getElementById("third");
    if(!first.checked && !second.checked && !third.checked){//checks if any choice is selected
        if(!plzSelectDisplay){
            document.getElementById("select").style.display = "block";
            plzSelectDisplay = true;
        }
    }
    else{
        //update global point system based on answer
        if(!factoid){
            if(first.checked){
                badAnswers[state][0]=false;
                score=score+2;
            }
            if(second.checked)
                score++;
        }

        changeState();
        if(plzSelectDisplay){
            first.checked=false;
            second.checked=false;
            third.checked=false;
        }
    }
}

function changeState(){
    //goes to new question or factoid
    if(!factoid){
        document.getElementById("question").innerHTML = questions[state].getBetter;
        document.getElementById("choices").style.display = "none";
        document.getElementById("select").style.display = "none";
        factoid=true;
    }
    else if(state==2)
        outputScore();
    else{
        state++;
        document.getElementById("num").innerHTML = "Question " + (state+1) + " of 10";
        document.getElementById("question").innerHTML = questions[state].question;
        document.getElementById("choices").style.display = "block";
        plzSelectDisplay = false;
        factoid=false;
    }
}

function outputScore(){
    score=score/2;
    document.getElementById("questions").style.display = "none";
    document.getElementById("finalScore").style.display = "block";
    var total="";
    document.getElementById("finalScore2").innerHTML = score + " out of 10";
    var end = document.getElementById("howWell");
    if(score == 0)
        end.innerHTML = "You have a long ways to go, but here is some ways you can reduce your footprint:";
    if(score > 0 && score <= 3)
        end.innerHTML = "You've got a good start! Here are some more ways you can reduce your footprint:";
    if(score > 3 && score <= 6)
        end.innerHTML = "You are doing great! Here is some more ways you can reduce your footprint:";
    if(score > 6 && score <= 9)
        end.innerHTML = "You are doing an amazing job. Here is some more ways you can reduce your footprint:";
    if(score == 10)
        end.innerHTML = "You are doing perfect! Maybe you can think of some mpre ways to reduce your footprint!";
    for(var i=0;i<badAnswers.length;i++){
        if(badAnswers[i][0]==true)
            total= total + "<br> - " + badAnswers[i][1];
    }
    document.getElementById("getBetter").innerHTML = total;
}
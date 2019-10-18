var state = 0;
var score = 0;
//var plzSelectDisplay = false;
var factoid = false;
var badAnswers=[
    [true,"You can begin recycling more at home."],
    [true, "You can begin recycling more at school."],
    [true, "You can start carpooling to more places."],
    [true,"You can begin riding your bike to places closer to you."],
    [true, "You can start turning off lights when you leave a room."],
    [true, "You watch less TV, use the computer less, and play fewer video games."],
    [true, "You can start turning off your TV, computer, and video games when you are not using them."],
    [true,"You can try to take less or shorter baths."],
    [true, "You can turn the water off while brushing your teeth."],
    [true,"You can begin reusing your containers for your school lunch."]
];
var questions=[
    {question:"How often do you and your family recycle at home?", getBetter:"Every year we fill enough garbage trucks in the U.S. to stretch halfway to the moon! Recycle your bottles, paper, plastic, and cans whenever you can."},
    {question:"How often do you recycle at school?",getBetter:"Every ton of paper your school recycles can save 17 trees that absorb 250 pounds of carbon dioxide from the air. Ask your teachers how you can help recycle more paper at school."},
    {question:"How often do you carpool?", getBetter:"The average car releases about one pound of carbon dioxide for every mile it's driven. Take the bus or carpool and you'll be doing your part to keep the Earth cool."},
    {question:"How often do you ride a bike?", getBetter: "If you ride a bike to closer places, you'll get more exercise, feel good, help save money on gas, and keep the air clear."},
    {question:"Do you and your family turn off the lights when you leave the room?",getBetter:"The lights in your home make up almost 15 percent of its energy use. Turning off the lights when you leave a room or when you leave the house is an easy way to save energy!"},
    {question:"How often do watch TV, use the computer, or play video games?",getBetter:"Did you know you can tell your computer to sleep when you're not using it?  And that turning off your computer at night and during the day when you're not using it will not hurt it?"},
    {question:"How often do you and your family turn off your TV, computer, and video games when you're not using them?", getBetter:"Turn off the TV and video games when you're not using them.  Every minute you leave them on when you're not using them wastes energy and costs money!"},
    {question:"How often do you take a bath?", getBetter:"Did you know that filling the bathtub uses up to 70 gallons of water, while a 5-minute shower only uses 10 to 25 gallons of water? Take short showers when you can."},
    {question:"How often do you turn off the water when you brush your teeth?", getBetter: "The average bathroom faucet uses two gallons of water every minute. Turning off the water when brushing your teeth can save up to 8 gallons of water every day."},
    {question:"If you take your lunch to school, how often do you reuse containers?",getBetter:"Did you know that every school lunch creates about 67 pounds of garbage every school year? Bring a reusable bag, spoon, fork, and food containers and you'll help keep lots of garbage out of landfills."}
];

function verify(){
    resetTimeout()
    /*var first = document.getElementById("first");
    var second = document.getElementById("second");
    var third = document.getElementById("third");*/
    /*if(!first.checked && !second.checked && !third.checked){//checks if any choice is selected
        if(!plzSelectDisplay){
            document.getElementById("select").style.display = "block";
            plzSelectDisplay = true;
        }
    }*/
    //else{
        //update global point system based on answer
        //if(!factoid){
            if(first.checked && (state!=4 || state !=5 || state !=8)){
                badAnswers[state][0]=false;
                score=score+2;
            }
            if(third.checked && (state==4|| state ==5 || state ==8)){
                badAnswers[state][0]=false;
                score=score+2;
            }
            if(second.checked)
                score++;
        //}

        changeState();
        if(!factoid){
            first.checked=false;
            second.checked=false;
            third.checked=false;
        }
    //}
}

function changeState(){
    //goes to new question or factoid
    if(!factoid){
        document.getElementById("question").innerHTML = questions[state].getBetter;
        document.getElementById("choices").style.display = "none";
        //document.getElementById("select").style.display = "none";
        document.getElementById("next").style.display = "inline-block";
        factoid=true;
    }
    else if(state==9)
        outputScore();
    else{
        state++;
        document.getElementById("num").innerHTML = "Question " + (state+1) + " of 10";
        document.getElementById("question").innerHTML = questions[state].question;
        document.getElementById("choices").style.display = "block";
        document.getElementById("next").style.display = "none";
        //plzSelectDisplay = false;
        factoid=false;
    }
}

function outputScore(){
    score=score/2;
    document.getElementById("questions").style.display = "none";
    document.getElementById("finalScore").style.display = "block";
    var total="";
    var top5=0;
    document.getElementById("finalScore2").innerHTML = score + " out of 10";
    var end = document.getElementById("howWell");
    if(score <= 0)
        end.innerHTML = "You have a long ways to go, but here is some ways you can stare reducing your footprint:";
    else if(score > 0 && score <= 3)
        end.innerHTML = "You've got a good start! Here are some more ways you can reduce your footprint:";
    else if(score > 3 && score <= 6)
        end.innerHTML = "You are doing great! Here is some more ways you can reduce your footprint:";
    else if(score > 6 && score <= 9)
        end.innerHTML = "You are doing an amazing job. Here is some more ways you can reduce your footprint:";
    else if(score > 9)
        end.innerHTML = "You are doing perfect! Maybe you can think of some mpre ways to reduce your footprint!";
    for(var i=0;i<badAnswers.length;i++){
        if(top5==5)
            break;
        if(badAnswers[i][0]==true){
            total= total + "<br> - " + badAnswers[i][1];
            top5++;
        }
    }
    document.getElementById("getBetter").innerHTML = total;
}

function refresh(){
    location.reload(true);
}

var timeout = setTimeout("location.reload(true);",30000);
function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout("location.reload(true);",30000);
}
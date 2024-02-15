var userClickedPattern = []
var gamePattern = []
const buttonColours = ["blue","red","green","yellow"]
var started = false;
var level = 0;

function nextSequence(){
    level ++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4 );
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    console.log(gamePattern)
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
}

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    },100);
}

$(document).keypress(function(){
 if(!started){
    nextSequence()
    started = true;
    }
})

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    console.log(userClickedPattern)
    checkAnswer(userClickedPattern.length-1)
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
            },1000);
            userClickedPattern = []
        }
    }else{
        var wrongSound = "wrong";
        playSound(wrongSound)
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200)
        $("#level-title").text("Game Over, Press Any Key to Restart")
        startOver()
    }
}

function startOver(){
    started=false;
    level=0;
    gamePattern=[]
    userClickedPattern=[]
}


// var buttonNumber = document.querySelectorAll(".btn").length;


// console.log(buttonNumber)


// for(var i = 0; i < buttonNumber; i++){
//     document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        
//         letter(gamePattern[]);
//     })
// }

// function letter(color){
//     switch(color){
//         case "blue":
//             var s1 = new Audio("./sounds/blue.mp3");
//             s1.play();
//             break;
//         case "red":
//             var s2 = new Audio("./sounds/red.mp3");
//             s2.play();
//             break;
//         case "green":
//             var s3 = new Audio("./sounds/green.mp3");
//             s3.play();
//             break;
//         case "yellow":
//             var s4 = new Audio("./sounds/blue.mp3");
//             s4.play();
//             break;
        
//     }
// }



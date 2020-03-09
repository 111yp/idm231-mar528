var gem1 = {name: 'gem1', value: '#F6CB5B', tint:"#FFFE8E", audio: "energy"}; //energy
var gem2 = {name: 'gem2', value: '#567E8D', tint:"#89B1C0", audio: "water"}; //water
var gem3 = {name: 'gem3', value: '#A69F8C', tint:"#D9D2BF", audio: "earth"}; //earth
var gem4 = {name: 'gem4', value: '#D8E0E3', tint:"#F2FAFD", audio: "air"}; //air
var gem5 = {name: 'gem5', value: '#D33745', tint:"#FF6A78", audio: "fire"}; //fire
var gem6 = {name: 'gem6', value: '#817689', tint:"#B4A9BC", audio: "metal"}; //metal
var gem7 = {name: 'gem7', value: '#F0DE9D', tint:"#FFFFD0", audio: "lightning"}; //lightning
var gem8 = {name: 'gem8', value: '#94252B', tint:"#C7585E", audio: "blood"}; //blood
var gem9 = {name: 'gem9', value: '#F37C62', tint:"#FFAF95", audio: "lava"}; //lava
var gem10 = {name: 'gem10', value: '#FBE4DA', tint:"#FFFEF4", audio: "spirit"}; //spirit
var gem11 = {name: 'gem11', value: '#D3EE92', tint:"#FFFFC5", audio: "healing"}; //healing
var gem12 = {name: 'gem12', value: '#BB886C', tint:"#EEBB9F", audio: "seismic"}; //seismic
var gem13 = {name: 'gem13', value: '#D5CABD', tint:"#EEBB9F", audio: "question"}; //question
var gem14 = {name: 'gem14'}; //sound
var muted = true;


let list = [gem1, gem2, gem3, gem4, gem5, gem6, gem7, gem8, gem9, gem10, gem11, gem12, gem13, gem14];

function detectGem(self) {
    for (i = 0; i < list.length; i++) {
        if (list[i].name === self) {
            var audio = document.getElementById("audio");
            audio.loop = true;
            var mute = document.getElementById("muted");
            if (list[i].name === 'gem14' && muted === false) {
                mute.setAttribute('data', "assets/svg/mute.svg");
                muted = true;
                audio.pause();
            }
            else if (list[i].name === 'gem14' && muted === true) {
                mute.setAttribute('data', "assets/svg/play.svg");
                muted = false;
                audio.play();
            }
            else {
                $('#content, #gem1-display, #gem2-display, #gem3-display, #gem4-display, #gem5-display, #gem6-display, #gem7-display, #gem8-display, #gem9-display, #gem10-display, #gem11-display, #gem12-display, #gem13-display').fadeOut(0, function() {
                    $('#' + self + '-display').fadeIn(0);
                    $('#content').fadeIn(0);
                });

                $('body').css("background-color", list[i].value);
                audio.setAttribute('src', `assets/mp3/${list[i].audio}.mp3`);
                if (muted === false) {
                    audio.play();
                }
            }
        }
    }
}
$(document).ready(function(){
    var audio = document.getElementById("audio");
    audio.loop = true;
    audio.setAttribute('src', 'assets/mp3/question.mp3');

    $("form").submit(function(e){
        e.preventDefault();
        var birthday = $('form').serializeArray()[0].value.substr(5);
        var whichMonth = Number(birthday.substr(0, birthday.length-3));
        var whichDayOfMonth = Number(birthday.substr(3));
        console.log(whichMonth);
        console.log(whichDayOfMonth);

        if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
            AstroSign = "Cap";
            detectGem('gem1');
          } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
            detectGem('gem2');
          } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
            detectGem('gem3');
          } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
            detectGem('gem4');
          } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
            detectGem('gem5');
          } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
            detectGem('gem6');
          } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
            detectGem('gem7');
          } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
            detectGem('gem8');
          } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
            detectGem('gem9');
          } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
            detectGem('gem10');
          } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
            detectGem('gem11');
          } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
            detectGem('gem12');
          }
          console.log(AstroSign);
  });
});
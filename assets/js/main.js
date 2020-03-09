var gem1 = {name: 'gem1', value: '#F6CB5B', tint:"#FFFE8E"}; //energy
var gem2 = {name: 'gem2', value: '#567E8D', tint:"#89B1C0"}; //water
var gem3 = {name: 'gem3', value: '#A69F8C', tint:"#D9D2BF"}; //earth
var gem4 = {name: 'gem4', value: '#D8E0E3', tint:"#F2FAFD"}; //air
var gem5 = {name: 'gem5', value: '#D33745', tint:"#FF6A78"}; //fire
var gem6 = {name: 'gem6', value: '#817689', tint:"#B4A9BC"}; //metal
var gem7 = {name: 'gem7', value: '#F0DE9D', tint:"#FFFFD0"}; //lightning
var gem8 = {name: 'gem8', value: '#94252B', tint:"#C7585E"}; //blood
var gem9 = {name: 'gem9', value: '#F37C62', tint:"#FFAF95"}; //lava
var gem10 = {name: 'gem10', value: '#FBE4DA', tint:"#FFFEF4"}; //spirit
var gem11 = {name: 'gem11', value: '#D3EE92', tint:"#FFFFC5"}; //healing
var gem12 = {name: 'gem12', value: '#BB886C', tint:"#EEBB9F"}; //seismic
var gem13 = {name: 'gem13', value: '#D5CABD', tint:"#EEBB9F"}; //seismic

let list = [gem1, gem2, gem3, gem4, gem5, gem6, gem7, gem8, gem9, gem10, gem11, gem12, gem13];

function detectGem(self) {
    for (i = 0; i < list.length; i++) {
        if (list[i].name === self) {
            $('body').css("background-color", list[i].value);
        }
    }
    $('#content, #gem1-display, #gem2-display, #gem3-display, #gem4-display, #gem5-display, #gem6-display, #gem7-display, #gem8-display, #gem9-display, #gem10-display, #gem11-display, #gem12-display, #gem13-display').fadeOut(0, function()
    {
        $('#' + self + '-display').fadeIn(0);
        $('#content').fadeIn(0);
    });
}

$( "#target" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
  });
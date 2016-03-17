/* music-player.js
simple text-based music player.
author: Louis Ritchie
March 16th, 2016
*/

// array of song objects
var songs = new Array();
var lengths = [2,2,3];
songs.push("hair");
songs.push("dunsel");
songs.push("reign");

console.log(typeof songs);
console.log(songs[0]);
console.log(songs[2]);

var interval, div;
div = document.getElementById("about");

//we must convert the lengths to their equivalent in ms
lengths = lengths.map(function timesBy1000(length) {
	return length = length * 1000;
});


//begins playing songs as they are ordered in the list.
function init() {
	interval = setInterval(playing, length[0]);
}

function playing() {
	div.innerHTML(songs[0]);	
}


//Handlers for all five buttons: prev, play, pause, next, and stop.
function _handlePrev() {

}

function _handlePlay() {

}

function _handlePause() {

}

function _handleNext() {

}

function _handleStop() {

}

function _handle

playSongs();

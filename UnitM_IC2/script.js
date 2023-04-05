/* 
   Murfreesboro Regional Soccer League
   Filename: script.js

   Author:   Bradley Schreer
   Date:     11/30/2021
   HTML5 and CSS3 Illustrated Unit M, Independent Challenge 2
 */

/* create variables */ 
var redButton = document.querySelector(".red-team-button");
var blueButton = document.querySelector(".blue-team-button");
var greenButton = document.querySelector(".green-team-button");
var yellowButton = document.querySelector(".yellow-team-button");
var redSchedule = document.querySelector(".red-team-schedule");
var blueSchedule = document.querySelector(".blue-team-schedule");
var greenSchedule = document.querySelector(".green-team-schedule");
var yellowSchedule = document.querySelector(".yellow-team-schedule");

/* display red team schedule only */
function showRed() {
	redSchedule.className = "red-team-schedule show";
	blueSchedule.className = "blue-team-schedule";
	greenSchedule.className = "green-team-schedule";
	yellowSchedule.className = "yellow-team-schedule";
}	
function showBlue() {
	redSchedule.className = "red-team-schedule";
	blueSchedule.className = "blue-team-schedule show";
	greenSchedule.className = "green-team-schedule";
	yellowSchedule.className = "yellow-team-schedule";
}
function showGreen() {
	redSchedule.className = "red-team-schedule";
	blueSchedule.className = "blue-team-schedule";
	greenSchedule.className = "green-team-schedule show";
	yellowSchedule.className = "yellow-team-schedule";
}
function showYellow() {
	redSchedule.className = "red-team-schedule";
	blueSchedule.className = "blue-team-schedule";
	greenSchedule.className = "green-team-schedule";
	yellowSchedule.className = "yellow-team-schedule show";
}

/* event listeners */
redButton.addEventListener("click", showRed, false);
blueButton.addEventListener("click", showBlue, false);
greenButton.addEventListener("click", showGreen, false);
yellowButton.addEventListener("click", showYellow, false);
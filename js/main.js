window.addEventListener('load', init);

//levels
const level={
	easy:7,
	medium:4,
	hard:2
};
const currentLevel=level.easy;

//global variables
let time=currentLevel;
let score=0;
let isPlaying;

//DOM Elements
const wordInput=document.querySelector('#input-word');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message= document.querySelector('#message');
const seconds= document.querySelector('#seconds');
const notify=document.querySelector('#notify');

 const easy=[
 'about',
 'amount',
 'amuse',
 'are',
 'appeal',
 'arrange',
 'array',
 'area',
 'amend',
 'apple',
 'arrive',
 'arts',
 'loom',
 'lane',
 'kill'
 ];
//Initialize Case

function init(){
	//show current level time
	seconds.innerHTML=time;
	//load word from array
	showWord(easy);
    //start matching on input word
    wordInput.addEventListener('input', startMatch);
    notice();

    
	//call countdown every seconds
	setInterval(countdown,1000);

	setInterval(checkStatus, 50);
};

//pick and show random word
function showWord(easy){
	//generate random word
	const randIndex=Math.floor(Math.random() * easy.length);
	//output random word
	currentWord.innerHTML =easy[randIndex];
}
//count down timer
function countdown(){
	//
	if (time>0) {
		time--;
	}
	else if(time===0){
		isPlaying=false;

	}
	timeDisplay.innerHTML=time;
}

function checkStatus(){
	if (!isPlaying && time===0) {
		message.innerHTML="Game Over!!!"
		score=-1;
	}
}

function startMatch(){

   if(matchWord()){
      isPlaying=true;
      time=currentLevel + 1;
      showWord(easy);
      wordInput.value='';
      score++;
   }
   if (score===-1) {
   	scoreDisplay.innerHTML=0
   }
   else{
   scoreDisplay.innerHTML=score;
}
}

//match word input against current word
function matchWord(){
	   	if (wordInput.value===currentWord.innerHTML) {
   		message.innerHTML="Correct!!"
   		return true;
   	}else{
   		message.innerHTML="";
   		return false;
   	}
}

function notice(){
  if(score >=2){
  	console.log('you are a wizard')
  }
}

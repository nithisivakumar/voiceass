const btn = document.getElementsById('btn')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){

console.log('You Can Speak Now!')
}


recognition.onresult = function(event){

	var text = event.result [0][0].transcript;
	console.log(text);
	document.getElementsById('result').InnerHTML = text;
	read(text);

}

function read text{

var speech = new SpeechSynthesisUtterance();
speech.text = text;
if (text.includes ('time'))
	speech.text = it is +new Date().getHours() +new Date().getMinutes() +"right now"

else if(text.includes('who are you'))
	speech.text ='I am a voce assistant';

else if(text.includes('who programmed you'))
	speech.text ='I am a V assistant programmed by a programmer named Nithish and I am thanking Nithish for my creation';

else if(text.includes('do you have any friends'))
	speech.text ='Yes I have a friend who is very beautifull and that is only YOU';

else if(text.includes('what is your name'))
	speech.text ='Hi may name ins Papu';

else if(text.includes('what is my name'))
	speech.text ='Do you think that You are very famous so that i can find you';

else if(text.includes('when you have created'))
	speech.text ='3days before i had started to programmed and I was finished today';










}





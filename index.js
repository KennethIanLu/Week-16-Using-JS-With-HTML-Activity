
var fullNameText;

const lastName = document.querySelector('#last-name');
const firstName = document.querySelector('#first-name');

const question1 = document.querySelector('#q1');
const question2 = document.querySelector('#q2');

const submitButton = document.querySelector('#submit-button');

// firstName.addEventListener('keyup', function(){
// 	console.log(firstName.value);
// 	fullNameText = 'Full Name: ' + firstName.value + " " + lastName.value;
// });

// lastName.addEventListener('keyup', function(){
// 	console.log(lastName.value);
// 	fullNameText = 'Full Name: ' + firstName.value + " " + lastName.value;
// });

question1.addEventListener('change', function(){
	let answer1Value = q1[q1.selectedIndex].value;
	a1.textContent =  answer1Value;
});

question2.addEventListener('change', function(){
	let answer2Value = q2[q2.selectedIndex].value;
	switch(answer2Value)
	{
	case "whale":
		a2.textContent = "They were swallowed by a whale";
		break;
	case "boy":
		a2.textContent = "He turned into a boy";
		break;
	case "prisoner":
		a2.textContent = "He became a prisoner";
		break;
	}
});

submitButton.addEventListener('click', function(){


	var correct =0;	
	if(q1[q1.selectedIndex].value == "wolf") {
	 	correct+=1;     
	}
	if(q2[q2.selectedIndex].value == "boy") {
		correct+=1;
	}

	alert("Full Name: " + firstName.value + " " + lastName.value + " Score: " + correct + " /2")

});














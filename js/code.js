function print(message) {
   alert(message);
}

var correctchoices=new Array()
correctchoices[1]='a' //question 1 solution
correctchoices[2]='a' //question 2 solution, and so on.
correctchoices[3]='c'
correctchoices[4]='c'
correctchoices[5]='c'
correctchoices[6]='c'


/////Don't edit beyond here//////////////////////////

function grade(q){
  var thequestion=eval("document.quiz"+q+".question"+q);
  var answer;
  for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked==true)
		  answer=thequestion[c].value
	}

  if (answer == correctchoices[q]) {
    alert("Correct");
  }
  else {
    alert("incorrect");
  }
}

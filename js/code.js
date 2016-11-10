var correctchoices=new Array()
correctchoices[1]='a'
correctchoices[2]='a'
correctchoices[3]='b'
correctchoices[4]='d'
correctchoices[5]='c'
correctchoices[6]='a'


function grade(q){
  var thequestion=eval("document.quiz"+q+".question"+q);
  var answer;
  for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked===true)
		  answer=thequestion[c].value
	}

  if (answer == correctchoices[q]) {
    alert("Correct");
  }
  else {
    alert("incorrect");
  }
}

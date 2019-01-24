let reply = 'nope';

let keywords = [
	 ["(.*)(i feel)(.*)", [
	     "I'm not sure I understand you fully.",
	     "Please go on.",
	     "What does that suggest to you?",
	     "Do you feel strongly about discussing such things?",
	     "That is interesting.  Please continue.",
	     "Tell me more about that.",
	     "Does talking about this bother you?",
	     "Why do you feel (2)?",
	     "Is there a certain person related to you beeing (2)?",
	     "At which situation did you start to feel that way?",
	     "(2), do you feel strongly about that?"
	  ]
	],
  ["(.*)(i want)(.*)", [
	     "Do you often think of (2)?",
	     "Does thinking of (2) bring anything else to mind?",
	     "(2). What else do you recollect?",
	     "Why do you remember (2) just now?",
	     "What in the present situation reminds you of (2)?",
	     "What is the connection between me and (2)?",
	     "What else does (2) remind you of?",
	     "What does it essentially mean to you (2)?",
	     "What is holding you back (2)?",
	     "We are proceeding into the right direction, what else can you tell me about (2)?",
	     "Can you think of possible consequences what it means for other people of you (2)?"
	  ]
  ],
  ["(.*)", [
	     "I'm listening.",
	     "What's on your mind?",
	     "What is it that you want?",
	     "I'm sure you're here for a reason. Why is that?",
	     "Yes ?",
	     "Please continue.",
	     "Mhhhm?",
	     "Go on",
	     "(nods)"
	  ]
  ]
]

let process = () => {

  	let input = document.getElementById('words').value

  	console.log(input);

  	for (let k=0; k<keywords.length; k++) {

    	let regex =  new RegExp(keywords[k][0], 'i');

		if (regex.test(input)) {
      		let match = input.match(regex);

      		// console.log(match)

      		let template = keywords[k][1][Math.floor(Math.random()*keywords[k][1].length)];

      		if(match[3] != undefined)
        		reply = template.replace('(2)', match[3]).trim()
      		else
        		reply = template.replace('(2)', 'that').trim()

      		document.getElementById("dialogue").innerText += '\n' + reply
      		break
		}
	}
}

let reply = 'nope';

let keywords = [
	 ["(.*)(i feel)(.*)", [
	     "I'm listening...",
	     "Who is responsible for that feeling?",
	     "What does that suggest about the people around you?",
	     "Does that make you question the will of god?",
	     "I can understand, no one here will judge you feeling that way.",
	     "Please elaborate.",
	     "Does this topic enrage you with fear and hatred?"
	  ]
	],
  ["(.*)(i want)(.*)", [
	     "How badly do you want (2)?",
	     "What would you be willing to sacrifice in order to attain (2)?",
	     "Everything can be arranged, ... for a price",
	     "Who is preventing you from getting (2) and how can you destroy that person?",
	     "Do you care more about (2) than your soul?",
	     "What do you want me to do about (2)?",
	     "So you desire (2)? Let's strike a bargain!"
	  ]
  ],
  ["(.*)", [
	     "I'm always watching.",
	     "What is your innermost desire?",
	     "Who is standing in your way?",
	     "Your sense of morality is holding you back, offer your allegience to me and I will make you immortal.",
	     "This world is against you.",
	     "Continue, my child...",
	     "Muahahahah..."
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

  if (reply!='') return "I'm at loss for words.";
}

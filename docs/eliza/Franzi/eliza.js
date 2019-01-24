let reply = 'nope';

let keywords = [
	 ["(.*)(i feel)(.*)", [
	     "I don't mind about how you feel.",
	     "I really don't care.",
			 "Why should I be interested about feelings?",
			 "Feelings are boring." /*,
	     "Do you feel strongly about discussing such things?",
	     "That is interesting.  Please continue.",
	     "Tell me more about that.",
	 "Does talking about this bother you?"*/	  ]
	],
  ["(.*)(i want)(.*)", [
	     "Please stop wanting (2) and do something useful.",
	     "Who cares about what you want...",
	     "(2). Enything else you want to tell me and I'm anyway not interested in?",
	     "Bla. Bla. Bla. (2). Bla. Bla. Bla.",
	     "Do you think it's really just about what you want?",
	     "I want (2), too. And now?",
			 "(2). Pffff...",
			 "Ha. Ha. Who cares? Because I don't."
	  ]
  ],
  ["(.*)", [
	     "Psst.",
	     "Be quiet, please.",
	     "Shut up.",
	     "Oh, sorry. What did you say? I didn't listen.",
	     "Okay, seriously. Stop that.",
	     "lol.",
	     "*snores*"
	  ]
  ]
]

let counter = 0;
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

				if (counter == 0)
				{
					document.getElementById("dialogue").innerText += '\n' + "Just someone: " + reply;
					counter++;
				}
				else if (counter > 0 && counter <=2)
				{
					document.getElementById("dialogue").innerText += '\n' + "Just someone, who's not your friend: " + reply;
					counter++;
				}
				else
				{
					document.getElementById("dialogue").innerText += '\n' + "Just someone, who's obviously not your friend: " + reply;
					counter++;
				}
      break
		}
	}

  if (reply!='') return "I'm at loss for words.";
}

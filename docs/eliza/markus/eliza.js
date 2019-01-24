let reply = "nope";

let keywords = [
  [
    /(.*)[iI]? (was|have been)(.*)/i,
    [
      "Cool, how was it?",
      "Nice. Have you met any friends?",
      "We've been (2) just yesterday, no?"
    ]
  ],
  [
    /(.*)(i want)(.*)/i,
    [
      "Do you often think of (2)?",
      "Does thinking of (2) bring anything else to mind?",
      "(2). What else do you recollect?",
      "Why do you remember (2) just now?",
      "What in the present situation reminds you of (2)?",
      "What is the connection between me and (2)?",
      "What else does (2) remind you of?"
    ]
  ],
  [
    /(.*)/i,
    [
      "Can you say that again?",
    ]
  ]
];

let process = ev => {
  ev.preventDefault();

  const input = document.getElementById("words");
  let text = input.value;
  input.value = "";

  console.log(text);

  for (const [pattern, responses] of keywords) {
    if (pattern.test(text)) {
      let match = text.match(pattern);

      let template = responses[Math.floor(Math.random() * responses.length)];

      if (match[3] != undefined)
        reply = template.replace("(2)", match[3]).trim();
      else reply = template.replace("(2)", "that").trim();

      const you = document.createElement("p");
      you.innerHTML = `<b style="color: #000080">You:</b> ${text}`;

      const me = document.createElement("p");
      me.innerHTML = `<b style="color: #800000">Lucy:</b> ${reply}`;

      document.getElementById("dialogue").appendChild(you);
      document.getElementById("dialogue").appendChild(me);

      break;
    }
  }

  if (reply != "") return "I'm at loss for words.";
};

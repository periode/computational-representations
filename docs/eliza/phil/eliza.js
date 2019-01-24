let reply = 'nope';

let keywords = [
    ["(.*)(i think)(.*)", [
        "I don't think (2).",
        "(2)? Never!",
        "I can't believe you think (2)."
    ]],
    ["(.*)(in my opinion)(.*)", [
        "Your opinion is so stupid.",
        "I don't care about your opinion.",
        "In my opinion (2) is definitely not true.",
        "(2)? The opposite!"
    ]],
    ["(.*)(you are)(.*)", [
        "YOU are (2)!"
    ]],
    ["(.*)fuck you(.*)", [
        "Fuck YOU!"
    ]],
    ["(.*)", [
        "That's so stupid I don't even know what to answer."
    ]]
]

let process = () => {

    let input = document.getElementById('words').value

    console.log(input);

    for (let k = 0; k < keywords.length; k++) {

        let regex = new RegExp(keywords[k][0], 'i');

        if (regex.test(input)) {
            let match = input.match(regex);

            // console.log(match)

            let template = keywords[k][1][Math.floor(Math.random() * keywords[k][1].length)];

            if (match[3] != undefined)
                reply = template.replace('(2)', match[3]).trim()
            else
                reply = template.replace('(2)', 'that').trim()

            document.getElementById("dialogue").innerText += '\n' + reply
            break
        }
    }
}

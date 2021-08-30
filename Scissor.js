// Three choices for user
const game = () => {
    let playerschoice = ''
    let options = document.getElementsByName('rock').forEach(radio => {
        if (radio.checked) {
            playerschoice = radio.value
            console.log("checked value", playerschoice)
        }
    })
    let choices = ["Rock", "Paper", "Scissors"]
    let systemschoice = choices[Math.floor(Math.random() * choices.length)];
    //case 1
    console.log("system choice", systemschoice)
    if (playerschoice === systemschoice) {
        alert("Game Tie Next attempt")
    }
    //case 2
    else if (playerschoice == 'Rock') {
        if (systemschoice == 'Paper') {
            alert("systems Won")
        }
        else {
            alert("User Won")
        }
    }
    //case 3
    else if (playerschoice == 'Scissors') {
        if (systemschoice == 'Rock') {
            alert("systems Won")
        }
        else {
            alert("User Won")
        }
        //case 4
    }
    else if (playerschoice == 'Paper') {
        if (systemschoice == 'Scissors') {
            alert("systems Won")
        }
        else {
            alert("User Won")
        }
    }
}
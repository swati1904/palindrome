// Three choices for user
const game = () => {

    let players = document.getElementsByName('rock')
        .forEach(radio => {
            if (radio.checked) {
                let players = radio.value
                console.log("checked value", players)
            }
        })
    console.log("checked value 2", players)

    let choices = ["Rock", "Paper", "Scissors"]
    let systems = choices[Math.floor(Math.random() * choices.length)];


    //case 1
    console.log("player final", players)
    if (players === systems) {
        console.log("Game Tie Next attempt")
    }
    //case 2

    else if (players == 'Rock') {
        if (systems == 'Paper') {

            console.log("systems Won")

        }
        else {
            console.log("User Won")
        }
    }
    //case 3
    else if (players == 'Scissors') {
        if (systems == 'Rock') {
            console.log("systems Won")
        }
        else {
            console.log("User Won")
        }

        //case 4
    }
    else if (players == 'Paper') {
        if (systems == 'Scissors') {
            console.log("systems Won")
        }
        else {
            console.log("User Won")
        }
    }

}


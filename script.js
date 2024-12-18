    let computerone = 0;
    let playerone = 0
    let tiegame = 0

    const play = (playerChoice) => {
        sectionForDisplay.style.display = 'block'
        const show = document.getElementById('show');
        const computer = ['Rock', 'Paper', 'Scissors']
        const computerChoice = computer[Math.floor(Math.random() * 3)]

        const outcome = {
            'Rock': { 'Rock': "Tie game!", 'Paper': 'Computer wins!', 'Scissors': 'Player One wins!' },
            'Paper': { 'Rock': "Player One wins!", 'Paper': 'Tie game!', 'Scissors': 'Computer wins!' },
            'Scissors': { 'Rock': "Computer wins!", 'Paper': 'Player One wins!', 'Scissors': "Tie game!" },
        }

        const Alert = ['alert-success', 'alert-primary', 'alert-secondary']
        const randomAlert = Alert[Math.floor(Math.random() * 3)]

        show.innerHTML = `<div 
                            class="alert  ${randomAlert} alert-dismissible fade show"
                            role="alert">
                                <strong>Player One:</strong> ${playerChoice}<br>
                                <strong>Computer:</strong> ${computerChoice}<br>
                                <strong>Winner:</strong> ${outcome[playerChoice][computerChoice]}
                                <button 
                                    type="button" 
                                    class="btn-close" 
                                    data-bs-dismiss="alert" 
                                    aria-label="Close">
                                </button>
                            </div>
                            `

        const computerp = document.getElementById("computer")
        const player = document.getElementById("player")
        const tie = document.getElementById("tie")

        switch (outcome[playerChoice][computerChoice]) {
            case 'Player One wins!':
                player.textContent = ++playerone;

                break;

            case 'Computer wins!':
                computerp.textContent = ++computerone;
                break;

            case 'Tie game!':
                tie.textContent = ++tiegame;
                break;

            default:
                console.warn('Unexpected outcome');
        }
    }

const refresh = () => {
    location.reload()
}



/* One method
function play(){
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden')
} */
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    if (playerPressed === 'Escape') {
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1
        setTextElementValueById('current-score', newScore)

        removeBgById(expectedAlphabet)
        continueGame()

    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1
        setTextElementValueById('current-life', newLife)
        if (newLife === 0) {
            gameOver()
        }
    }

}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame() {
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;
    setBgByID(alphabet)


}

function play() {
    hideElementById('home-screen')
    hideElementById('score')
    showElementById('play-ground')

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame()
}

function gameOver() {
    hideElementById('play-ground')
    showElementById('score')
    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('final-score', lastScore)

    const currentAlphabet = getElementTextById('current-alphabet')
    removeBgById(currentAlphabet)
}


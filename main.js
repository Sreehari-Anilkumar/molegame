const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')
let result = 0
let hitPosition
let currentTime = 60
let timerId = null

const sound =new Audio("/smash.mp3");

function randomSquare() {
    squares.forEach(squares => {
        squares.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(squares =>{
    squares.addEventListener('mousedown', () =>{
        if(squares.id==hitPosition) {
        sound.play()
        result++
        Source.textContent = result
        hitPosition=null    
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare,500)
}
moveMole()

function countDown() {
    currentTime--
    timeleft.textContent= currentTime

    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER!your final score is'+result)
    
    }
}
let countDownTimerId = setInterval(countDown, 1000)

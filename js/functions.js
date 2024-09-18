'use strict'

let rand_num1 = 0
let rand_num2 = 0
let correctAnswers = 0
let incorrectAnswers = 0

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1, 10)
    rand_num2 = getRandomIntNumberInRange(1, 10)
    document.querySelector('#num1').textContent = rand_num1
    document.querySelector('#num2').textContent = rand_num2
};

const updateResults = () => {
    document.querySelector('#correctCount').textContent = correctAnswers
    document.querySelector('#incorrectCount').textContent = incorrectAnswers
};

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
    updateResults()
});

document.querySelector('#calculate').addEventListener('click', () => {
    const answer = document.querySelector('#answerInput').value;

    if (answer === '' || isNaN(answer)) {
        alert("Please enter a valid number")
    } else {
        const numericAnswer = Number(answer)
        const correctAnswer = rand_num1 + rand_num2;

        if (numericAnswer === correctAnswer) {
            correctAnswers++
        } else {
            incorrectAnswers++
        }

        updateResults()
        randomizeNumbers()
        document.querySelector('#answerInput').value = ''
    }
});
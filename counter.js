let shake = document.getElementById("number")
let number = shake.innerHTML

const addOne = () => {
    number++
    document.getElementById("number").innerHTML = number
}

const subtractOne = () => {
    number--
    document.getElementById("number").innerHTML = number
}

const clearAll = () => {
    //If the number is not 0, we add the shake class and CSS animation.
    if (number != 0) {
        shake.classList.add("shake")
    }

    //Reset the number back to 0
    number = 0
    document.getElementById("number").innerHTML = number
}

// After the shake animation completes, it removes the shake class
shake.addEventListener("animationend", () => {
    shake.classList.remove("shake")
})

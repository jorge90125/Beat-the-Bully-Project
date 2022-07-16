//Character Class
class Character {
    constructor(name) {
    this.name = name
    this.str = 0
    this.int = 0
    this.dex = 0
    }
}

//Consts
const introClass = document.querySelectorAll(`.intro`)
const skillsClass = document.querySelectorAll(`.skills`)
const battleClass = document.querySelectorAll(`.battle`)

const nameSelect = document.querySelector(`#nameInput`)
const submitName = document.querySelector(`#nameSubmit`)

const strStat = document.querySelector(`#strStat`)
const strDwn = document.querySelector(`#strDwn`)
const strUp = document.querySelector(`#strUp`)

const intStat = document.querySelector(`#intStat`)
const intDwn = document.querySelector(`#intDwn`)
const intUp = document.querySelector(`#intUp`)

const dexStat = document.querySelector(`#dexStat`)
const dexDwn = document.querySelector(`#dexDwn`)
const dexUp = document.querySelector(`#dexUp`)

const stats = document.querySelector(`.stats`)

//create character
const character = new Character(``)
strStat.innerHTML = character.str
intStat.innerHTML = character.int
dexStat.innerHTML = character.dex

//Submit name and go to skills
const intro = ()  =>  {
    if(nameSelect.value === ``) {
        alert(`Please choose a name!`)
    } else {
    character.name = nameSelect.value
    }
    console.log(character)
    introClass.forEach((element) => {
        element.style.display = `none`
    })
    skillsClass.forEach((element) => {
        element.style.display = `block`
    })
}

//change strength stat
const strengthMinus = () => {
    if (character.str === 0) {
        return
    } else {
        character.str --
        strStat.innerHTML = character.str
    }
}

const strengthPlus = () => {
    if (character.str === 10) {
        return
    } else {
        character.str ++
        strStat.innerHTML = character.str
    }
}

//change intelligence stat
const intMinus = () => {
    if (character.int === 0) {
        return
    } else {
        character.int --
        intStat.innerHTML = character.int
    }
}

const intPlus = () => {
    if (character.int === 10) {
        return
    } else {
        character.int ++
        intStat.innerHTML = character.int
    }
}

//buttons
submitName.addEventListener(`click`, intro)
strDwn.addEventListener(`click`, strengthMinus)
strUp.addEventListener(`click`, strengthPlus)
intDwn.addEventListener(`click`, intMinus)
intUp.addEventListener(`click`, intPlus)
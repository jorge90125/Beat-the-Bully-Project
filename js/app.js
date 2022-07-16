//Character Class
class Character {
    constructor() {
    this.name = ``
    this.str = 0
    this.int = 0
    this.dex = 0
    this.skllft = 10
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

const skillsLeft = document.querySelector(`#skillLeft`)
const skillsBackBtn = document.querySelector(`#skillsBackBtn`)

const stats = document.querySelectorAll(`.stats`)

//INTRO
//create character
const character = new Character()
strStat.innerHTML = character.str
intStat.innerHTML = character.int
dexStat.innerHTML = character.dex
skillsLeft.innerHTML = character.skllft

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

//SKILLS
//change strength stat
const strengthMinus = () => {
    if (character.str === 0) {
        return
    } else {
        character.str --
        strStat.innerHTML = character.str
        character.skllft ++
        skillsLeft.innerHTML = character.skllft
    }
}

const strengthPlus = () => {
    if (character.str === 10 || character.skllft === 0) {
        return
    } else {
        character.str ++
        strStat.innerHTML = character.str
        character.skllft --
        skillsLeft.innerHTML = character.skllft
    }
}

//change intelligence stat
const intMinus = () => {
    if (character.int === 0) {
        return
    } else {
        character.int --
        intStat.innerHTML = character.int
        character.skllft ++
        skillsLeft.innerHTML = character.skllft
    }
}

const intPlus = () => {
    if (character.int === 10 || character.skllft === 0) {
        return
    } else {
        character.int ++
        intStat.innerHTML = character.int
        character.skllft --
        skillsLeft.innerHTML = character.skllft
    }
}

//change dexterity stat
const dexMinus = () => {
    if (character.dex === 0) {
        return
    } else {
        character.dex --
        dexStat.innerHTML = character.dex
        character.skllft ++
        skillsLeft.innerHTML = character.skllft
    }
}

const dexPlus = () => {
    if (character.dex === 10 || character.skllft === 0) {
        return
    } else {
        character.dex ++
        dexStat.innerHTML = character.dex
        character.skllft --
        skillsLeft.innerHTML = character.skllft
    }
}

//back button
const backToIntro = () => {
    skillsClass.forEach((element) => {
        element.style.display = `none`
    })
    introClass.forEach((element) => {
        element.style.display = `block`
    })
}

//buttons
submitName.addEventListener(`click`, intro)
strDwn.addEventListener(`click`, strengthMinus)
strUp.addEventListener(`click`, strengthPlus)
intDwn.addEventListener(`click`, intMinus)
intUp.addEventListener(`click`, intPlus)
dexDwn.addEventListener(`click`, dexMinus)
dexUp.addEventListener(`click`, dexPlus)
skillsBackBtn.addEventListener(`click`, backToIntro)
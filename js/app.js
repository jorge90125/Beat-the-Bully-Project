//Character Class
class Character {
    constructor(name) {
    this.name = name
    this.skills = []
    }
}

//Consts
const introClass = document.querySelectorAll(`.intro`)
const skillsClass = document.querySelectorAll(`.skills`)
const battleClass = document.querySelectorAll(`.battle`)

const nameSelect = document.querySelector(`#nameInput`)
const submitName = document.querySelector(`#nameSubmit`)

const strStat = document.querySelector(`#strStat`)
const strDown = document.querySelector(`#strDwn`)
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

//Submit name and go to skills
const intro = ()  =>  {
    if(nameSelect.value === ``) {
        alert(`Please choose a name!`)
    } else {
    character.name = nameSelect.value
    console.log(character)
    }
    // getElementsByClassName(`intro`).style.display = `none`
    // skillsClass.style.display = `block`
}

submitName.addEventListener(`click`, intro)
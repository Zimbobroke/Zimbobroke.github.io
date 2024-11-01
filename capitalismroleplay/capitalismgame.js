let money = 0 //Set to 0 before saving
let riceStockpile = 0
let millionsDead = 0
let africaChildren = 300
let chinaChildren = 10
let indiaScammer = 0
let eventHappening = false
const Populations = {France: 66.5, England: 55.98, Africa: 1480.77, China: 1409}

let randomNumb = 0

let popFrance = Populations.France
let popEngland = Populations.England
let popAfrica = Populations.Africa
let popChina = Populations.China
/*
var audioPopUp = new Audio("media/hoi4-popup.mp3") for later update
var audioDecisionMade = new Audio("media/hoi4-decision.mp3")

const eventChance = {
    ciaIntervention: 2,
    childRevolt: 0.5
}

function getRandomInt (max) {
    let x = Math.random() * max
    return x - x%1
}
function eventBoxAppear(isEventHappening) {
    if (isEventHappening == true) {
        //appear
    }
    else {
        //disappear
    }
}
function eventText(eventId) {
    switch(eventId) {
        case Events.ciaIntervention:

    }
}
*/
function addDeaths(DeadNumb) {
    millionsDead += DeadNumb
    document.getElementById("millionsDead").textContent = `Millions Dead: ${millionsDead}`
}
function Switch(x, y) {
    var temp = x
    x = y
    y = temp
}
function UpdatePopulation(NewPopulation, populationHtmlId, Country) {
    document.getElementById(populationHtmlId).textContent = `${Country} Population in millions: ${NewPopulation}`
}
function UpdateAllPops() {
    UpdatePopulation(popFrance, 'francePopulation', 'France')
    UpdatePopulation(popEngland, 'englandPopulation', 'England')
    UpdatePopulation(popAfrica, 'africaPopulation', 'Africa')
    UpdatePopulation(popChina, 'chinaPopulation', 'China')
}
function Update(Numb, htmlId, Type) {
    document.getElementById(htmlId).textContent = `${Type}: ${Numb}`
}
function UpdateAllText() {
    Update(money, "money", 'Dollars')
    Update(riceStockpile, 'riceStockpile', 'Rice Grains')
    Update(africaChildren, 'africaLaborer', 'African Children')
    Update(chinaChildren, 'chinaLabor', 'Chinese Children')
    Update(indiaScammer, 'indiaScammer', 'Indian Scammers')
}
function Birth(Number, Increment, Limit) {
    if (Number < 0) {
        Number = 0.1
    }
    if (Number < Limit) {
        Number += Increment
    }
    if (Number > Limit) {
        Number = Limit
    }
    return Number
}
function killOneMan() {
    addDeaths(1 / 1000000)
}
function ImmigrationBirth(Population, Source, Increment, Limit) {
    if (Population < Limit && Source > Increment) {
        Population += Increment
        Source -= Increment
    }
    if (Population > Limit) {
        Population = Limit
    }
}
window.addEventListener('beoforeunload', ()=>{
    event.preventDefault()
    event.returnValue = ""
})

var audioBabyCrying = new Audio("media/baby-crying.mp4")
var audioRiverFLowing = new Audio("media/river-flowing.mp4")
var audioKaChing = new Audio("media/cha-ching.mp4")
var audioRuleBritannia = new Audio("media/rule-britannia.mp4")
var audioChansonDeLoignon = new Audio("media/chanson-de-loignon.mp4")
var audioNuclearExplosion = new Audio("media/nuclear-explosion.mp4")
var audioBabyCrying = new Audio("media/baby-crying.mp4")
var audioCrowdScreaming = new Audio("media/crowd-screaming.mp4")
var audioFreeRobux = new Audio("media/free-robux.mp3")
var audioVineBoom = new Audio("media/vine-boom.mp3")

const buttonSellRice = document.getElementById("chinaMoney")
const buttonIndiaCallCenter = document.getElementById("indiaCallCenterBuy")
const buttonCCPRiceFarm = document.getElementById("chinaBuy")
const buttonAfricaWater = document.getElementById("africaRefugee")
const buttonAfricaChildBuy = document.getElementById("africaBuy")
const buttonFrance = document.getElementById("France")
const buttonEngland = document.getElementById("England")
const buttonMandateHeaven = document.getElementById("chinaImmigration")
const buttonKillOnePerson = document.getElementById("killOnePerson")

const prices = {africaBuyPrice: 10, africaRefugeePrice: 200, chinaRefugeePrice: 500000, chinaFarmPrice: 2000, indiaCallCenterPrice: 10000, franceNukePrice: 60000000, englandNukePrice: 50000000} //if you change something here change the HTML text
const labourers = {africaBuyLaborers: 1000, africaRefugeeLabourers: 50000, chinaFarmLabourers: 6000, chinaRefugeeLabourers: 3000000, indiaCallCenterLabourers: 100} //read above
 
buttonFrance.onclick = function() {
    if (money >= prices.franceNukePrice) {
        money -= prices.franceNukePrice
        audioNuclearExplosion.play()
        addDeaths(popFrance)
        popFrance -= popFrance
    }
}
buttonFrance.onmouseenter = function() {
    audioChansonDeLoignon.volume = 0.3
    audioChansonDeLoignon.play()
}
buttonFrance.onmouseleave = function() {
    audioChansonDeLoignon.pause()
    //audioChansonDeLoignon.currentTime = 0
}
buttonEngland.onclick = function() {
    if (money >= prices.englandNukePrice) {
        money -= prices.englandNukePrice
        audioNuclearExplosion.play()
        addDeaths(popEngland)
        popEngland -= popEngland
    }
}
buttonEngland.onmouseenter = function() {
    audioRuleBritannia.volume = 0.3
    audioRuleBritannia.play()
}
buttonEngland.onmouseout = function() {
    audioRuleBritannia.pause()
    //audioRuleBritannia.currentTime = 0
}
buttonMandateHeaven.onclick = function() {
    if (money >= prices.chinaRefugeePrice && popChina > 3) {
        audioCrowdScreaming.play()
        money -= prices.chinaRefugeePrice
        chinaChildren += labourers.chinaRefugeeLabourers
        addDeaths(popChina * 0.2)
        popChina = popChina * 0.8 - 3
    }
}
buttonAfricaChildBuy.onclick = function() {
    if (money >= prices.africaBuyPrice && popAfrica > 0.001) {
        audioBabyCrying.play()
        money -= prices.africaBuyPrice
        africaChildren += labourers.africaBuyLaborers
        audioBabyCrying.play()
        popAfrica -= 0.001
    }
}
buttonAfricaWater.onclick = function() {
    if (money >= prices.africaRefugeePrice) {
        audioRiverFLowing.play()
        money -= prices.africaRefugeePrice
        africaChildren += labourers.africaRefugeeLabourers
        addDeaths(popAfrica * 0.02)
        popAfrica *= 0.98
    }
}
buttonCCPRiceFarm.onclick = function() {
    if (money >= prices.chinaFarmPrice) {
        audioBabyCrying.play()
        money -= prices.chinaFarmPrice
        chinaChildren += labourers.chinaFarmLabourers
    }
}
buttonIndiaCallCenter.onclick = function() {
    if (money >= prices.indiaCallCenterPrice) {
        audioFreeRobux.play()
        money -= prices.indiaCallCenterPrice
        indiaScammer += labourers.indiaCallCenterLabourers
    }
}
buttonSellRice.onclick = function() {
    if (riceStockpile >= 100 && popAfrica > 0.05) {
        audioKaChing.play()
        money += (riceStockpile - (riceStockpile%100)) / 100
        riceStockpile = riceStockpile%100
    }
}
buttonKillOnePerson.onclick = function() {
    if (money >= 0.7) {
        audioVineBoom.play()
        money -= 0.7
        addDeaths(1 / 1000000)
    }
}

let i = 1

function doAll() {
    popAfrica = Birth(popAfrica, popAfrica / 100 + 0.5, Populations.Africa)
    popChina = Birth(popChina, popChina / 100 + 0.5, Populations.China)
    ImmigrationBirth(popEngland, popChina, popChina / 5, Populations.England)
    ImmigrationBirth(popFrance, popAfrica, popAfrica / 5, Populations.France)
    money += indiaScammer
    riceStockpile += (africaChildren * 0.05) + (chinaChildren * 0.5)
    UpdateAllText()
    UpdateAllPops()
    if (i%1000 == 0) {
        killOneMan()
    }
}
setInterval(doAll, 780)
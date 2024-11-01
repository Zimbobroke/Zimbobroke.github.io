let money = 100000 //Set to 0 before saving
let riceStockpile = 0
let millionsDead = 0
let africaChildren = 300
let chinaChildren = 10
let indiaScammer = 0
let eventHappening = false
const Populations = {France: 67.97, England: 55.98, Africa: 1480.77, China: 1409}
const prices = {africaBuyPrice: 80, africaRefugeePrice: 200, chinaRefugeePrice: 100000, chinaFarmPrice: 6000, indiaCallCenterPrice: 10000, franceNuke: 60000000, englandNuke: 50000000} //if you change something here change the HTML text
const labourers = {africaBuyLaborers: 1000, africaRefugeeLabourers: 5000, chinaFarmLabourers: 2000, chinaRefugeeLabourers: 3000000, indiaCallCenterLabourers: 50} //same here
 
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

buttonFrance.onclick = function() {
    if (money >= 600) {
        money -= 600
        audioNuclearExplosion.play()
        popFrance -= popFrance
        addDeaths(popFrance - (popFrance / 20))
    }
}
buttonFrance.onmouseenter = function() {
    audioChansonDeLoignon.volume = 0.3
    audioChansonDeLoignon.play()
}
buttonFrance.onmouseleave = function() {
    audioChansonDeLoignon.pause()
    audioChansonDeLoignon.currentTime = 0
}
buttonEngland.onclick = function() {
    if (money >= 500) {
        money -= 500
        audioNuclearExplosion.play()
        popEngland -= popEngland
        addDeaths(popEngland - (popEngland / 20))
    }
}
buttonEngland.onmouseenter = function() {
    audioRuleBritannia.volume = 0.3
    audioRuleBritannia.play()
}
buttonEngland.onmouseout = function() {
    audioRuleBritannia.pause()
    audioRuleBritannia.currentTime = 0
}
buttonMandateHeaven.onclick = function() {
    if (money >= prices.chinaRefugeePrice && popChina > 3) {
        audioCrowdScreaming.play()
        money -= prices.chinaRefugeePrice
        chinaChildren += labourers.chinaRefugeeLabourers
        addDeaths(popChina * 0.6)
        popChina = popChina * 0.4 - 3
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
        addDeaths(popAfrica * 0.3)
        popAfrica *= 0.7
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
    if (money >= 10) {
        audioVineBoom.play()
        money -= 10
        addDeaths(1 / 1000000)
    }
}

let i = 1

function doAll() {
    Birth(popAfrica, popAfrica / 10 + 0.5, Populations.Africa)
    Birth(popChina, popChina / 10 + 0.5, Populations.China)
    ImmigrationBirth(popEngland, popChina, popChina / 5, Populations.England)
    ImmigrationBirth(popFrance, popAfrica, popAfrica / 5, Populations.France)
    money = money + indiaScammer * 10
    riceStockpile += (africaChildren * 0.05) + (chinaChildren * 0.7)
    UpdateAllText()
    UpdateAllPops()
    if (i%1000 == 0) {
        killOneMan()
    }
}
setInterval(doAll, 780)
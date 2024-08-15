let money = 0;
let riceStockpile = 0;
let millionsDead = 0;
let Labourers = 300;
const Populations = {France: 67.97, England: 55.98, Africa: 1480.77, China: 1409};
const P = {africaImmigrationPrice: 15, africaRefugeePrice: 90, chinaRefugeePrice: 5000};
let x = 0;
let y = 0;

let FrancePop = Populations.France;
let EnglandPop = Populations.England;
let AfricaPop = Populations.Africa;
let ChinaPop = Populations.China;

var CrowdScreaming = new Audio("media/crowd-screaming.mp4");
var BabyCrying = new Audio("media/baby-crying.mp4");
var RiverFlowing = new Audio("media/river-flowing.mp4");
var KaChing = new Audio("media/cha-ching.mp4");
var RuleBritannia = new Audio("media/rule-britannia.mp4");
var ChansonDeLoignon = new Audio("media/chanson-de-loignon.mp4");
var NuclearExplosion = new Audio("media/nuclear-explosion.mp4");

function Wait() {
    x += y;
}

function AddDeaths(DeadNumb) {
    millionsDead += DeadNumb;
    document.getElementById("millionsDead").textContent = `Millions Dead: ${millionsDead}`;
}
function UpdatePopulation(NewPopulation, PopulationHtmlId, Country) {
    document.getElementById(PopulationHtmlId).textContent = `${Country} Population in millions: ${NewPopulation}`
}
function UpdateAllPops() {
    UpdatePopulation(FrancePop, 'francePopulation', 'France');
    UpdatePopulation(EnglandPop, 'englandPopulation', 'England');
    UpdatePopulation(AfricaPop, 'africaPopulation', 'Africa');
    UpdatePopulation(ChinaPop, 'chinaPopulation', 'China');
}
UpdateAllPops()

function Update(Numb, Id, Type, Description) {
    document.getElementById(Id).textContent = `${Type}: ${Numb} ${Description}`
}

function Birth(Number, Increment, Limit) {
    if (Number < 0) {
        Number = 0.1
    }
    if (Number < Limit) {
        Number += Increment;
    }
    if (Number > Limit) {
        Number = Limit;
    }
    return Number;
}
function DoAll() {
    UpdateAllPops();
    AfricaPop = Birth(AfricaPop, AfricaPop / 10 + 0.5, Populations.Africa);
    ChinaPop = Birth(ChinaPop, ChinaPop / 10 + 0.5, Populations.China);
    EnglandPop = Birth(EnglandPop, 5, Populations.England);
    FrancePop = Birth(FrancePop, 3, Populations.France);
    riceStockpile += (Labourers * 0.1);
    Update(riceStockpile, 'riceStockpile', 'Rice Grains', 'Grains');
}
setInterval(DoAll, 800);
//Below are all the interactive button functions
document.getElementById("France").onclick = function() {
    if (money >= 600) {
        money -= 600;
        NuclearExplosion.play();
        FrancePop -= FrancePop;
        AddDeaths(FrancePop);
    }
}
document.getElementById("France").onmouseenter = function() {
    ChansonDeLoignon.volume = 0.3;
    ChansonDeLoignon.play();
}
document.getElementById("France").onmouseleave = function() {
    ChansonDeLoignon.pause();
    ChansonDeLoignon.currentTime = 0;
}
document.getElementById("England").onclick = function() {
    if (money >= 500) {
        money -= 500;
        NuclearExplosion.play();
        EnglandPop -= EnglandPop;
        AddDeaths(EnglandPop);
    }
}
document.getElementById("England").onmouseenter = function() {
    RuleBritannia.volume = 0.3
    RuleBritannia.play();
}
document.getElementById("England").onmouseout = function() {
    RuleBritannia.pause();
    RuleBritannia.currentTime = 0;
}
document.getElementById("ChinaMoney").onclick = function() {
    if (riceStockpile >= 100 && AfricaPop > 0.05) {
        KaChing.play();
        money += (riceStockpile - (riceStockpile%100)) / 100;
        riceStockpile = riceStockpile%100;
        Update(riceStockpile, 'riceStockpile', 'Rice Grains', 'Grains');
        Update(money, "money", 'Money', 'Dollars');
    }
}
document.getElementById("AfricaImmigration").onclick = function() {
    if (money >= P.africaImmigrationPrice && AfricaPop > 0.001) {
        BabyCrying.play();
        money -= P.africaImmigrationPrice;
        Labourers += 1000;
        BabyCrying.play();
        Update(money, "money", "Money", "Dollars", "");
        Update(Labourers, "laborer", "Laborers", "");
        AfricaPop -= 0.001;
    }
}
document.getElementById("AfricaRefugee").onclick = function() {
    if (money >= P.africaRefugeePrice) {
        RiverFlowing.play();
        money -= P.africaRefugeePrice;
        Labourers += 50000;
        Update(money, "money", "Money", "Dollars", "");
        Update(Labourers, "laborer", "Laborers", "");
        AddDeaths(AfricaPop * 0.3);
        AfricaPop *= 0.7;
    }
}
document.getElementById("ChinaImmigration").onclick = function() {
    if (money >= P.chinaRefugeePrice && ChinaPop > 3) {
        CrowdScreaming.play();
        money -= P.chinaRefugeePrice;
        Labourers += 3000000;
        Update(money, "money", "Money", "Dollars", "")
        Update(Labourers, "laborer", "Laborers", "")
        AddDeaths((ChinaPop * 0.4) - 3)
        ChinaPop = (Chinapop * 0.4) - 3;
    }
}
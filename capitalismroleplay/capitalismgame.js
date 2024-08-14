let money = 0;
let riceStockpile = 0;
let millionsDead = 0;
let Labourers = 10;
const Populations = {France: 67.97, England: 55.98, Africa: 1216, China: 1412};
let FrancePop = Populations.France;
let EnglandPop = Populations.England;
let AfricaPop = Populations.Africa;
let ChinaPop = Populations.China;
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

function Update(Numb, Id, Type, Type2) {
    document.getElementById(Id).textContent = `${Type}: ${Numb} ${Type2}`
}

function Birth(Number, Increment, Limit) {
    if (Number < 0) {
        Number = 0.1
    }
    if (Number < Limit) {
        Number += Increment
    }
}
function DoAll() {
    UpdateAllPops;
    Birth(AfricaPop, AfricaPop / 10, Populations.Africa);
    Birth(ChinaPop, ChinaPop / 10, Populations.China);
    Birth(EnglandPop, 1.5, Populations.England);
    Birth(FrancePop, 1, Populations.France);
    riceStockpile += Labourers;
    Update(riceStockpile, 'riceStockpile', 'Rice Grains', 'Grains');
    if (i > 300) {
        clearInterval(Inverval)
    }
}
setInterval(DoAll, 800);
//Below are all the interactive button functions
document.getElementById("France").onclick = function() {
    if (money >= 600) {
        money -= 600;
        FrancePop -= FrancePop;
        AddDeaths(FrancePop);
    }
}
document.getElementById("England").onclick = function() {
    if (money >= 500) {
        money -= 500;
        EnglandPop -= EnglandPop;
        AddDeaths(EnglandPop);
    }
}
document.getElementById("ChinaMoney").onclick = function() {
    if (riceStockpile >= 10) {
        money += (riceStockpile - (riceStockpile%100)) / 100;
        riceStockpile = riceStockpile%100;
        Update(riceStockpile, 'riceStockpile', 'Rice Grains', 'Grains');
        Update(money, "money", 'Money', 'Dollars');
    }
}
document.getElementById("AfricaImmigration").onclick = function() {
    if (money >= 10) {
        money -= 10;
        Labourers += 1000;
        Update(money, "money", "Money", "Dollars", "");
        Update(Labourers, "laborer", "Laborers", "");
        AfricaPop -= 0.001;
    }
}
document.getElementById("AfricaRefugee").onclick = function() {
    if (money >= 50) {
        money -=50;
        Labourers += 5000;
        Update(money, "money", "Money", "Dollars", "");
        Update(Labourers, "laborer", "Laborers", "");
        AddDeaths(AfricaPop*0.3);
        AfricaPop *= 0.7;
    }
}
document.getElementById("ChinaImmigration").onclick = function() {
    if (money >= 200) {
        money -= 200;
        Labourers += 30000;
        Update(money, "money", "Money", "Dollars", "")
        Update(Labourers, "laborer", "Laborers", "")
        AddDeaths(ChinaPop/2)
        ChinaPop /= 2;
    }
}
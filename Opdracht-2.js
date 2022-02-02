
// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent.
let totalSold = 0;
for ( const tv of inventory ) totalSold += tv.sold;

console.log( "2a :")
console.log( totalSold )


// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
const txt_totalSold = document.getElementById("total-sold");
txt_totalSold.textContent = totalSold.toString() + " tvs are sold in total";


//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent.
let boughtTvs = 0;
for ( const tv of inventory ) boughtTvs += tv.originalStock;


// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const txt_boughtTvs = document.getElementById("bought-tvs");
txt_boughtTvs.textContent = boughtTvs.toString() + " tvs are bought in total";


// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
let inStock = 0;
for ( const tv of inventory ) inStock += tv.originalStock - tv.sold;
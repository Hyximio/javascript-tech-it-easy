
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen.
const types = inventory.map( tv => tv.type );
console.log( `1a : ${types}` );

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
const soldOutTvs = inventory.filter( tv => tv.originalStock == tv.sold );
console.log( "1b :")
console.log( soldOutTvs );

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
const ambiTvs = inventory.filter( tv => tv.options.ambiLight );
console.log( "1c :")
console.log( ambiTvs );

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
const sortedByPrice = inventory.sort( (a, b) => a.price - b.price );
console.log( "1d :")
console.log( sortedByPrice );


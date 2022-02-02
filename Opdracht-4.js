
// Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv
function formatName( _tv ){
    return `${_tv.brand} ${_tv.type} - ${_tv.name}`;
}

console.log( formatName( inventory[0] ) );


// Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt.
function formatPrice( _price ){
    return `€${_price.toString()},-`
}

console.log( formatPrice( inventory[0].price ));


// Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv
function inchToCm( _inch ){
    return (_inch * 2.54).toFixed()
}

function formatSize( _inch ){
    const cm = inchToCm( _inch );
    return `${_inch} inch (${cm} cm)`
}

function formatSizes( _sizes ){
    let sizes = formatSize( _sizes[0]);
    for( let i = 1; i < _sizes.length; i++ )
        sizes += " | " + formatSize( _sizes[i] )

    return sizes
}

console.log( formatSizes( inventory[3].availableSizes ));


// Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
function createTvElement( _tv, _parentId, _class ){
    const parent = document.getElementById( _parentId );

    const tvName = formatName( _tv );
    const tvPrice = formatPrice( _tv.price );
    const tvSizes = formatSizes( _tv.availableSizes );

    const tvElement = document.createElement('section');
    tvElement.textContent = `${tvName}\n${tvPrice}\n${tvSizes}`
    tvElement.setAttribute( 'class', _class);

    parent.appendChild( tvElement );
}

createTvElement( inventory[0], "tv-content", "item4d" );


// Opdracht 4e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld
function listAllTvs( _tvs, _parentId ){
    for ( const tv of _tvs )
        createTvElement( tv, "tv-content-all", "sorted-item" )
}

listAllTvs( inventory, "tv-content-all" );



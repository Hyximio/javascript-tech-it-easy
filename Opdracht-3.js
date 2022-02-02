
// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
const brands = inventory.map( tv => tv.brand );
const list = document.getElementById('list-brands');

for ( const brand of brands ) {
    const brandElement = document.createElement('li');
    brandElement.textContent = brand;
    list.appendChild( brandElement );
}


// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!
function listTvBrands( _inventory, _parentId ){
    const brands = _inventory.map( tv => tv.brand );
    const list = document.getElementById( _parentId );

    for ( const brand of brands ) {
        const brandElement = document.createElement('li');
        brandElement.textContent = brand;
        list.appendChild( brandElement );
    }
}

listTvBrands( inventory, 'list-brands-fn');
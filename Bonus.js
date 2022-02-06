
// Removes all children and re-add the inventory
function refreshList( _parentId ){
    const children = document.getElementById( _parentId ).children;
    for ( let i = children.length-1; i >= 0; i-- )
        children[i].remove();

    listAllTvs( inventory, _parentId );
}

// sort by sold
const bt_sold = document.getElementById('sort-sold');
bt_sold.addEventListener('click', () => {
    inventory.sort( ( a, b) => a.sold - b.sold);
    refreshList("tv-content-all");
} );

// sort by price
const bt_price = document.getElementById('sort-price');
bt_price.addEventListener('click', () => {
    inventory.sort( ( a, b) => a.price - b.price);
    refreshList("tv-content-all");
} );

// sort by ambiLight
const bt_ambiLight = document.getElementById('sort-ambilight');
bt_ambiLight.addEventListener( 'click', () => {

    inventory.sort(function(a, b) {
        const aTxt = a.brand.toLowerCase();
        const bTxt = b.brand.toLowerCase();
        return (aTxt < bTxt) ? 1 : (aTxt > bTxt) ? -1 : 0;
    });

    inventory.sort( ( a, b) => b.options.ambiLight ? 1 : -1);

    refreshList( "tv-content-all");
});
let prijs = 0;

function addToCart(price)
{
    prijs +=  price;
    document.getElementById('winkel').innerHTML = 'Winkelmand(' + prijs + ')';
}

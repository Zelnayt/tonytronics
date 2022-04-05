//when you click on a product, the price is added to the total
function addToCart(id) {
    var price = document.getElementById(id).getAttribute("price");
    var total = document.getElementById("total");
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price);
}

//make the div with the id "product" clickable
document.getElementById("product").addEventListener("click", function(e) {
    addToCart(e.target.id);
}
);

function validateStock() {
    var quantity = document.forms["stock"]["qty"].value;
    quantity = parseInt(quantity);
    if (quantity < 10 || quantity > 100 || quantity % 10 !== 0) alert("Can only buy in blocks of 10");
}

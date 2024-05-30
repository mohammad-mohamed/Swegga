document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', calculateTotal);
});

function calculateTotal() {
    const femalePrice = 150.95;
    const malePrice = 180.95;

    const femaleQuantity = document.forms["orders"]["femaleQuantity"].value;
    const maleQuantity = document.forms["orders"]["maleQuantity"].value;

    const totalFemalePrice = femaleQuantity * femalePrice;
    const totalMalePrice = maleQuantity * malePrice;
    const totalPrice = totalFemalePrice + totalMalePrice;

    document.getElementById("femaleTotal").innerText =`R${totalFemalePrice.toFixed(2)}`;
    document.getElementById("maleTotal").innerText = `R${totalMalePrice.toFixed(2)}`;
    document.getElementById("orderTotal").innerText = `R${totalPrice.toFixed(2)}`;
}

document.getElementById('calculator').addEventListener('click', function () {
    const playerTotalPrice = document.getElementById('per-player');
    const playerPriceString = playerTotalPrice.value;
    const previousPlayerPrice = parseInt(playerPriceString);

    const updatePriceForCalculate = document.getElementById('final-total');
    updatePriceForCalculate.innerText = previousPlayerPrice * 5;


});

//calculate total

document.getElementById('calculate-total').addEventListener('click', function () {
    const managerPrice = document.getElementById('manager-price');
    const managerPriceString = managerPrice.value;
    const previousManagerPrice = parseInt(managerPriceString);

    const coachPrice = document.getElementById('coach-price');
    const coachPriceString = coachPrice.value;
    const previousCoachPrice = parseInt(coachPriceString);

    const playerTotalPrice = document.getElementById('per-player');
    const playerPriceString = playerTotalPrice.value;
    const previousPlayerPrice = parseInt(playerPriceString);





    const calculateTotal = document.getElementById('all-total');
    calculateTotal.innerText = previousManagerPrice + previousCoachPrice + previousPlayerPrice * 5;



});




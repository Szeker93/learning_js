function calculateFuelToOffload() {
    var totalDistanceToTravel = prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy számot!');
    var averageLitersOverHundred = prompt('Mi az űrhajó átlagos fogyasztása literben? Adjon meg egy számot!');
    var tankCapacity = prompt('Mi az űrhajó üzemanyagtartályának űrtartalma literben? Adjon meg egy számot!');

    var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
    var fuelToOffload = tankCapacity - requiredFuel;
    
    alert('Az utazáshoz szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L\n' + 'Leadandó üzemanyag-mennyiség: ' + fuelToOffload + ' L');

}

calculateFuelToOffload();

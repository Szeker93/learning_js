var allTurbines = 25;
var turbineCounter = 0;
var turbinePower = 0;
var sumPower = 0;

for (var i = 0; i < allTurbines; i++) {
  if (i < 10) {
    turbineCounter++;
    turbinePower = 2000;
    sumPower += turbinePower;
    console.log('A(z) ' + turbineCounter + '. számú szélturbina teljes fordulaton működik, ' + turbinePower + ' MWh-t termelve. A farmon termelt összenergia jelenleg ' + sumPower + ' MWh.');
  } else if (i < 20) {
    turbineCounter++;
    turbinePower = 1000;
    sumPower += turbinePower;
    console.log('A(z) ' + turbineCounter + '. számú szélturbina fél fordulaton működik, ' + turbinePower + ' MWh-t termelve. A farmon termelt összenergia jelenleg ' + sumPower + ' MWh.');
  } else if (i < 25) {
    turbineCounter++;
    turbinePower = 0;
    sumPower += turbinePower;
    console.log('A(z) ' + turbineCounter + '. számú szélturbina nem működik, ' + turbinePower + ' MWh-t termelve. A farmon termelt összenergia jelenleg ' + sumPower + ' MWh.');
  } else {
    console.log('Valami váratlan történt.');
  }
}

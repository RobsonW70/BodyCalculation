function wyswietlDivaz() {
  if (document.getElementById('block1').style.display == 'none') {
    document.getElementById('block1').style.display = 'block';
  } else {
    document.getElementById('block1').style.display = 'none';
  }
}

function przeliczBMI() {
  var wynik12 = document.getElementById('wynikBmi');
  var waga = document.getElementById('bmiWaga').value;
  var wzrost = document.getElementById('bmiWzrost').value;
  var obliczenie = '';
  var opisSytuacji = '';

  if (waga > 0 && wzrost > 0) {
    obliczenie = roundTo(waga / ((wzrost / 100) ^ 2), 1);
    if (obliczenie < 18.5) {
      opisSytuacji = 'NIEDOWAGA';
    } else {
      if (obliczenie >= 18.5 && obliczenie < 24.9) {
        opisSytuacji = 'PRAWIDŁOWA WAGA';
      } else {
        if (obliczenie >= 25 && obliczenie < 29.9) {
          opisSytuacji = 'NADWAGA';
        } else {
          if (obliczenie >= 30 && obliczenie < 34.9) {
            opisSytuacji = 'OTYŁOŚĆ I stopnia';
          } else {
            if (obliczenie >= 35 && obliczenie < 39.9) {
              opisSytuacji = 'OTYŁOŚĆ II stopnia';
            } else {
              if (obliczenie >= 40) {
                opisSytuacji = 'OTYŁOŚĆ III stopnia';
              }
            }
          }
        }
      }
    }
  } else {
    obliczenie = 'nie wprowadzono danych';
  }

  wynik12.innerHTML =
    '<h3>' + obliczenie + '</h3> <strong>' + opisSytuacji + '</strong>';
}

function roundTo(value, places) {
  var power = Math.pow(10, places);
  return Math.round(value * power) / power;
}

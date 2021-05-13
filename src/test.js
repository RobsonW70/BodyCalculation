function wyswietlDivaz() {
  if (document.getElementById('block1').style.display === 'none') {
    document.getElementById('block1').style.display = 'block';
  } else {
    document.getElementById('block1').style.display = 'none';
  }
}

function wpiszNaglowek(infoGlowne, info2nd) {
  document.getElementById('mainHeader').innerHTML = infoGlowne;
  document.getElementById('2ndHeader').innerHTML = info2nd;
}

function roundTo(value, places) {
  var power = Math.pow(10, places);
  return Math.round(value * power) / power;
}

function przeliczBMI() {
  var wynik12 = document.getElementById('wynikBmi');
  var waga = document.getElementById('bmiWaga').value;
  var wzrost = document.getElementById('bmiWzrost').value;
  var obliczenie = 0;
  var opisSytuacji = '';

  if (waga > 0 && wzrost > 0) {
    obliczenie = roundTo(waga / Math.pow(wzrost / 100, 2), 1);
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
    obliczenie = 'nie wprowadzono poprawnych danych';
  }

  wynik12.innerHTML =
    '<div class="opis-wskaznik h3">' +
    obliczenie +
    '</div> <div class="opis-wynik">' +
    opisSytuacji +
    '</div>';
}

function przeliczKalorie() {
  var wynik12 = document.getElementById('wynikBmr');
  var sex = document.getElementById('sexWybor').value;
  var wiek = document.getElementById('bmrWiek').value;
  var waga = document.getElementById('bmrWaga').value;
  var wzrost = document.getElementById('bmrWzrost').value;
  var wyborAktywnosci = document.getElementById('wyborAktywnosci').value;
  var tygodniowo = document.getElementById('bmrTygodniowo').value;
  var ubytek = document.getElementById('bmrUbytek').value;

  var obliczenie = 0;
  var opisSytuacji = '';

  if (waga > 0 && wzrost > 0) {
    obliczenie = roundTo(waga / Math.pow(wzrost / 100, 2), 1);
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
    obliczenie = 'nie wprowadzono poprawnych danych';
  }

  wynik12.innerHTML =
    '<div class="opis-wskaznik h3">' +
    obliczenie +
    '</div> <div class="opis-wynik">' +
    opisSytuacji +
    '</div>';
}

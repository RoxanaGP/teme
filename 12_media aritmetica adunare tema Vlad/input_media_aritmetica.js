window.onload = function() {
  var button = document.getElementById('btn');
  var number = document.getElementsByClassName('number');

  button.addEventListener('click', function() {

    var numere = [];

    for (var i = 0; i < ...) {
      var element = ...;
      if (element == '') {
        element = 0;
      } else {
        element = parseInt();
      }

      numere.push(element);
    }
    arithmeticMean(numere);

    if (number[0].value == "") {
      var a = 0;
    } else {
      var a = parseInt(number[0].value);
    }

    if (number[1].value == "") {
      var b = 0;
    } else {
      var b = parseInt(number[1].value);
    }

    if (number[2].value == "") {
      var c = 0;
    } else {
      var c = parseInt(number[2].value);
    }

    if (number[3].value == "") {
      var x = 0;
    } else {
      var x = parseInt(number[3].value);
    }

    if (number[4].value == "") {
      var y = 0;
    } else {
      var y = parseInt(number[4].value);
    }

    if (number[5].value == "") {
      var z = 0;
    } else {
      var z = parseInt(number[5].value);
    }

  arithmeticMean(a, b, c, x, y,z);
  });

  function arithmeticMean(a, b, c, x, y, z){
    var finalMean = (a+b+c+x+y+z)/6;
    alert("Media aritmetica a celor 6 cifre este: " + finalMean);
  }
};
//hint - sa parcurg un array cu un for - itterate array with for - array lenght!!!

//tema - sa ma gandesc cum poate functiona cu un numar nelimitat de numere
//minim 1 solutie
//explicatie clarea
//tema 2 - reduce nr de linii (60) cu 15 fara

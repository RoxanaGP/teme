// Tema: Modifica script-ul sa functioneze cu un numar nelimitat de numere
// Hint:
//      - foloseste array
//      - modifica scriptul putin cate putin si testeaza pe parcurs (console.log)


//NU IMI IESE MEDIA. IMI ZICE CA E NAN.Am sters functia cea mai de jos, arithmeticMean, si am lasat doar for-ul. Cred ca e posibil doar cu for sa fac tema, doar ca nu reusesc sa-i dau de capat...ce nu fac bine?
//Am gasit ceva legat de "reduce" - Summarizing with reduce http://eloquentjavascript.net/05_higher_order.html, dar nu l-am folosit.
//Multumesc
//P.S. M-am reapucat de JS pe codeacademy. Sa lucrez in mai multe directii pe JS. Poate asa, cu exercitii de la tine si cu execitii pe langa, imi intru in mana ca merg tare tare tare greu.

window.onload = function() {
  var button = document.getElementById('btn');
  var number = document.getElementsByClassName('number');

  button.addEventListener('click', function() {

    var numere = [];
    var total = 0;

    for (var i = 0; i < numere.length; i++) {
      var element = number.value;
      if (element == '') {
        element = 0;
      } else {
        element = parseInt();
      }
      total += numere[i];
      numere.push(element);
    }
    average = total/numere.length;
    console.log(average);
  });
};

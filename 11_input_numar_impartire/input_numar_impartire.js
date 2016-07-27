// Tema 4 - input in care sa pot scrie un numar si cand dai click pe un buton sa-mi spuna daca se imparte exct sau nu la 7 sau la 4;

window.onload = function() {
  var button = document.getElementById('button');
  var number = document.getElementById('number');

  button.addEventListener('click', function() {
    divideNumber(number.value);
  });

  function divideNumber(numberValue) {
    if(numberValue%4 == 0){
      alert("Yes! 4");
    }
    else if(numberValue%7 == 0){
      alert("Yes! 7");
    }
    else {
      alert("No");
    }
  }
};

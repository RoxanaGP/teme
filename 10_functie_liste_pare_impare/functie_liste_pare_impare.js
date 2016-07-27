//Tema 1 - functie care aduna toti parametrii pe care ii dau
//var A
function addition() {
    var sumTotal = 0;
    for(var i=0; i<arguments.length; i++) {
        sumTotal += arguments[i];  //sumTotal = sumTotal + arguments[i];
    }
    console.log(sumTotal);
};
addition(2, 3, 4, 10, 10, 10, 10);
//var B
function additionB(abc) {
    var sumTotal = 0;
    for(var i=0; i<abc.length; i++) {
        sumTotal += abc[i];  //sumTotal = sumTotal + arguments[i];
    }
    console.log(sumTotal);
};
additionB([2, 3, 4, 10, 10, 10, 10]);

//Tema 2 - functie care sa treaca prin toate nr pana la 100 si pentru fiecare nr sa-mi afiseze daca e par sau impar; in ambele cazuri sa-mi apeleze o singura functie care se foloseste de switch in care afisez textul in html(2 liste separate impar/par);

function count() {
  for(var i = 1; i<=100; i++){
      if ((i % 2) == 0) {
        separatedList(i, 'even');
      } else {
        separatedList(i, 'odd');
      }
  }

  function separatedList(number, param) {
    var li = document.createElement("li");
    li.innerText = number;

    switch (param) {
      case 'even':
        document.getElementById('even').appendChild(li);
        break;
      case 'odd':
        document.getElementById('odd').appendChild(li);
        break;
    }
  }
}
count();

//Tema 3 - sa formatez cele 2 liste, pe coloane diferite, sa spuna la fiecare ce tip de numar este;

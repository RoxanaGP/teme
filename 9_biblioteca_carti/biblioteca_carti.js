//Tema 5 - un obiect biblioteca(are o proprietate care e array/lista) (metoda 1) in care sa pun mai multe obiecte de tip carte(lista, array)(metoda 3); carte cu autor, titlu si an aparitie; in biblioteca sa am cartile si biblioteca sa-mi poata spune cate carti sunt in ea (5-10 carti);

//metoda 1
var biblioteca = {
  tip: "Biblioteca",
  carti: [],
  numara: function() {
    console.log("Biblioteca contine: " + biblioteca.carti.length + " carti.");
  }
};
//metoda 3
  var Carte = function(titlu, autor, an) {
    this.bookTitle = titlu;
    this.author = autor;
    this.year = an;
    this.afiseaza = function() {
      console.log(this.bookTitle + " " + this.author + " " + this.year);
    }
  }
  var Carte1 = new Carte("Inteligenta emotionala", "DANIEL GOLEMAN", "2008");
  var Carte2 = new Carte("Cele cinci limbaje ale iubirii", "GARY CHAPMAN", "2011");
  var Carte3 = new Carte("Despre vis", "SIGMUND FREUD", "2011");
  var Carte4 = new Carte("Emotii date pe fata", "PAUL EKMAN", "2011");
  var Carte5 = new Carte("Jocurile noastre de toate zilele. Psihologia relatiilor umane", "ERIC BERNE", "2014");
  biblioteca.carti.push(Carte1);
  biblioteca.carti.push(Carte2);
  biblioteca.carti.push(Carte3);
  biblioteca.carti.push(Carte4);
  biblioteca.carti.push(Carte5);

  biblioteca.numara();

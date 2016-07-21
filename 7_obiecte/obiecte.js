//Modalitatea 1 de a crea un obiect
//metoda de defnire este de tip OBJECT LITERAL
var persoana = {
  nume: "Rox",
  ochi: "caprui",
  inaltime: "1.80",
  saluta: function () {
    console.log("Hello");
  }
};

console.log(persoana.nume);
persoana.saluta();

//Modalitatea 2 de a crea un obiect
var Book = new Object();
Book.titlu = "Biblia";
Book.printeaza = function () {
	console.log("Am printat cartea " + this.titlu);
};

Book.printeaza();

var HarryPotter = Object.create(Book);
HarryPotter.titlu = "Harry Potter";
HarryPotter.printeaza();

var Ion = Object.create(Book);
Ion.titlu = "Ion";
Ion.autor = "Rebreanu";
Ion.printeaza = function () {
	console.log("Am printat cartea " + this.titlu + " scrisa de " + this.autor);
}
Ion.printeaza();

//Modalitatea 3 de a crea un obiect
//function-ul aici e de tip constructor
var Haina = function (color, type) {
	this.culoare = color;
  this.tip = type;
  this.afiseaza = function () {
  	console.log(this.tip + " " + this.culoare);
  }
};
var sacou = new Haina("negru", "sacou");
sacou.afiseaza();

//in cazul acesta lipseste type si in cazul acesta color ia valoarea "rochie"
var rochie = new Haina("rochie");
rochie.afiseaza();

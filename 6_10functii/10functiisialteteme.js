//grupa 1 - fara parametri
function helloNoParam() {
  var hello = "Hello there";
  console.log(hello);
}
helloNoParam();

function dateNoParam() {
  var now = new Date();
  console.log(now);
}
dateNoParam();

function hourNoParam() {
  var now = new Date();
  var hours = now.getHours();
  var mins = now.getMinutes();
  var seconds = now.getSeconds();
  console.log(hours+":"+mins+":"+seconds);
}
setInterval("hourNoParam()", 1000);
setInterval(hourNoParam, 1000);
setInterval(function () {
  hourNoParam();
}, 1000);

//grupa 2 - un parametru

// !!!!!!!
function redWriteOneParam(text) {
  document.write('<h1 style="color: red;">' + text + '</h1>');
};
redWriteOneParam("Boo");


function greenWriteOneParam(text, varza) {
  document.write('<p style="color: '+varza+';">' + text + '</p>');
};
greenWriteOneParam("Blaaaaaa", "yellow");

// function blackWriteOneParam() {
//   var hello = "Hello there, black guy!";
//   console.log(hello);
// };
// blackWriteOneParam()

//grupa 3 - doi parametri
// 3 functii care sa faca: adunare, inmultire, impartire (sa-ti arate si restul)
function additionTwoParam(y, z, a, b) {
    var x = y + z + a + b;
    console.log ("Calculează:" + x);
};
additionTwoParam(2, 3, 4, 6)

function multiplicationTwoParam(x, y) {
  var z = y * x;
  console.log ("Calculeaza:" + z);
};
multiplicationTwoParam(3, 3);

function divisionTwoParam(a, b) {
  var c = a/b;
  var r = a%b;
  console.log ("Calculeaza:" + c + "Rest:" + r);
};
divisionTwoParam(12, 5);

function modulo(a, b) {
  var c = a%b;
  console.log("Rest:" + c);
};
modulo(12, 3);

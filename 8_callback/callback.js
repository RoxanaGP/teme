function iterate(elemente) {
  for(var i = 0; i<elemente.length; i++) {
		show(elemente[i]);
  }
}

function show(de_afisat) {
	console.log(de_afisat);
}

iterate(["a", 1, true]);





function iterate2(elemente, callback) {
  for(var i = 0; i<elemente.length; i++) {
		callback(elemente[i]);
  }
}

function show(de_afisat) {
	console.log(de_afisat);
}

iterate2(["a", 1, true], function(e){
	console.log(e);
});
iterate2(["b", 2, false], show);

var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(unique(data));

// document.getElementById("data").innerHTML = unique(data);

var Uniq = {
	data: unique(data),
	uniq: uniq
}

module.exports = Uniq
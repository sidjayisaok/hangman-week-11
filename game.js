
//my word bank
function Games() {
	var chars = ["fleek", "totally", "omg", "awesome", "fresh", "fetch", "blah", "noob", "watermelondrea"];
	var randomNumber = Math.floor(Math.random() * chars.length);
	return chars[randomNumber];
};

module.exports = Games;

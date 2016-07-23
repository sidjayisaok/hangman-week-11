function Games() {
	var chars = ["The Shawshank Redemption", "Forrest Gump", "The Matrix", "When Harry Met Sally", "Love and Basketball", "Amelie", "Wagons East", "Scott Pilgrim Versus The World", "Tomb Raider"];
	var randomNumber = Math.floor(Math.random() * chars.length);
	return chars[randomNumber];
};

module.exports = Games;

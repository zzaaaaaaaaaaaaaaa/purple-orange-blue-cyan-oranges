function stairs(steps) {
	let text = "";
	
	// cada linha
	for (let i = steps; i > 0; i--) {
		let inner = "";

		// espaco antes asterisco
		let space = i;
		while (space > 1) {
			inner += " ";
			space--;
		}

		// cada caractere
		let asterisks = steps;
		while (asterisks >= i) {
			inner += "*";
			asterisks--;
		}
		text += inner;
		if (i > 1) text += "\n";
	}
	return text;
}

//console.log(stairs(6))
module.exports = stairs;
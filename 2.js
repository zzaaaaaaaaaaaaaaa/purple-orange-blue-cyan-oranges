function check(string) {
	const min = 6;

	if (string.length < min) {
		const missing = min - string.length;
		return missing;
	}

	if(!string.match(/[A-Z]+/g)) {
		return "Faltando uma letra maiúscula";
	}
	if(!string.match(/[a-z]+/g)) {
		return "Faltando uma letra minúscula";
	}
	if(!string.match(/[0-9]+/g)) {
		return "Faltando um dígito";
	}
	if(!string.match(/[!@#$%^&*()-+]+/g)) {
		return "Faltando um caractere especial (permitidos: !@#$%^&*()-+)";
	}
	if(string.match(/[^A-Za-z0-9!@#$%^&*()-+]+/g)) {
		return "Caracteres inválidos " + string.match(/[^A-Za-z0-9!@#$%^&*()-+]+/g).join(", ");
	}
}

//console.log(check("Ya3"));
//console.log(check("Ya3&/\\"));
//console.log(check("Ya3&ab"));
module.exports = check;
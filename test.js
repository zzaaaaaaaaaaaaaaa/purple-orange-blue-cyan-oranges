const first = require("./1");
const second = require("./2");
const third = require("./3");

function primeiroTeste() {
    console.log("--Teste 1--");
    const escada = first(6);
    const passou = escada === "     *\n    **\n   ***\n  ****\n *****\n******";
    console.log("Escada:\n" + escada);
    if (passou) return console.log("passou");
    console.error("falhou");
    console.log("-----------\r\n");
}

function segundoTeste() {
    console.log("--Teste 2--");
    const faltando = second("Ya3");
    const passou = faltando === 3;
    console.log("Ya3: " + faltando);
    if (passou) return console.log("passou");
    console.error("falhou");
    console.log("-----------\r\n");
}

function terceiroTeste() {
    console.log("--Teste 3--");
    const ovo = third("ovo");
    const ifailuhkqq = third("ifailuhkqq");
    const passou = ovo === 3 && ifailuhkqq === 3;
    console.log("ovo: " + ovo + "\nifailuhkqq: " + ifailuhkqq);
    if (passou) return console.log("passou");
    console.error("falhou");
    console.log("-----------\r\n");
}


primeiroTeste();
segundoTeste();
terceiroTeste();
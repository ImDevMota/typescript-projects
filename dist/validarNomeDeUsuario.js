"use strict";
function validarNomeDeUsuario(nome) {
    let letras = [];
    letras = nome.split('');
    let i;
    i = letras.length;
    let res1;
    res1 = 0;
    let res2;
    res2 = true;
    let valido;
    if (nome.length > 4 && nome.length < 25) {
        if (letras[0] != '0' && letras[0] != '1' && letras[0] != '2' && letras[0] != '3' && letras[0] != '4' && letras[0] != '5' && letras[0] != '6' && letras[0] != '7' && letras[0] != '8' && letras[0] != '9' && letras[0] != '!' && letras[0] != '@' && letras[0] != '#' && letras[0] != '$' && letras[0] != '%' && letras[0] != '&' && letras[0] != '*' && letras[0] != '[' && letras[0] != ']' && letras[0] != '.' && letras[0] != ';' && letras[0] != ',' && letras[0] != '/' && letras[0] != '_') {
            letras.forEach(l => {
                if (l != '!' && l != '@' && l != '#' && l != '$' && l != '%' && l != '&' && l != '*' && l != '[' && l != ']' && l != '.' && l != ';' && l != ',' && l != '/') {
                    if (letras[i - 1] == '_') {
                        res1 = 2;
                    }
                    else {
                        res1 = 1;
                    }
                }
                else {
                    res2 = false;
                }
            });
            if (res1 == 1 && res2 == true) {
                valido = true;
                console.log(`Nome do Usuário: ${nome} Válido: ${valido}.`);
            }
            else if (res1 == 2 && res2 == true) {
                valido = false;
                console.log(`Nome do Usuário não pode terminar com ( _ )! Válido: ${valido}`);
            }
            else if (res2 != true) {
                valido = false;
                console.log(`Nome do Usuário só deve conter letras, número e undeline ( _ )! Válido: ${valido}`);
            }
        }
        else {
            valido = false;
            console.log(`Nome do Usuário deve obrigatoriamente começar com uma letra! Válido: ${valido}`);
        }
    }
    else {
        valido = false;
        console.log(`Nome do Usuário deve ter entre 4 e 25 caracteres! Válido: ${valido}`);
    }
}
validarNomeDeUsuario('mota_goat');
//# sourceMappingURL=validarNomeDeUsuario.js.map
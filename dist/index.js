"use strict";
var Dado = /** @class */ (function () {
    function Dado(face) {
        this._face = face;
    }
    Dado.prototype.jogar = function () {
        this._face = Math.floor(Math.random() * 6 + 1);
        return this._face;
    };
    Object.defineProperty(Dado.prototype, "face", {
        get: function () {
            return this._face;
        },
        enumerable: false,
        configurable: true
    });
    return Dado;
}());
var qntDados = 10;
var dados = new Array();
var start = function () {
    var _a, _b;
    for (var i = 0; i < qntDados; i++) {
        dados[i] = new Dado(Math.floor(Math.random() * 6 + 1));
        (_a = document.getElementById("dice-container")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterbegin', '<img id="dieImage' + i + '" src="img/die' + dados[i].face + '.png" alt="">');
    }
    var numberDices = document.getElementById("dice-qty");
    numberDices === null || numberDices === void 0 ? void 0 : numberDices.append(qntDados.toString());
    (_b = document.getElementById("roll-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", roll);
};
function roll() {
    var _a;
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
    for (var i = 0; i < qntDados; i++) {
        dados[i].jogar();
        (_a = document.getElementById("dieImage" + i)) === null || _a === void 0 ? void 0 : _a.setAttribute("src", "img/die" + dados[i].face + ".png");
        if (dados[i].face == 1)
            count1++;
        if (dados[i].face == 2)
            count2++;
        if (dados[i].face == 3)
            count3++;
        if (dados[i].face == 4)
            count4++;
        if (dados[i].face == 5)
            count5++;
        if (dados[i].face == 6)
            count6++;
    }
    var dado1 = document.getElementById('freq-1');
    if (dado1)
        dado1.innerHTML = count1.toString();
    var dado2 = document.getElementById('freq-2');
    if (dado2)
        dado2.innerHTML = count2.toString();
    var dado3 = document.getElementById('freq-3');
    if (dado3)
        dado3.innerHTML = count3.toString();
    var dado4 = document.getElementById('freq-4');
    if (dado4)
        dado4.innerHTML = count4.toString();
    var dado5 = document.getElementById('freq-5');
    if (dado5)
        dado5.innerHTML = count5.toString();
    var dado6 = document.getElementById('freq-6');
    if (dado6)
        dado6.innerHTML = count6.toString();
    var perc1 = document.getElementById('perc-1');
    if (perc1)
        perc1.innerHTML = (count1 / qntDados).toString();
    var perc2 = document.getElementById('perc-2');
    if (perc2)
        perc2.innerHTML = (count2 / qntDados).toString();
    var perc3 = document.getElementById('perc-3');
    if (perc3)
        perc3.innerHTML = (count3 / qntDados).toString();
    var perc4 = document.getElementById('perc-4');
    if (perc4)
        perc4.innerHTML = (count4 / qntDados).toString();
    var perc5 = document.getElementById('perc-5');
    if (perc5)
        perc5.innerHTML = (count5 / qntDados).toString();
    var perc6 = document.getElementById('perc-6');
    if (perc6)
        perc6.innerHTML = (count6 / qntDados).toString();
}
window.addEventListener("load", start);

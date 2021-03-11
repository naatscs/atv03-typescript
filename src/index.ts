// TODO: Implemente de acordo com o enunciado 
type NullableHTMLElement = HTMLElement | null

class Dado  {
  
    private _face: number ;

    constructor(face : number){
        this._face = face;
    }

    jogar(): number{
        this._face = Math.floor(Math.random() * 6 + 1);
        return this._face
    }

    get face(): number {
        return this._face;

    }
 
 }
 

let qntDados = 10
var dados : Array<Dado> = new Array();


 const start = function()
 {

    for( let i = 0 ; i < qntDados ; i++){

        dados[i] = new Dado(Math.floor(Math.random() * 6 + 1));

        document.getElementById("dice-container")?.insertAdjacentHTML( 'afterbegin', '<img id="dieImage' + i +'" src="img/die'+ dados[i].face +'.png" alt="">' );

    }

    const numberDices = document.getElementById("dice-qty")
    numberDices?.append(qntDados.toString())

    
     
 
     document.getElementById("roll-button")?.addEventListener("click", roll);
     
     
 
 
 }

function roll()  {

    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;


    for( let i = 0 ; i < qntDados ; i++){
        dados[i].jogar();

        document.getElementById("dieImage"+ i)?.setAttribute("src", `img/die${dados[i].face}.png`)

        if(dados[i].face == 1) count1++; 
        if(dados[i].face == 2) count2++
        if(dados[i].face == 3) count3++
        if(dados[i].face == 4) count4++
        if(dados[i].face == 5) count5++
        if(dados[i].face == 6) count6++

        
    }

  
    const dado1 = document.getElementById('freq-1');
    if (dado1) dado1.innerHTML = count1.toString(); 

    const dado2 = document.getElementById('freq-2');
    if (dado2) dado2.innerHTML = count2.toString(); 

    const dado3 = document.getElementById('freq-3');
    if (dado3) dado3.innerHTML = count3.toString(); 

    const dado4 = document.getElementById('freq-4');
    if (dado4) dado4.innerHTML = count4.toString(); 

    const dado5 = document.getElementById('freq-5');
    if (dado5) dado5.innerHTML = count5.toString(); 

    const dado6 = document.getElementById('freq-6');
    if (dado6) dado6.innerHTML = count6.toString(); 


    const perc1 = document.getElementById('perc-1');
    if (perc1) perc1.innerHTML = (count1/qntDados).toString(); 

    const perc2 = document.getElementById('perc-2');
    if (perc2) perc2.innerHTML = (count2/qntDados).toString(); 

    const perc3 = document.getElementById('perc-3');
    if (perc3) perc3.innerHTML = (count3/qntDados).toString(); 

    const perc4 = document.getElementById('perc-4');
    if (perc4) perc4.innerHTML = (count4/qntDados).toString(); 

    const perc5 = document.getElementById('perc-5');
    if (perc5) perc5.innerHTML = (count5/qntDados).toString(); 

    const perc6 = document.getElementById('perc-6');
    if (perc6) perc6.innerHTML = (count6/qntDados).toString(); 
    


}
 





 
 window.addEventListener("load", start)


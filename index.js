let ocenaGreska =  document.getElementById("ocenaGreska");
function podaciForme(){
    let strocena = document.querySelector("#ocena").value;
    let indeks = document.querySelector("#indeks").value;
    let rb = document.querySelector("#rbIzlaska").value;
    let datum = document.querySelector("#datum").value;
    let rokovi = document.getElementsByName("rok");
    let polozio = document.querySelector("#polozio");

    let pomPolozio = false;
    if(polozio.checked == true){    pomPolozio = true; }
    
    let pomRok;
    for(let radio of rokovi){
        if(radio.checked == true){
            pomRok = radio.value
            break;
        }
    }

    let validni = true;

    let ocena = parseInt(strocena);
    if(isNaN(ocena) || ocena < 5 || ocena > 10){
        validni = false;
       ocenaGreska.innerHTML = "Neispravno unesena ocena, proverite da li je broj i u rasponu 5-10";
    }
}

let dugme = document.querySelector("#btnSubmit");
dugme.addEventListener("click", podaciForme);
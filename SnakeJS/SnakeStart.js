let visinaTabele = 20,
    sirinaTabele = 30,
    zmija = [[1, 3], [1, 2], [1, 1]],
    trenutniSmer = 'desno',
    smer = "desno",
    igranje,
    tabela = nacrtajIgru(),
    food,
    poeni = 0,
    pauzirano,
    zmijica = 1,
    hrana = 2;



pokreniIgru();


function pokreniIgru() {
    postaviHranu();
    let brzina = 80;
    setInterval(function () {
        tabela = nacrtajIgru();
        tabela[food[0]][food[1]] = hrana;
        trenutniSmer = smer;
        kretanje(trenutniSmer, zmija);
        postaviZmijuNaTabelu();
        ispisNaStranici(tabela, 20);
        daLiJePojela();
        azurirajRezultat();
    }, brzina);

}

function postaviZmijuNaTabelu() {
    for (let deoZmije = 0; deoZmije < zmija.length; deoZmije++) {
        tabela[zmija[deoZmije][0]][zmija[deoZmije][1]] = zmijica;
    }
    return tabela;
}

function kretanje(trenutniSmer, zmija) {
    let vertikala = zmija[0][0],
        horizontala = zmija[0][1];
    if (pauzirano == true) {
        return zmija;

    } else {
        if (daLiJeUdarilaUBocniZid(sirinaTabele, visinaTabele, zmija)) {
            let potvrda = confirm('Ako zelite ponovo da igrate, potvrdite !')
            if (potvrda === false) {
                return potvrda;
            } else {
                location.reload();
            }
        }
        if (trenutniSmer == "levo") {
            zmija.unshift([vertikala, horizontala - 1]);
        }
        if (trenutniSmer == "desno") {
            zmija.unshift([vertikala, horizontala + 1]);
        }
        if (trenutniSmer == "gore") {
            zmija.unshift([vertikala - 1, horizontala]);
        }
        if (trenutniSmer == "dole") {
            zmija.unshift([vertikala + 1, horizontala]);
        }
        zmija.pop();
        return zmija;

    }

}



function daLiJeUdarilaUBocniZid(sirina, visina, zmija) {
    var pozicijaGlaveHorizontalno = zmija[0][1];
    var pozicijaGlaveVertikalno = zmija[0][0];
    var uslov = pozicijaGlaveHorizontalno === -1 || pozicijaGlaveHorizontalno === (sirina) || pozicijaGlaveVertikalno === -1 || pozicijaGlaveVertikalno === (visina);
    return uslov;
}

function postaviHranu() {
    let hranaPozicijaLeft = Math.floor(Math.random() * tabela[0].length);
    let hranaPozicijaTop = Math.floor(Math.random() * tabela.length);
    for (let index in zmija) {
        while (zmija[index][0] == hranaPozicijaTop && zmija[index][1] == hranaPozicijaLeft) {
        }
    }
    food = [hranaPozicijaTop, hranaPozicijaLeft];
}

function daLiJePojela() {
    if (zmija[0][0] == food[0] && zmija[0][1] == food[1]) {
        povecajZmijicu();
        postaviHranu();
        poeni++;
        return true
    }
    return false;
}

function nacrtajIgru() {
    let platforma = [],
        praznoPolje = 0;
    for (let visina = 0; visina < visinaTabele; visina++) {
        platforma[visina] = [];
        for (let sirina = 0; sirina < sirinaTabele; sirina++) {
            platforma[visina][sirina] = praznoPolje;
        }
    }
    return platforma;
}


function ispisNaStranici(niz, velicinaPolja) {
    let tabela = document.createElement("table");
    tabela.setAttribute('class', 'tabelaIgra');
    for (let red = 0; red < niz.length; red++) {
        let redUKoloni = document.createElement("tr");
        for (let kolona = 0; kolona < niz[red].length; kolona++) {
            let polje = document.createElement("td");
            if (niz[red][kolona] == 0) polje.style.backgroundColor = "gray";
            if (niz[red][kolona] == 1) polje.style.backgroundColor = "rgb(0, 255, 0)";
            if (niz[red][kolona] == 2) polje.style.background = `red`;
            polje.style.width = velicinaPolja + "px";
            polje.style.height = velicinaPolja + "px";
            redUKoloni.appendChild(polje);
        }
        tabela.appendChild(redUKoloni);

    }
    document.getElementById("snakePlatform").innerHTML = tabela.outerHTML;
}


function azurirajRezultat() {
    let rezultat = document.getElementById('rezultat'),
        rezultatAzuriran = `<h2>Rezultat:${poeni}</h2>`;
    rezultat.innerHTML = rezultatAzuriran
}

function povecajZmijicu() {
    zmija.push(food);
}







function calculateLuas() {
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;

    if(alas && tinggi && !isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        document.getElementById('luas-result').innerHTML = 
            `L = 1/2 x a x t <br>
            L = 1/2 x ${alas} x ${tinggi} <br>
            L = ${luas}`;
    } else {
        document.getElementById('luas-result').innerHTML = "Please enter valid numbers for both fields.";
    }
}

function resetLuasForm() {
    document.getElementById('luas-segitiga-form').reset();
    document.getElementById('luas-result').innerHTML = 
        `L = 1/2 x a x t <br>
        L = 1/2 x 'var a' x 'var t' <br>
        L = 'var luas'`;
}

function calculateKeliling() {
    var sisi1 = document.getElementById('sisi1').value;
    var sisi2 = document.getElementById('sisi2').value;
    var sisi3 = document.getElementById('sisi3').value;

    if(sisi1 && sisi2 && sisi3 && !isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        var keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
        document.getElementById('keliling-result').innerHTML = 
            `K = a + b + c <br>
            K = ${sisi1} + ${sisi2} + ${sisi3} <br>
            K = ${keliling}`;
    } else {
        document.getElementById('keliling-result').innerHTML = "Please enter valid numbers for all sides.";
    }
}

function resetKelilingForm() {
    document.getElementById('keliling-segitiga-form').reset();
    document.getElementById('keliling-result').innerHTML = 
        `K = a + b + c <br>
        K = 'var a' + 'var b' + 'var c' <br>
        K = 'var keliling'`;
}

function showOrHide(option) {
    var luasSegitigaSection = document.getElementById('luas-segitiga-section');
    var luasSegitigaFormSection = document.getElementById('luas-segitiga-form-section');
    var kelilingSegitigaSection = document.getElementById('keliling-segitiga-section');
    var kelilingSegitigaFormSection = document.getElementById('keliling-segitiga-form-section');
    
    if (option === 'luasSegitiga') {
        luasSegitigaSection.style.display = 'block';
        luasSegitigaFormSection.style.display = 'block';
        kelilingSegitigaSection.style.display = 'none';
        kelilingSegitigaFormSection.style.display = 'none';
    } else if (option === 'kelilingSegitiga') {
        luasSegitigaSection.style.display = 'none';
        luasSegitigaFormSection.style.display = 'none';
        kelilingSegitigaSection.style.display = 'block';
        kelilingSegitigaFormSection.style.display = 'block';
    }
}

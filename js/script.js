function calculateArea() {
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;

    if(alas && tinggi && !isNaN(alas) && !isNaN(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        document.getElementById('result').innerHTML = 
            `L = 1/2 x a x t <br>
            L = 1/2 x ${alas} x ${tinggi} <br>
            L = ${luas}`;
    } else {
        document.getElementById('result').innerHTML = "Please enter valid numbers for both fields.";
    }
}

function resetForm() {
    document.getElementById('triangle-form').reset();
    document.getElementById('result').innerHTML = 
        `L = 1/2 x a x t <br>
        L = 1/2 x 'var a' x 'var t' <br>
        L = 'var luas'`;
}

function showOrHide(shape) {
    var segitigaSection = document.getElementById('segitiga-section');
    var segitigaFormSection = document.getElementById('segitiga-form-section');
    
    if (shape === 'segitiga') {
        segitigaSection.style.display = 'block';
        segitigaFormSection.style.display = 'block';
    } else {
        segitigaSection.style.display = 'none';
        segitigaFormSection.style.display = 'none';
    }
}

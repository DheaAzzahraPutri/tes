function pesanSekarang() {
    alert("Terima kasih telah mengunjungi Hennaku.tng!");
}

function tampilDropdown() {
    document.getElementById("dropdown-about").classList.toggle("muncul");
}

function tampilArtikel() {
    document.getElementById("dropdown-artikel").classList.toggle("muncul");
}

function kirimBooking(event) {
    event.preventDefault();
    event.target.innerHTML = "<h3>Terima kasih! ✧</h3><p>Formulir booking kamu sudah kami terima. Kami akan segera menghubungi kamu lewat WhatsApp.</p>";
}

function kirimKontak(event) {
    event.preventDefault();
    event.target.innerHTML = "<div align='center'><h3>Terima kasih! ✧</h3><p>Pesan kamu sudah kami terima. Kami akan segera membalas lewat email.</p></div>";
}

function kirimBooking(event) {
    event.preventDefault();
    event.target.innerHTML = "<div align='center'><h3>Terima kasih! ✧</h3><p>Formulir booking kamu sudah kami terima. Kami akan segera menghubungi kamu lewat WhatsApp.</p></div>";
}
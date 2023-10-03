// Fungsi untuk mengambil data cuaca berdasarkan kota yang dimasukkan
function getDataCuaca() {
    // Gantilah "API_KEY" dengan kunci API OpenWeatherMap Anda
    const API_KEY = "5e987c02909735ec5c90bd62fae154ba";
    const kotaInput = document.getElementById("kotaInput").value; // Ambil kota dari input
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${kotaInput}&appid=${API_KEY}&units=metric`;

    // Kirim permintaan Ajax
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            // Ambil informasi cuaca yang dibutuhkan
            const temperatur = data.main.temp;
            const kondisi = data.weather[0].description;

            // Tampilkan informasi cuaca pada halaman web
            document.getElementById("temperatur").textContent = "Temperatur: " + temperatur + "°C";
            document.getElementById("kondisi").textContent = "Kondisi Cuaca: " + kondisi;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// Fungsi untuk memanggil getDataCuaca saat tombol "Cari Cuaca" diklik
function cariCuaca() {
    getDataCuaca();
}

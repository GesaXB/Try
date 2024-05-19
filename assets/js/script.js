document.addEventListener("DOMContentLoaded", function () {
  // Membuat referensi ke elemen-elemen HTML yang diperlukan
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const bmiDisplay = document.getElementById("bmi");
  const descDisplay = document.getElementById("desc");
  const calculatorForm = document.querySelector(".calculator");

  // Menambahkan event listener pada form ketika disubmit
  calculatorForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan aksi default dari form submit

    // Mengambil nilai berat badan dan tinggi dari input
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert tinggi dari cm ke m

    // Memastikan kedua input tidak kosong
    if (!weight || !height) {
      alert("Mohon masukkan berat badan dan tinggi Anda.");
      return; // Menghentikan eksekusi jika salah satu input kosong
    }

    // Menghitung BMI
    const bmi = weight / (height * height);

    // Menampilkan hasil BMI
    bmiDisplay.textContent = bmi.toFixed(2);

    // Menentukan kategori BMI dan menampilkannya
    if (bmi < 18.5) {
      descDisplay.textContent = "Kurang berat badan";
      descDisplay.style.color = "#3498db";
      addExerciseLink("https://www.youtube.com/watch?v=oAVkXa76lzw");
    } else if (bmi >= 18.5 && bmi <= 25) {
      descDisplay.textContent = "Sehat";
      descDisplay.style.color = "#2ecc71";
      addExerciseLink("https://www.contoh-link-olahraga-sehat.com");
    } else if (bmi > 25 && bmi <= 30) {
      descDisplay.textContent = "Kelebihan berat badan";
      descDisplay.style.color = "#f39c12";
      addExerciseLink(
        "https://www.contoh-link-olahraga-kelebihan-berat-badan.com"
      );
    } else {
      descDisplay.textContent = "Obesitas";
      descDisplay.style.color = "#e74c3c";
      addExerciseLink("https://www.contoh-link-olahraga-obesitas.com");
    }
  });

  // Menambahkan event listener pada tombol reset
  calculatorForm.addEventListener("reset", function () {
    bmiDisplay.textContent = "0";
    descDisplay.textContent = "N/A";
    descDisplay.style.color = "inherit"; // Mengembalikan warna teks ke warna default

    // Menghapus link rekomendasi olahraga jika ada
    const exerciseLink = descDisplay.querySelector("a");
    if (exerciseLink) {
      exerciseLink.remove();
    }
  });

  // Fungsi untuk menambahkan link rekomendasi olahraga
  function addExerciseLink(url) {
    const exerciseLink = document.createElement("a");
    exerciseLink.textContent = "|Temukan rekomendasi olahraga yang sesuai|";
    exerciseLink.href = url;
    exerciseLink.target = "_blank";
    exerciseLink.rel = "noopener noreferrer";
    exerciseLink.id = "exerciseLink";
    descDisplay.appendChild(exerciseLink);
  }
});
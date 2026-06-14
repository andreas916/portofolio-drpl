# Panduan & Skrip Demo Video Tugas DRPL

Dokumen ini adalah panduan langkah demi langkah untuk membantu Anda merekam video penjelasan maksimal 10 menit. Pastikan Anda sudah menyiapkan hal-hal berikut sebelum mulai merekam:
1. Repository GitHub sudah dibuat dan kodenya sudah di-push.
2. GitHub Pages sudah aktif dan web bisa diakses.
3. Code Editor (VS Code) terbuka di layar.
4. Browser terbuka menampilkan repository GitHub Anda dan Tab lain menampilkan Web Portofolio Anda.

---

## 🎬 Bagian 1: Pembukaan & Pengenalan (1-2 Menit)

**Aksi di Layar:** Tampilkan wajah Anda (jika pakai webcam) atau tampilkan langsung Web Portofolio Anda di browser.
**Skrip Narasi:**
> "Halo semuanya, perkenalkan nama saya [Nama Anda], dengan NIM 18224110. Pada kesempatan kali ini, saya akan mendemonstrasikan hasil pengerjaan Tugas Individu mata kuliah Dasar Rekayasa Perangkat Lunak (DRPL), yaitu pembuatan Website Portofolio dan implementasi CI/CD Pipeline."

**Aksi di Layar:** Scroll perlahan web portofolio Anda. Tunjukkan fitur efek *glassmorphism* dan *bento grid*.
**Skrip Narasi:**
> "Ini adalah website portofolio yang telah saya bangun. Saya menggunakan desain modern berbasis 'Bento Grid' yang responsif dan dipadukan dengan efek 'Glassmorphism'. Website ini dibangun menggunakan React JS dan Vite, dengan styling CSS murni (Vanilla CSS) untuk menjaga performa serta memberikan keunikan."

---

## 💻 Bagian 2: Penjelasan Repository (2 Menit)

**Aksi di Layar:** Buka tab GitHub Repository Anda. Tunjukkan struktur foldernya.
**Skrip Narasi:**
> "Selanjutnya, mari kita lihat repository kodenya. Source code untuk website ini saya simpan di GitHub."
*(Tunjuk folder `src/components`)* 
> "Bisa dilihat di sini arsitekturnya berbasis komponen React. Ada folder `components` yang berisi `Hero`, `ProjectsBox`, `SkillsBox`, dan `ContactBox`. Memecah UI menjadi komponen seperti ini sangat sesuai dengan prinsip Software Engineering untuk reusability."

---

## 🚀 Bagian 3: Penjelasan Pipeline CI/CD (2-3 Menit)

**Aksi di Layar:** Di GitHub, buka folder `.github/workflows/deploy.yml`. 
**Skrip Narasi:**
> "Salah satu poin utama tugas ini adalah bagaimana membuat website ini 'live' dengan mengimplementasikan CI/CD Pipeline."
*(Tunjuk baris `on: push: branches: ["main"]`)*
> "Untuk mencapai hal ini, saya menggunakan GitHub Actions dan GitHub Pages. Saya membuat file `deploy.yml` ini. Bisa dilihat, workflow ini diatur agar *trigger* otomatis setiap kali ada event `push` ke branch `main`."

*(Gulir ke bawah pada file yml ke bagian `jobs`)*
> "Prosesnya terbagi menjadi dua *jobs* utama. Pertama adalah proses `build`, di mana GitHub Actions akan men-setup environment Node.js, menginstall dependensi dengan `npm ci`, lalu menjalankan `npm run build` untuk menghasilkan *production build* dari React Vite ini. Setelah berhasil, *job* kedua yaitu `deploy` akan dijalankan untuk mengunggah hasil build tersebut langsung ke environment GitHub Pages."

---

## 🔄 Bagian 4: Demonstrasi Live Update (Git Push) (3-4 Menit)

**Aksi di Layar:** 
1. Pindah ke VS Code.
2. Buka file `src/components/Hero.jsx`.
3. Ubah teks, misalnya dari `"Available for work"` menjadi `"Hire me!"` atau tambahkan satu keahlian baru di `SkillsBox.jsx`.

**Skrip Narasi:**
> "Untuk membuktikan bahwa CI/CD pipeline saya berfungsi dengan baik, mari kita lakukan demonstrasi *live update*."
> "Saat ini di web live saya, teks di status badge bertuliskan 'Available for work'. Saya akan mengubahnya di *local repository* saya menjadi 'Hire me!'."
*(Tunjukkan Anda mengetik perubahan tersebut lalu save)*

**Aksi di Layar:** Buka terminal di VS Code, lakukan commit dan push.
**Skrip Narasi:**
> "Sekarang saya akan melakukan commit atas perubahan ini..."
*(Ketik di terminal: `git add .` lalu `git commit -m "Update hero text"`)*
> "...dan saya push kode ini ke branch main di GitHub."
*(Ketik di terminal: `git push origin main`)*

**Aksi di Layar:** Segera pindah ke tab GitHub di browser, masuk ke tab **"Actions"**.
**Skrip Narasi:**
> "Setelah di-push, kita bisa langsung menuju ke tab 'Actions' di repository GitHub saya. Nah, terlihat di sini ada *workflow run* baru yang sedang berjalan dengan pesan commit yang baru saja saya buat. Mari kita tunggu proses build dan deploy-nya selesai."
*(Tunggu sekitar 30-60 detik sampai indikator berwarna hijau tanda sukses)*

**Aksi di Layar:** Pindah ke tab Web Portofolio Anda. Lakukan *Refresh* (F5).
**Skrip Narasi:**
> "Proses deployment telah berhasil. Sekarang kita kembali ke website portofolio saya yang *live*, lalu saya refresh halamannya."
*(Highlight kursor Anda pada teks yang baru berubah)*
> "Seperti yang bisa dilihat, teksnya secara otomatis berubah menjadi 'Hire me!'. Ini membuktikan bahwa CI/CD pipeline yang mengotomatisasi deployment dari source code ke production telah sukses berjalan tanpa perlu saya upload manual."

---

## 🏁 Bagian 5: Penutup (1 Menit)

**Aksi di Layar:** Tampilkan kembali keseluruhan web atau wajah Anda.
**Skrip Narasi:**
> "Demikian demonstrasi dari website portofolio dan CI/CD pipeline yang telah saya buat untuk tugas ini. Melalui tugas ini, saya mempraktikkan langsung *best practices* dalam deployment perangkat lunak. Terima kasih atas perhatiannya, sampai jumpa!"

---

## 💡 Tips Tambahan:
- Latih skrip ini 1-2 kali sebelum merekam agar tidak terbata-bata.
- Gunakan *screen recorder* seperti OBS Studio atau fitur rekam layar bawaan Windows (Windows Key + Alt + R).
- Jika proses GitHub Actions (*Bagian 4*) agak lama (lebih dari 1 menit), Anda bisa menyebutkan *"Saya akan mempercepat bagian ini di video"* dan memotong videonya saat *editing*, lalu lanjut ketika sudah hijau/sukses.

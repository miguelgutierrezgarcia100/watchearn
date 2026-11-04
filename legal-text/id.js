'use strict';
Legal.add('id', {
  note: 'Terjemahan ini disediakan untuk kemudahan Anda. Jika berbeda dengan versi bahasa Spanyol, versi bahasa Spanyol yang berlaku.',
  pending: 'belum diisi',
  fields: {name: 'nama atau nama perusahaan', taxId: 'nomor pajak', address: 'alamat', email: 'email kontak', hosting: 'penyedia hosting'},
  registry: ', terdaftar di {registry}',
  adrYes: 'Kami tergabung dalam {adr}.',
  adrNo: 'Kami tidak tergabung dalam sistem penyelesaian sengketa konsumen alternatif mana pun.',
  version: 'Versi {version} · Berlaku sejak {date}',
  rules: {
    intro: 'Hingga {c25} koin, faktor hadiah turun dari {f0} ke {f25} dari nilai dasarnya; hingga {c30}, ke {f30}; hingga {c40}, ke {f40}; setelah itu penurunannya makin cepat. Mulai {c45} koin, rem progresif kedua mengurangi semua hadiah hingga terbagi 300 saat mencapai {c50}. Tidak ada hadiah tunggal yang melebihi {max} koin.',
    reference: 'Acuan Anda saat ini · 5 detik video',
    coins: '{n} koin',
    head: ['Saldo', 'Video · 5 dtk', 'Peti terbesar'],
    rounding: 'Jumlah ditampilkan dibulatkan, tetapi perhitungannya memakai enam angka desimal. Penarikan baru tersedia setelah jumlah yang dipilih benar-benar tercapai.'
  },
  terms: {
    title: 'Ketentuan penggunaan',
    summaryTitle: '**Intinya** (ringkasan ini tidak menggantikan teks lengkap):',
    summary: [
      'WatchEarn gratis dan masih beta. Hanya untuk orang berusia {age} tahun ke atas yang tinggal di {countries}.',
      '{c1} koin = {rate}. Penarikan pertama sebesar {goal} dan diperiksa secara manual sebelum dibayar.',
      '**Hadiah makin kecil.** Mencapai penarikan pertama butuh sekitar {range} jam penggunaan aktif; 10% terakhir dari target saja butuh lebih dari {last} jam. Ini bukan sumber penghasilan.',
      'Saldo Anda hanya tersimpan di perangkat ini (di browser atau di aplikasi). Jika Anda menghapus datanya, mencopot aplikasi, atau berganti perangkat, saldo hilang dan kami tidak dapat memulihkannya.',
      'Bot, kecurangan, atau lebih dari satu profil per orang membatalkan koin dan penarikan.'
    ],
    sections: [
      ['1. Penyedia layanan', [
        'WatchEarn disediakan oleh {name}, nomor pajak {taxId}, beralamat di {address}{registry}. Email kontak: {email}. Informasi ini diberikan sesuai Pasal 10 Undang-Undang Spanyol 34/2002 tentang layanan masyarakat informasi dan perdagangan elektronik (LSSI).'
      ]],
      ['2. Ruang lingkup, tahap beta, dan persetujuan', [
        'Ketentuan ini mengatur penggunaan aplikasi web WatchEarn selama tahap beta: layanan gratis tempat Anda menonton video pendek, menyelesaikan tugas dan game, serta mengumpulkan koin yang dapat ditukar dengan uang sesuai bagian 6. Tidak perlu pembelian, pembayaran, atau langganan apa pun.',
        'Beta adalah versi uji coba: bisa mengalami kesalahan dan gangguan serta berubah sesuai bagian 9. Kami tidak menjamin ketersediaannya terus-menerus.',
        'Untuk menyetujui ketentuan ini, tekan «Saya sudah membaca dan setuju». Dengan menyetujuinya, Anda menyatakan memenuhi persyaratan di bagian 3. Tanpa persetujuan, video tidak diputar dan hadiah tidak diperoleh. Kami menyimpan versi yang disetujui dan tanggalnya di browser Anda.',
        'Kami tidak mengarsipkan salinan individual persetujuan Anda: ketentuan ini selalu tersedia di halaman [Ketentuan penggunaan](terms.html), tempat Anda dapat menyimpan atau mencetaknya (Pasal 27 LSSI). Ketentuan ini tersedia dalam beberapa bahasa; jika terjemahan berbeda, versi bahasa Spanyol yang berlaku.'
      ]],
      ['3. Siapa yang boleh ikut', [
        'Anda dapat menggunakan WatchEarn jika berusia {age} tahun ke atas, cakap membuat perjanjian, dan tinggal di {countries}. Setiap orang hanya boleh ikut dengan satu profil, yaitu satu browser di satu perangkat. Saldo dari browser atau perangkat berbeda tidak dapat digabungkan, dipindahkan, atau ditukarkan bersama.'
      ]],
      ['4. Cara mendapatkan koin', [
        '**Menonton.** Yang dihitung adalah waktu pemutaran aktif saat pertama kali menonton setiap kemunculan video, ditambahkan dalam interval 3,5 hingga 6,5 detik. Jeda, aplikasi di latar belakang, lompatan, dan pengulangan otomatis tidak dihitung.',
        '**Bonus dan game.** Setiap 2 sampai 4 video dapat muncul bonus opsional: peti (tiga kemungkinan hadiah, masing-masing peluang 1 dari 3), bonus koin, hadiah, atau pengali (×2 55%, ×3 25%, ×4 12%, ×5 6%, ×10 1,8%, dan ×20 0,2%). Ada juga hadiah harian, lima tugas yang diperbarui setiap jam, dan empat game dengan tiga ronde per hari masing-masing; roda dan kartu gosok punya enam hadiah dengan peluang sama.',
        'Semuanya gratis: tidak ada taruhan, pembelian, atau keikutsertaan berbayar. Hasil acak dibuat di perangkat Anda dengan generator kriptografinya. Aplikasi Android berisi iklan dan video berhadiah opsional (bagian 16); versi web tidak memiliki iklan.'
      ]],
      ['5. Nilai koin dan hadiah yang menurun', [
        'Koin bukan uang, uang elektronik, atau simpanan: tidak berbunga, tidak dapat dipindahkan atau dijual, dan hanya dapat ditukarkan sesuai bagian 6. Nilai tukarnya bergantung pada mata uang negara tempat tinggal Anda: penarikan pertama, yaitu {c50} koin, setara dengan {goal}, dan {c1} koin setara dengan {rate}. Jumlah yang ditampilkan aplikasi adalah nilai setara tersebut, bukan saldo bank. Nilai penarikan pertama dalam setiap mata uang:',
        '{currencies}',
        '**Hadiah berkurang seiring bertambahnya saldo Anda:**',
        '{rules}',
        '**Perkiraan waktu.** Menurut simulasi kami atas sistem saat ini, mencapai penarikan pertama butuh sekitar {range} jam penggunaan aktif, dengan atau tanpa bonus dan game. Hanya menonton video: setengah target dalam kurang dari {m25} menit, 80% dalam sekitar {h40} jam, 90% dalam sekitar {h45} jam, 98% dalam sekitar {h49} jam, dan target penuh dalam sekitar {h50} jam. Dengan tiga jam sehari, itu lebih dari dua tahun. Ini adalah perkiraan, bukan jaminan, dan WatchEarn bukan pekerjaan maupun sumber penghasilan.'
      ]],
      ['6. Penarikan', [
        'Anda dapat mengajukan penarikan {amounts} setelah saldo Anda mencapai jumlah tersebut. Kami membayar melalui PayPal atau, di Spanyol, melalui Bizum ke rekening atas nama Anda.',
        'Saat Anda mengonfirmasi penarikan di Dompet, koin dipotong dan email Anda terbuka dengan permintaan beserta kodenya. Kirim ke {email} bersama data rekening penerimaan dan nama pemiliknya. Jika belum terkirim, Anda dapat mengirim ulang atau menyalinnya dari Dompet.',
        'Kami memeriksa setiap permintaan dan dapat meminta informasi yang wajar untuk memeriksa identitas, usia, tempat tinggal, dan kepemilikan rekening Anda. Kami membayar permintaan yang sah paling lambat {payoutDays} hari kalender sejak menerima permintaan lengkap. Kami tidak mengenakan biaya; penyedia pembayaran Anda mungkin mengenakan biayanya sendiri.',
        'Jika suatu permintaan melanggar ketentuan ini, kami akan memberi tahu Anda melalui email beserta alasannya, dan Anda dapat membalas. Jika masalahnya dapat diperbaiki, kami akan menjelaskan caranya tanpa Anda kehilangan jumlahnya.',
        'Jumlah yang diterima dapat menimbulkan akibat pajak dan Anda bertanggung jawab untuk melaporkannya. Jika hukum mewajibkan kami memotong pajak atau melapor ke otoritas pajak, kami akan melakukannya dan memberi tahu Anda.'
      ]],
      ['7. Penggunaan yang wajar dan pencegahan penipuan', [
        'Dilarang memperoleh koin dengan bot, skrip, emulator, atau otomatisasi apa pun; mengubah penyimpanan, kode, jam perangkat, atau permintaan aplikasi; memanfaatkan kesalahan; memakai beberapa profil untuk melipatgandakan hadiah; atau menjual maupun mengalihkan koin atau profil.',
        'Jika kami menemukan perilaku tersebut, kami dapat membatalkan koin yang diperoleh secara tidak sah, menolak penarikan terkait, dan mengeluarkan Anda dari beta, secara proporsional dan dengan memberi tahu alasannya bila memungkinkan. Kami juga dapat mengoreksi jumlah yang dikreditkan akibat kesalahan teknis yang jelas.'
      ]],
      ['8. Konten dan kekayaan intelektual', [
        'Video adalah milik kreator dan pemegang haknya; WatchEarn menampilkan nama kreator dan tautan ke video asli. Anda tidak memperoleh hak apa pun atasnya: Anda hanya boleh menontonnya di dalam aplikasi untuk penggunaan pribadi. Tautan ke YouTube dan situs lain mengarah ke layanan pihak ketiga dengan ketentuannya sendiri.',
        'Jika Anda pemegang hak dan menganggap suatu konten digunakan tanpa izin, kirim email ke {email} dengan menyebutkan kontennya, hak Anda, dan data kontak Anda. Kami akan segera menghapusnya setelah benar-benar mengetahui bahwa penggunaannya melanggar hukum.',
        'Nama, desain, dan kode WatchEarn adalah milik penyedia layanan, kecuali sumber daya pihak ketiga dengan lisensinya sendiri, seperti font DM Sans dan Manrope (SIL Open Font License).'
      ]],
      ['9. Perubahan dan berakhirnya beta', [
        'Kami dapat mengubah layanan, hadiah, atau ketentuan ini karena alasan yang sah (hukum, teknis, keamanan, pencegahan penipuan, keberlanjutan, atau pengembangan layanan), dengan pemberitahuan di aplikasi setidaknya 15 hari sebelumnya, kecuali perubahan mendesak yang diwajibkan hukum atau keamanan. Untuk terus memakai aplikasi, Anda harus menyetujui versi baru; jika tidak, Anda dapat berhenti memakainya dan mengajukan penarikan yang sudah menjadi hak Anda. Koin yang sudah diperoleh tetap memiliki nilai tukarnya.',
        'Kami akan mengumumkan penutupan beta setidaknya {noticeDays} hari sebelumnya, dan Anda dapat mengajukan penarikan saldo yang mencapai batas hingga {claimDays} hari setelah penutupan. **Saldo di bawah penarikan pertama tidak dapat ditukarkan dan hangus saat beta ditutup.**'
      ]],
      ['10. Tanggung jawab', [
        'Kami bertanggung jawab atas kerugian akibat kesengajaan atau kelalaian berat dan atas kerugian yang tanggung jawabnya tidak dapat dikecualikan menurut hukum. Kami tidak bertanggung jawab atas gangguan di luar kendali kami atau hilangnya saldo karena data browser dihapus, mode penjelajahan pribadi, atau pergantian perangkat. Tidak ada dalam ketentuan ini yang membatasi hak Anda sebagai konsumen.'
      ]],
      ['11. Durasi, berhenti, dan pembatalan', [
        'Perjanjian berlaku selama Anda menggunakan layanan dan paling lama hingga beta ditutup. Anda dapat berhenti memakai WatchEarn kapan saja tanpa biaya dan menghapus semua datanya melalui Pengaturan → Hapus data saya. Anda juga dapat membatalkan perjanjian dalam 14 hari kalender sesuai Pasal 102 Undang-Undang Umum Spanyol tentang Perlindungan Konsumen dan Pengguna, tanpa menyebutkan alasan: cukup berhenti memakai aplikasi dan, jika mau, memberi tahu kami. Kami dapat mengakhiri perjanjian jika Anda melanggar ketentuan ini, dengan memberi tahu alasannya.'
      ]],
      ['12. Privasi', [
        'Pemrosesan data Anda dijelaskan dalam [Kebijakan privasi](privacy.html).'
      ]],
      ['13. Layanan pengguna dan keluhan', [
        'Anda dapat mengirim pertanyaan dan keluhan ke {email}. Kami akan membalas secepat mungkin dan paling lambat dalam satu bulan. {adr} Anda juga dapat menghubungi otoritas perlindungan konsumen di tempat tinggal Anda atau mengajukan arbitrase konsumen, yang bersifat sukarela bagi kedua pihak.'
      ]],
      ['14. Hukum yang berlaku dan yurisdiksi', [
        'Ketentuan ini tunduk pada hukum Spanyol. Jika Anda konsumen, Anda dapat mengajukan perkara ke pengadilan di tempat tinggal Anda dan tetap dilindungi oleh aturan wajib di negara tempat tinggal Anda.'
      ]],
      ['15. Keterpisahan', [
        'Jika suatu klausul dinyatakan batal, klausul lainnya tetap berlaku dan klausul yang terdampak digantikan oleh ketentuan hukum yang berlaku.'
      ]],
      ['16. Aplikasi Android dan iklan', [
        'WatchEarn juga tersedia sebagai aplikasi Android, dengan layanan yang sama dan ketentuan yang sama ini. Di aplikasi, rujukan ke browser berarti rujukan ke aplikasi: saldo Anda tersimpan di dalamnya dan hilang jika Anda menghapus datanya atau mencopotnya, dan setiap instalasi di satu perangkat dihitung sebagai satu profil (bagian 3).',
        'Aplikasi menampilkan iklan dari AppLovin dan mitra mediasinya: **iklan layar penuh** di antara video, paling sering setiap beberapa video dan tanpa koin, serta **video berhadiah** opsional yang Anda pilih untuk ditonton guna mendapatkan koin tambahan di Hadiah (hingga {adsPerDay} per hari) atau menggandakan hadiah peti atau bonus koin. Hadiah yang digandakan juga tidak pernah melebihi {max} koin.',
        'Koin dari video berhadiah hanya dikreditkan jika AppLovin mengonfirmasi bahwa Anda menontonnya sampai selesai. Jika Anda menutupnya lebih awal atau video gagal, tidak ada hadiah dan hadiah yang tertunda tetap ada tanpa digandakan. Kami tidak menjamin iklan selalu tersedia. Mengetuk iklan bersifat sukarela dan tidak memberi koin; membuat tayangan atau klik buatan dilarang (bagian 7). Iklan dan hal yang diiklankan menjadi tanggung jawab pengiklannya.',
        'Iklan yang dipersonalisasi hanya ditampilkan dengan persetujuan Anda, yang dapat Anda ubah di Pengaturan; pemrosesan data Anda dijelaskan dalam [Kebijakan privasi](privacy.html).'
      ]]
    ]
  },
  privacy: {
    title: 'Kebijakan privasi',
    summaryTitle: '**Intinya**',
    summary: [
      'Tanpa pendaftaran atau akun: progres Anda tersimpan di perangkat Anda dan tidak kami terima.',
      'Kami hanya memproses data pribadi jika Anda menghubungi kami atau mengajukan penarikan.',
      'Situs web tidak memiliki iklan, analitik, atau cookie pelacak. Aplikasi Android menampilkan iklan AppLovin, yang menerima data dari perangkat Anda; iklan yang dipersonalisasi hanya dengan persetujuan Anda.',
      'Anda dapat menghapus data melalui Pengaturan → Hapus data saya dan menggunakan hak Anda dengan menghubungi kami.'
    ],
    sections: [
      ['1. Pengendali data', [
        '{name}, nomor pajak {taxId}, beralamat di {address}{registry}. Email kontak dan privasi: {email}.'
      ]],
      ['2. Data yang kami proses', [
        '**Di perangkat Anda.** Aplikasi menyimpan di penyimpanan lokal browser Anda saldo, transaksi, tugas, game, video tersimpan, urutan feed, waktu menonton, hadiah tertunda, permintaan penarikan, pengaturan dan bahasa, serta versi dan tanggal ketentuan yang disetujui, dalam catatan `watchearn-v1`, `watchearn-terms`, dan `watchearn-language`. Data ini tidak dikirim ke server kami dan kami tidak dapat mengaksesnya.',
        '**Penarikan dan pesan.** Jika Anda mengirim permintaan penarikan atau menghubungi kami, kami memproses alamat email, nama, data rekening penerimaan (nomor Bizum atau email PayPal), negara tempat tinggal, kode, jumlah, dan tanggal permintaan, serta isi pesan. Jika diperlukan untuk memeriksa persyaratan, kami dapat meminta bukti identitas, usia, dan tempat tinggal, hanya yang benar-benar perlu.',
        '**Koneksi.** Saat aplikasi dimuat, penyedia hosting ({hosting}) menerima alamat IP Anda, halaman yang diminta, tanggal dan waktu, serta data teknis browser untuk menyajikan dan melindungi situs. Mata uang dan bahasa dipilih berdasarkan zona waktu dan bahasa perangkat Anda, tanpa dikirim ke siapa pun dan tanpa memakai lokasi Anda.',
        '**Tautan.** Jika Anda membuka video asli, Anda akan menuju YouTube, yang memproses data Anda sesuai kebijakannya sendiri. Jika Anda memakai Bagikan, judul dan tautan diserahkan ke fitur berbagi perangkat Anda.'
      ]],
      ['3. Tujuan dan dasar hukum', [
        [
          'Menyediakan layanan (video, hadiah, pengaturan, dan persetujuan ketentuan): pelaksanaan perjanjian (Pasal 6(1)(b) GDPR).',
          'Memproses, memeriksa, dan membayar penarikan: pelaksanaan perjanjian (Pasal 6(1)(b) GDPR).',
          'Mencegah penipuan: kepentingan sah untuk melindungi program dan pesertanya (Pasal 6(1)(f) GDPR).',
          'Menjawab pertanyaan, keluhan, dan permintaan pelaksanaan hak: pelaksanaan perjanjian dan kewajiban hukum (Pasal 6(1)(b) dan 6(1)(c) GDPR).',
          'Memenuhi kewajiban akuntansi dan pajak atas pembayaran: kewajiban hukum (Pasal 6(1)(c) GDPR).',
          'Menyajikan situs dengan aman: kepentingan sah (Pasal 6(1)(f) GDPR).'
        ],
        'Kami tidak membuat profil atau mengambil keputusan yang sepenuhnya otomatis: setiap penarikan ditinjau oleh manusia. Di aplikasi Android, AppLovin dan mitranya hanya mempersonalisasi iklan jika Anda menyetujuinya (bagian 11).'
      ]],
      ['4. Penerima', [
        'Penyedia hosting dan email pengendali, sebagai pemroses; PayPal atau bank yang memproses pembayaran, sebagai pengendali independen; di aplikasi Android, AppLovin dan jaringan iklan dalam mediasinya (bagian 11); serta pihak berwenang jika diwajibkan oleh hukum. Kami tidak menjual data Anda.'
      ]],
      ['5. Transfer internasional', [
        'Jika ada penyedia yang memproses data di luar Wilayah Ekonomi Eropa, hal itu dilakukan dengan perlindungan Bab V GDPR, seperti keputusan kecukupan atau klausul kontrak standar Komisi Eropa.'
      ]],
      ['6. Masa penyimpanan', [
        [
          'Data di perangkat Anda: sampai Anda menghapusnya.',
          'Permintaan penarikan dan pembayaran: selama diperlukan untuk memprosesnya, lalu diblokir selama jangka waktu hukum (umumnya 4 tahun untuk pajak dan 6 tahun untuk akuntansi).',
          'Pertanyaan dan keluhan: sampai terselesaikan, lalu selama jangka waktu kemungkinan klaim.',
          'Log teknis: jangka waktu yang diterapkan penyedia hosting.'
        ]
      ]],
      ['7. Keamanan', [
        'Situs disajikan melalui HTTPS. Data lokal tidak dienkripsi di dalam aplikasi: siapa pun yang mengakses browser Anda dapat melihat atau mengubahnya. Tidak ada sistem yang menjamin keamanan mutlak.'
      ]],
      ['8. Anak di bawah umur', [
        'WatchEarn hanya untuk orang berusia {age} tahun ke atas. Jika kami mengetahui suatu permintaan berasal dari anak di bawah umur, kami akan menolaknya dan menghapus datanya, kecuali yang wajib kami simpan menurut hukum.'
      ]],
      ['9. Hak Anda', [
        'Anda dapat menggunakan hak akses, perbaikan, penghapusan, keberatan, pembatasan, dan portabilitas dengan mengirim email ke {email}. Kami membalas dalam satu bulan, dapat diperpanjang dua bulan lagi untuk kasus yang rumit. Data di perangkat dapat Anda hapus sendiri melalui Pengaturan → Hapus data saya. Anda juga dapat mengadu ke [Badan Perlindungan Data Spanyol (AEPD)](https://www.aepd.es/) atau otoritas perlindungan data di negara Anda.'
      ]],
      ['10. Penyimpanan lokal dan cookie', [
        'WatchEarn tidak menggunakan cookie. Catatan lokal mutlak diperlukan untuk menyediakan layanan yang Anda minta, sehingga tidak memerlukan persetujuan (pasal 22.2 LSSI). Situs web tidak memiliki analitik, iklan, atau pelacakan pihak ketiga. Di aplikasi Android, SDK AppLovin menyimpan dan membaca informasi di perangkat Anda untuk menampilkan iklan (bagian 11).'
      ]],
      ['11. Iklan di aplikasi Android', [
        '**Siapa.** Aplikasi Android menyertakan SDK AppLovin MAX dari AppLovin Corporation, yang menayangkan iklan secara langsung atau melalui jaringan iklan dalam mediasinya. AppLovin dan jaringan tersebut memproses data sebagai pengendali independen sesuai kebijakan mereka sendiri ([kebijakan privasi AppLovin](https://www.applovin.com/privacy/)). Kami tidak menerima data tersebut dalam bentuk yang mengidentifikasi Anda; hanya laporan gabungan tentang iklan dan pendapatan.',
        '**Data apa.** ID iklan perangkat Anda (kecuali Anda telah menghapusnya di pengaturan Android), alamat IP, model dan sistem operasi, bahasa, zona waktu, operator dan jenis koneksi, aplikasi dan iklan yang ditampilkan, serta interaksi Anda dengannya (tayangan, klik, dan hadiah).',
        '**Tujuan dan dasar hukum.** Menampilkan iklan yang tidak dipersonalisasi, membatasi frekuensinya, mengukurnya, mengkreditkan hadiah, dan mencegah penipuan iklan: kepentingan yang sah untuk membiayai dan melindungi layanan gratis (pasal 6.1.f GDPR). Menampilkan iklan yang dipersonalisasi sesuai minat Anda dan mengukurnya: hanya dengan persetujuan Anda (pasal 6.1.a GDPR).',
        '**Pilihan Anda.** Saat pertama kali membuka aplikasi, kami bertanya apakah Anda menerima iklan yang dipersonalisasi; menolak sama mudahnya dan tidak menghalangi Anda menggunakan aplikasi atau mendapatkan hadiah. Anda dapat menarik atau memberikan persetujuan kapan saja di Pengaturan → Iklan yang dipersonalisasi, serta mengatur ulang atau menghapus ID iklan di pengaturan Android. Anda juga dapat menolak pemrosesan berdasarkan kepentingan yang sah dengan menulis kepada kami.',
        '**Transfer dan penyimpanan.** AppLovin dan beberapa jaringan memproses data di Amerika Serikat dan negara lain di luar Wilayah Ekonomi Eropa, dengan perlindungan bab V GDPR (seperti Kerangka Privasi Data UE-AS atau klausul kontrak standar). Mereka menyimpannya selama jangka waktu yang ditetapkan dalam kebijakan mereka.'
      ]],
      ['12. Perubahan', [
        'Jika kami mengubah kebijakan ini, kami akan memperbarui versi dan tanggalnya serta memberi tahu perubahan penting di aplikasi. Jika pemrosesan baru memerlukan persetujuan Anda, kami akan memintanya sebelum mengaktifkannya.'
      ]]
    ]
  }
});

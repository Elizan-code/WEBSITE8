const wordList = [
    {
        word: "gitar",
        hint: "Alat musik dengan senar."
    },
    {
        word: "oksigen",
        hint: "Gas tak berwarna dan tak berbau yang sangat penting untuk kehidupan."
    },
    {
        word: "gunung",
        hint: "Peninggian alam yang besar di permukaan bumi."
    },
    {
        word: "lukisan",
        hint: "Seni yang menggunakan warna di permukaan untuk menciptakan gambar atau ekspresi."
    },
    {
        word: "astronomi",
        hint: "Ilmu yang mempelajari benda langit dan fenomena terkait."
    },
    {
        word: "sepak bola",
        hint: "Olahraga populer yang dimainkan dengan bola berbentuk bola bundar."
    },
    {
        word: "cokelat",
        hint: "Makanan manis yang terbuat dari biji kakao."
    },
    {
        word: "kupu-kupu",
        hint: "Serangga dengan sayap berwarna-warni dan tubuh ramping."
    },
    {
        word: "sejarah",
        hint: "Ilmu yang mempelajari peristiwa masa lalu dan peradaban manusia."
    },
    {
        word: "pizza",
        hint: "Hidangan gurih yang terdiri dari adonan bulat yang dipipihkan dengan berbagai topping."
    },
    {
        word: "jazz",
        hint: "Genre musik yang ditandai dengan improvisasi dan sinkopasi."
    },
    {
        word: "kamera",
        hint: "Alat yang digunakan untuk menangkap dan merekam gambar atau video."
    },
    {
        word: "intan",
        hint: "Batu permata berharga yang dikenal karena kejernihan dan kekerasannya."
    },
    {
        word: "petualangan",
        hint: "Pengalaman yang seru atau penuh tantangan."
    },
    {
        word: "sains",
        hint: "Studi sistematis tentang struktur dan perilaku dunia fisik dan alam."
    },
    {
        word: "sepeda",
        hint: "Kendaraan yang digerakkan dengan tenaga manusia dan memiliki dua roda."
    },
    {
        word: "matahariterbenam",
        hint: "Peristiwa harian ketika matahari menghilang di bawah cakrawala."
    },
    {
        word: "kopi",
        hint: "Minuman populer yang mengandung kafein, dibuat dari biji kopi yang dipanggang."
    },
    {
        word: "tari",
        hint: "Gerakan ritmis tubuh yang sering dilakukan dengan musik."
    },
    {
        word: "galaksi",
        hint: "Sistem besar yang terdiri dari bintang, gas, dan debu yang diikat oleh gravitasi."
    },
    {
        word: "orkestra",
        hint: "Kelompok besar musisi yang memainkan berbagai alat musik."
    },
    {
        word: "gunungberapi",
        hint: "Gunung atau bukit dengan saluran yang mengeluarkan lava, batuan, uap panas, dan gas."
    },
    {
        word: "novel",
        hint: "Karya fiksi panjang, biasanya dengan plot dan karakter yang kompleks."
    },
    {
        word: "patung",
        hint: "Bentuk seni tiga dimensi yang diciptakan dengan membentuk atau menggabungkan bahan."
    },
    {
        word: "symphony",
        hint: "Komposisi musik panjang untuk orkestra penuh, biasanya terdiri dari beberapa bagian."
    },
    {
        word: "arsitektur",
        hint: "Seni dan ilmu merancang dan membangun bangunan."
    },
    {
        word: "balet",
        hint: "Tari klasik yang ditandai dengan gerakan presisi dan anggun."
    },
    {
        word: "astronot",
        hint: "Orang yang dilatih untuk melakukan perjalanan dan bekerja di luar angkasa."
    },
    {
        word: "airterjun",
        hint: "Aliran air yang jatuh dari ketinggian."
    },
    {
        word: "teknologi",
        hint: "Penerapan pengetahuan ilmiah untuk tujuan praktis."
    },
    {
        word: "pelangi",
        hint: "Fenomena meteorologi yang disebabkan oleh pemantulan, refraksi, dan dispersi cahaya."
    },
    {
        word: "alamsemesta",
        hint: "Semua materi, ruang, dan waktu yang ada di dunia ini."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan tuts yang membuat palu memukul senar."
    },
    {
        word: "liburan",
        hint: "Periode waktu yang digunakan untuk kesenangan, istirahat, atau relaksasi."
    },
    {
        word: "hutanhujan",
        hint: "Hutan lebat yang dicirikan dengan curah hujan tinggi dan keanekaragaman hayati."
    },
    {
        word: "teater",
        hint: "Tempat atau area luar ruang tempat pertunjukan drama, film, atau pertunjukan lainnya."
    },
    {
        word: "telepon",
        hint: "Alat yang digunakan untuk mentransmisikan suara ke jarak jauh."
    },
    {
        word: "bahasa",
        hint: "Sistem komunikasi yang terdiri dari kata-kata, isyarat, dan sintaksis."
    },
    {
        word: "gurun",
        hint: "Tanah gersang atau tandus dengan sedikit atau tanpa curah hujan."
    },
    {
        word: "bungamatahari",
        hint: "Tanaman tinggi dengan bunga besar berwarna kuning."
    },
    {
        word: "fantasi",
        hint: "Genre fiksi yang melibatkan sihir dan elemen supernatural."
    },
    {
        word: "teropong",
        hint: "Alat optik yang digunakan untuk melihat objek jauh di luar angkasa."
    },
    {
        word: "anginsepoisepoi",
        hint: "Angin yang lembut."
    },
    {
        word: "oasis",
        hint: "Tempat subur di gurun tempat air ditemukan."
    },
    {
        word: "fotografi",
        hint: "Seni, proses, atau praktik menciptakan gambar dengan merekam cahaya atau radiasi elektromagnetik lainnya."
    },
    {
        word: "safari",
        hint: "Perjalanan atau ekspedisi, biasanya untuk mengamati kehidupan liar di habitat aslinya."
    },
    {
        word: "planet",
        hint: "Benda langit yang mengorbit bintang dan tidak memproduksi cahaya sendiri."
    },
    {
        word: "sungai",
        hint: "Aliran air alami besar yang mengalir dalam saluran menuju laut, danau, atau sungai lainnya."
    },
    {
        word: "tropis",
        hint: "Terkait dengan atau terletak di wilayah antara Tropik Cancer dan Tropik Capricorn."
    },
    {
        word: "misterius",
        hint: "Sulit atau tidak mungkin untuk dipahami, dijelaskan, atau diidentifikasi."
    },
    {
        word: "enigma",
        hint: "Sesuatu yang misterius, membingungkan, atau sulit dipahami."
    },
    {
        word: "paradoks",
        hint: "Pernyataan atau situasi yang bertentangan dengan dirinya sendiri atau sulit dipahami."
    },
    {
        word: "puzzle",
        hint: "Permainan, mainan, atau masalah yang dirancang untuk menguji kecerdikan atau pengetahuan."
    },
    {
        word: "bisikan",
        hint: "Berbicara dengan suara sangat pelan atau lembut, seringkali secara diam-diam."
    },
    {
        word: "bayangan",
        hint: "Area atau bentuk gelap yang dihasilkan oleh objek yang menghalangi cahaya."
    },
    {
        word: "rahasia",
        hint: "Sesuatu yang disembunyikan atau tidak diketahui orang lain."
    },
    {
        word: "penasaran",
        hint: "Keinginan kuat untuk mengetahui atau belajar sesuatu."
    },
    {
        word: "tidakterduga",
        hint: "Tidak dapat diperkirakan atau diketahui sebelumnya; tidak pasti."
    },
    {
        word: "memperburuk",
        hint: "Untuk membingungkan atau mengacaukan seseorang; membuat sesuatu menjadi tidak jelas atau sulit dipahami."
    },
    {
        word: "mengungkapkan",
        hint: "Untuk membuat sesuatu yang sebelumnya tersembunyi atau tidak diketahui menjadi jelas."
    },
    {
        word: "ilusi",
        hint: "Persepsi atau keyakinan yang salah; penampilan atau kesan yang menipu."
    },
    {
        word: "cahayabulan",
        hint: "Cahaya yang berasal dari bulan."
    },
    {
        word: "bersemangat",
        hint: "Penuh dengan energi, kecerahan, dan kehidupan."
    },
    {
        word: "nostalgia",
        hint: "Kerinduan atau rasa sayang terhadap masa lalu."
    },
    {
        word: "brilian",
        hint: "Sangat cerdas, berbakat, atau mengesankan."
    },
];

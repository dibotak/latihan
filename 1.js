// Hi, this is my practice for asrul.dev 30 days Javascript tutorial
// mostly in indonesian

// 1.
let perang;

//2.
console.log(typeof "2020-01-01");
console.log(typeof 1994);
// console.log(typeof Asrul Dev); menghasilkan error

//3.
let nama = "Muhammad Adib Faqih";

//4.
let usia = 19;

//5.
let kalimat = "Nama saya " + nama + ", saya berusia " + usia + " tahun.";
console.log(kalimat);

//6.
let daduAcak = Math.random();
let dadu;
if (daduAcak >= 0 && daduAcak < 0.16) {
  dadu = 1;
} else if (daduAcak >= 0.16 && daduAcak < 0.33) {
  dadu = 2;
} else if (daduAcak >= 0.33 && daduAcak < 0.49) {
  dadu = 3;
} else if (daduAcak >= 0.49 && daduAcak < 0.66) {
  dadu = 4;
} else if (daduAcak >= 0.66 && daduAcak < 0.83) {
  dadu = 5;
} else if (daduAcak >= 0.80 && daduAcak < 1) {
  dadu = 6;
}
// console.log(daduAcak);
console.log(dadu);

//7.
let karakter = "Aku mencintai Javascript";
console.log("jumlah karakternya " + karakter.length)

//8.
function ketBulan(ketBulan) {
  let bulan;
  switch (ketBulan) {
    case 1:
      bulan = "Januari";
      break;
    case 2:
      bulan = "Februari";
      break;
    case 3:
      bulan = "Maret";
      break;
    case 4:
      bulan = "April";
      break;
    case 5:
      bulan = "Mei";
      break;
    case 6:
      bulan = "Juni";
      break;
    case 7:
      bulan = "Juli";
      break;
    case 8:
      bulan = "Agustus";
      break;
    case 9:
      bulan = "September";
      break;
    case 10:
      bulan = "Oktober";
      break;
    case 11:
      bulan = "November";
      break;
    case 12:
      bulan = "Desember";
      break;
  }
  return bulan;
}
console.log(ketBulan(4));

//9.
let gabungs = ["Aku", "bersyukur", "atas", "semua", "rezeki", "ini", "termasuk", "kamu"]

console.log(gabungs.join(" "));

//10.
let a = 10;
let b = 8;
console.log("a = " + a + "\nb = " + b + " (sesudah)");
a = a ^ b;
b = a ^ b;
a = a ^ b;
// Hasil nyari di gugel, ini yg bikin penasaran, makanya bisa ikut buat ngirim kode ini.
console.log("a = " + a + "\nb = " + b + " (sesudah)");

//11.
for (var i = "#"; i.length < 7; i+="#") {
  console.log(i);
}

//12.
for (var i = 0; i < 10; i++) {
  let k = i * i;
  console.log(i + " x " + i + " = " + k);
}

//13.
function hitungProfit(shoppers) {
  let listBarang = [
    ['Sepatu Sanji', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweeter Hinata', 175000, 1]
  ];

  /**
   * logikanya dulu
   1. beresin yang bisa diberesin, biar kodingnya gampang
   2. cek apa yang dibeli
   3. kalo ada, cek stok, ubah listBarang dan masukan data ke output. kalo gk ada gk usah lakuin apa apa
   4. tampilkan output
   */

  let barang = [];
  for (var i = 0; i < listBarang.length; i++) {
    barang.push({
      nama: listBarang[i][0],
      harga: listBarang[i][1],
      stok: listBarang[i][2]
    });
  }


  // input = name, product, amount
  // output = product, shoppers, leftOver, totalProfit

  let totalHarga = [0,0,0];
  let pembeli = [[],[],[]];

  for (var m = 0; m < shoppers.length; m++) {
    if (shoppers[m].product == barang[0].nama) {
      if (shoppers[m].amount <= barang[0].stok) {
        barang[0].stok -= shoppers[m].amount;
        totalHarga[0] += barang[0].harga * shoppers[m].amount;
        pembeli[0].push(shoppers[m].name);
      }
    } else if (shoppers[m].product == barang[1].nama) {
      if (shoppers[m].amount <= barang[1].stok) {
        barang[1].stok -= shoppers[m].amount;
        totalHarga[1] += barang[1].harga * shoppers[m].amount;
        pembeli[1].push(shoppers[m].name);
      }
    } else if (shoppers[m].product == barang[2].nama) {
      if (shoppers[m].amount <= barang[2].stok) {
        barang[2].stok -= shoppers[m].amount;
        totalHarga[2] += barang[2].harga * shoppers[m].amount;
        pembeli[2].push(shoppers[m].name);
      }
    }
  }

  let penjualan = [];

  for (var l = 0; l < barang.length; l++) {
    penjualan.push({
      product: barang[l].nama,
      shoppers: pembeli[l],
      leftOver: barang[l].stok,
      totalProfit: totalHarga[l]
    });
  }

  return penjualan;
}
console.log(hitungProfit([{name: 'Anis Fikriyyah', product: 'Sepatu Sanji', amount: 8}, {name: 'Asrul Harahap', product: 'Sepatu Sanji', amount: 10}, {name: 'Ghazala Tisha', product: 'Sweeter Hinata', amount: 1}, {name: 'Rifki Hilman', product: 'Baju Zoro', amount: 1}, {name: 'M. Lan', product: 'Baju Zoro', amount: 1}]));

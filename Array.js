// Belajar Bareng Array

var array = ['Hai nama saya Kelvin',7.00,'16 tahun',true,20];
console.log(array.join('-'));



var kelvin = array.includes('Hai nama saya Kelvin');
console.log (kelvin);``




// Cara Kedua Membuat Array

arrayDua = []
arrayDua[0] = 'Hai'
arrayDua[1] = 'nama'
arrayDua[2] = 'saya'
arrayDua[3] = 'Kelvin'

arrayDua.splice(4,0,'dan ini adalah teman saya namanya Thirza')
console.log(arrayDua);





// Contoh Kasus
obj = {
     umur : '16 tahun',
     kelas : '1 SMA',
     hobi : 'baca novel',
    crush : 'Thirza Nur Zanetta',
}

// alert (`Hai nama saya ${pacarSaya} umur saya ${umur} saya ${kelas}, hobi saya adalah ${hobi}.Saya adalah crushnya Kelvin`);
// alert(`Hai nama saya ${pacarSaya} umur saya ${umur} saya ${kelas}, hobi saya adalah ${hobi}.Saya adalah crushnya Kelvin`);
console.log(`Hai nama saya ${obj.crush}, umur saya ${obj.umur} saya ${obj.kelas}, hobi saya adalah ${obj.hobi}.Saya adalah crushnya Kelvin`);
console.warn(obj.crush);


console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for (let i = 1; i <= 10; i++) {
  // code block
  console.log(i);
}
// statement pertama declare variable i = 1
// statement kedua cek kondisi apakah i <= 10
// apabila statement kedua true? maka jalankan code block
// selesai menjalankan code block, baca statement ketiga
// statement ketiga dijalankan, biasanya akan mengubah nilai dari i
// selesai statement ketiga, baca statement kedua lagi
// sampai pada saat kondisi di statement kedua tidak terpenuhi, maka looping akan berhenti

for (let i = 5; i > 0; i--) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  i % 2 == 0 ? console.log(`${i} genap`) : null;
}

// *
// **
// ***
// ****
// *****

console.log("*");
console.log("**");
console.log("***");
console.log("****");
console.log("*****");

const tinggi = 5;
for (let i = 0; i < tinggi; i++) {
  //i = 0,1, 2, 3, 4 , 5
  let star = ""; // ""
  for (let j = 0; j <= i; j++) {
    // 5 <= 4
    star += "*"; // "*"
  }
  console.log(star, "bintang"); // *, **, ***, ****, *****
}

// loop 1-5
// setiap loopnya 1+1+2+3+4+5 = 16
// loop keduanya 2+1+2+3+4+5 = 17
for (let i = 1; i <= 5; i++) {
  let temp = i; //1,2,3,4,5
  for (let j = 1; j <= 10; j++) temp += j; // 2,4,7,11,16
  console.log(temp);
}
// 1 + 1 + 2 + 3 + 4 + 5 = 16
// 2 + 1 + 2 + 3 + 4 + 5 = 17
// 3 + 1 + 2 + 3 + 4 + 5 = 18
// 4 + 1 + 2 + 3 + 4 + 5 = 19
// 5 + 1 + 2 + 3 + 4 + 5 = 20

for (let i = 1; i <= 5; i++) {
  let temp = i; //1,2,3,4,5
  let j = 1;
  while (j <= 5) temp += j++;
  console.log(temp, "ini pakai while");
}

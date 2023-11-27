let number = 5;

while (number >= 1) {
  console.log(number--);
}

number = 0;

while (true) {
  if (number === 5) break;
  else console.log(++number, "ini menggunakan break");
}

number = 1;

while (number <= 5) {
  if (number === 4) {
    number++;
    continue; //code block dibawahnya akan diskip
  } else console.log(number++);
}

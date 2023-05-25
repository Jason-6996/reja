// Task - E: shunday function tuzing unga
// faqat bitta musbat integer argument qilib
// berilsin, va u ushbu argumentni tub son
// bolsa true aksincha false return qilsin.
//   Masalan: tubSonmi(5) return true,
//     tubSonmi(10) return false.Tub sonlar
// faqat ozi va 1soniga toliq bolinadigan
// sonlar.




function tubSon(number) {
  return number % 2 === 1 ? true : false;
}

console.log(tubSon(5));
console.log(tubSon(4));
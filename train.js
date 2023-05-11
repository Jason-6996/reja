console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba bo'ling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "ozingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investisiya qiling", // 50-60
  "endi dam oling, foydasi yo'q", // 60
];

// this is a callback function in the below

function maslahatBering(a, callback) {
  if (typeof a !== 'number') callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 5000);
  }
}
console.log('passed here 0');
maslahatBering(65, (err, data) => {
  if (err) console.log('ERROR:', err);
  else {
    console.log('javob:', data);
  }
});
console.log('passed here 1');

// this is an asynchronise function in the below
// we have use with asynchornise function operations like try/catch as possible

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // return list[5];
//     return new Promise((resolve, reject) => {
//       // setTimeout
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
    // setTimeout(function () {
    //   return list[5];
    // }, 5000); 
    // inside the asynchornym function core modules do not work keep in mind
//   }
// }

// call via then/catch with this action we catch the error or get the information

// console.log('passed here 0');
// maslahatBering(25)
//   .then((data) => {
//     console.log('javob:', data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// call via async/await with this it is easy to call the multiple functions in order

// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
  // javob = await maslahatBering(70);
  // console.log(javob);
  // javob = await maslahatBering(41);
  // console.log(javob);
// }
// run();
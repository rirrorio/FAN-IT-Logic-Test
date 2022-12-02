const input1 = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
const input2 = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const input3 = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

function countWords(str) {
  let count = 0;
  let format = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\/~]/;

  let splitted = str.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    if (format.test(splitted[i]) === false) {
      count++;
    }
  }
  return count;
}

console.log(countWords(input1));
console.log(countWords(input2));
console.log(countWords(input3));

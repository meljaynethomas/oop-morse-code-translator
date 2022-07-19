const alphabet = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",    
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-", 
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
};

// console.log(Object.keys(alphabet))
// console.log(Object.values(alphabet))

// get word to translate

const getWordToTranslate = () => {
  let wordToTranslate = document.querySelector("#input").value;
  console.log(wordToTranslate);
}

//   const compareLettersWithAlphabetObject = () => {
//     for (let i = 0; i < Object.keys(alphabet).length; i++) {
//     if (wordToTranslate.charAt(i) == (Object.keys(alphabet)[i])) {
//      console.log(Object.keys(alphabet)[i]+ " is in the object");
//     }
//   }

//   // get individual chars to compare against object keys...
   
//    for (let i = 0; i < wordToTranslate.length; i++)
//     const wordToTranslateAsArr = [];
//       wordToTranslateAsArr.forEach(letter => {
//         wordToTranslateAsArr.push();
//       })
//       console.log(wordToTranslateAsArr);
//   }
// }


// apply translate class to word:

// class Translate {

//   translate(character) => {
//     //take each character from 'word to translate' and display the value from the key/value pair
// 


// class English extends Language {

// }

// class Morse extends Language {

// }

// classes should store the alphabets, the word to translate, and possibly the output as it's changing
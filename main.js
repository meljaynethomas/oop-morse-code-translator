class Translator {
  constructor(fromLanguage, toLanguage) {
    this.fromLanguage = fromLanguage;
    this.toLanguage = toLanguage;
  }

  translate(word) {
    const chars = Array.from(word).map(character => this.fromLanguage.translateCharacter(character, this.toLanguage));
    const morseArr = word.split(" ");
    const morseWord = morseArr.map(character => this.fromLanguage.translateCharacter(character, this.toLanguage));

    if(word.indexOf(' ') <= 0) {
      return chars.join("");
    } else {
      return morseWord.join("");
    }
  }
}

class Language {
  translateCharacter(character, language) {
    throw new Error("This is not an actual language "+language.getLanguage());
  }

  getLanguage() {
    throw new Error("This is not an actual language");
  }
}

class English extends Language {

  constructor() {
    super();
    this.dictionary = new Map();
    this.dictionary.set("a", ".-");
    this.dictionary.set("b", "-...");
    this.dictionary.set("c", "-.-.");
    this.dictionary.set("d", "-..");
    this.dictionary.set("e", ".");
    this.dictionary.set("f", "..-.");
    this.dictionary.set("g", "--.");
    this.dictionary.set("h", "....");
    this.dictionary.set("i", "..");
    this.dictionary.set("j", ".---");
    this.dictionary.set("k", "-.-");
    this.dictionary.set("l", ".-..");
    this.dictionary.set("m", "--");
    this.dictionary.set("n", "-.");
    this.dictionary.set("o", "---");
    this.dictionary.set("p", ".--.");
    this.dictionary.set("q", "--.-");
    this.dictionary.set("r", ".-.");
    this.dictionary.set("s", "...");
    this.dictionary.set("t", "-");
    this.dictionary.set("u", "..-");
    this.dictionary.set("v", "...-");
    this.dictionary.set("w", ".--");
    this.dictionary.set("x", "-..-");
    this.dictionary.set("y", "-.--");
    this.dictionary.set("z", "--..");
  }

  getLanguage() {
    return "english";
  }

  translateCharacter(englishCharacter, language) {
    if(language.getLanguage() === "morse") { 
      return `${this.dictionary.get(englishCharacter)}   `;
    } else {
        throw new Error("Language not recognised");
    }
  }
}


class Morse extends Language {

  constructor() {
    super();
    this.dictionary = new Map();
    this.dictionary.set(".-", "a");
    this.dictionary.set("-...", "b");
    this.dictionary.set("-.-.", "c");
    this.dictionary.set("-..", "d");
    this.dictionary.set(".", "e");
    this.dictionary.set("..-.", "f");
    this.dictionary.set("--.", "g");
    this.dictionary.set("....", "h");
    this.dictionary.set("..", "i");
    this.dictionary.set(".---", "j");
    this.dictionary.set("-.-", "k");
    this.dictionary.set(".-..", "l");
    this.dictionary.set("--", "m");
    this.dictionary.set("-.", "n");
    this.dictionary.set("---", "o");
    this.dictionary.set(".--.", "p");
    this.dictionary.set("--.-", "q");
    this.dictionary.set(".-.", "r");
    this.dictionary.set("...", "s");
    this.dictionary.set("-", "t");
    this.dictionary.set("..-", "u");
    this.dictionary.set("...-", "v");
    this.dictionary.set(".--", "w");
    this.dictionary.set("-..-", "x");
    this.dictionary.set("-.--", "y");
    this.dictionary.set("--..", "z");
  }

  
  getLanguage() {
    return "morse";
  }

  translateCharacter(morseCharacter, language) {
    if(language.getLanguage() === "english") {
      return this.dictionary.get(morseCharacter);
    } else {
      throw new Error("Character not recognised");
    }
  }
}

const englishLanguage = new English();
const morseLanguage = new Morse();

const englishToMorseTranslator = new Translator(englishLanguage, morseLanguage);
const morseToEnglishTranslator = new Translator(morseLanguage, englishLanguage);
// const brokenTranslator = new Translator(morseLanguage, morseLanguage);

console.log(englishToMorseTranslator.translate("yellow"));
console.log(morseToEnglishTranslator.translate(". --. --."));
// console.log(brokenTranslator.translate("...."));


//...........................................................................................

// EXTENSION - Allow user to access translator via the DOM
// const getWordToTranslate = () => {
//   let wordToTranslate = document.querySelector("#input").value;
//   console.log(wordToTranslate);
// }


// POLYMORPHISM EXAMPLE
// class Account {

//   constructor(startingBalance) {
//     this.balance = startingBalance;
//   }

//   deductAmount(amountToDeduct) {
//     if(this.balance - amountToDeduct < 0) {
//       throw new Error("Cannot allow balance to drop below zero");
//     }
//     this.balance -= amountToDeduct;
//   }

//   getBalance() {
//     return this.balance;
//   }
// }

// class SilverAccount extends Account {

//   deductAmount(amountToDeduct) {
//     if(this.balance - amountToDeduct < -10) {
//       throw new Error("Cannot allow balance to drop below 10 for silver account");
//     }
//     this.balance -= amountToDeduct;
//   }

// }

// const doStuff = (account) => {
//   account.deductAmount(25);
//   console.log(account.getBalance());
// }

// doStuff(new Account(20));
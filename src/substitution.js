// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let unique = new Set(alphabet);
    let uniqueAlphabet = [];
    let substitutionCipher = {};
    let correctAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let result = "";
    unique.forEach((letter) => {
      uniqueAlphabet.push(letter)
    });
    if(!alphabet || alphabet.length < 26 || uniqueAlphabet.length < 26){
      return false;
      }
    
    if(!encode){
      for (let i = 0; i < alphabet.length; i++){
        substitutionCipher[alphabet[i]] = correctAlphabet[i]
      }
      for (let i = 0; i < input.length; i++){
        let letter = input[i].toLowerCase();
        if (letter === " ") {
          result += letter;
        }else{
          let decodedLetter = substitutionCipher[letter]
          result += decodedLetter
        }
      }
      return result;
    }
    
    
    

    if(encode){
      for (let i = 0; i < alphabet.length; i++){
          substitutionCipher[correctAlphabet[i]] = alphabet[i].toLowerCase(); 
          
}
      for(let i = 0; i < input.length; i++) {
        let letter = input[i].toLowerCase();
        if (letter === " ") {
          result += letter;
        }else{
          let encodedLetter = substitutionCipher[letter]
          result += encodedLetter
        }
        
        }
      }
    return result;
      }



  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

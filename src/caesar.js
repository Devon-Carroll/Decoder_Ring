// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    let asciiCode = [];
    let result = "";
    if(shift === 0 || shift > 25 || shift < -25 || !shift) {
      return false;
    }
      if(!encode){
        shift *= -1;
      }
      input = input.toLowerCase();
      for (let i = 0; i < input.length; i++) {
      let code = "";
      code = input[i].charCodeAt(0);
      asciiCode.push(code);
    }
    for (let j = 0; j < asciiCode.length; j++) {
      let space = "";
      if (asciiCode[j] <= 122 && asciiCode[j] >= 97){
        let newLetter = asciiCode[j] + shift;
        if(newLetter > 122){
          let difference = newLetter - 122
          newLetter = 96 + difference;
        }
        if(newLetter < 97){
          let difference = 97 - newLetter;
          newLetter = 123 + (difference * -1);
          
        }
        let encoded = String.fromCharCode(newLetter);
        result += encoded;
      }else{
      result += String.fromCharCode(asciiCode[j]);
      }
      
    }
    return result
  }
      
    

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

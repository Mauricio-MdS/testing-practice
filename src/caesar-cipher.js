const caesarCipher = (string, shift) => {
  const shiftLowerCase = (letter) => {
    const shiftedUnicode = ((letter.charCodeAt(0) + shift - 97) % 26) + 97;
    return String.fromCharCode(shiftedUnicode);
  };

  const shiftUpperCase = (letter) => shiftLowerCase(letter.toLowerCase()).toUpperCase();

  const shiftLetter = (letter) => {
    if (letter.match(/[a-z]/)) return shiftLowerCase(letter);
    if (letter.match(/[A-Z]/)) return shiftUpperCase(letter);
    return letter;
  };

  const init = () => {
    const array = string.split('');
    const cipher = array.map((letter) => shiftLetter(letter)).join('');
    return cipher;
  };

  return init();
};

module.exports = caesarCipher;

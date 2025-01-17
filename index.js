const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password-el");

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function filterCharacters(input, includeLowercase, includeUppercase = true, includeNumbers = true, includeSpecial = true) {
    const regexMap = {
        lowercase: includeLowercase ? /[a-z]/ : null,
        uppercase: includeUppercase ? /[A-Z]/ : null,
        numbers: includeNumbers ? /[0-9]/ : null,
        special: includeSpecial ? /[^a-zA-Z0-9]/ : null
    };

    return input.filter(char =>
        Object.values(regexMap).some(regex => regex && regex.test(char))
    );
}

function generatePassword(length = 16) {
    passwordEl.textContent = "";
    for (let i = 0; i < length; i++){
        passwordEl.textContent += getRandomElement(filterCharacters(characters, false, false, false, true));
    }
}
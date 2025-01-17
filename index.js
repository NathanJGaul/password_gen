const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password-el");
let lengthSt = document.getElementById("length");
let lowerSt = document.getElementById("lower");
let upperSt = document.getElementById("upper");
let numSt = document.getElementById("num");
let specialSt = document.getElementById("special");

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

function getSettings() {
    let settings = {
        length: lengthSt.valueAsNumber,
        lower: lowerSt.checked,
        upper: upperSt.checked,
        num: numSt.checked,
        special: specialSt.checked,
    }
    return settings;
}

function generatePassword() {
    let settings = getSettings();
    passwordEl.textContent = "";
    if (settings.length > 0 && (settings.lower || settings.upper || settings.num || settings.special)) {
        for (let i = 0; i < settings.length; i++){
            passwordEl.textContent += getRandomElement(filterCharacters(characters, settings.lower, settings.upper, settings.num, settings.special));
        }
    }
}
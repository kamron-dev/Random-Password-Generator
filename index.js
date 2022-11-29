const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordlength = 12
let passOne = document.getElementById("password-one")
let passTwo = document.getElementById("password-two")

function generateRandomChar() {
    let random = Math.floor( Math.random() * characters.length )
    return characters[random]
}

function generateRandomPass() {
    let randompassword = ""
    for (let i = 0; i < passwordlength; i++) {
        randompassword += generateRandomChar() 
    }
    return randompassword
    
}
function newRandomPass() {
    passOne.textContent = generateRandomPass()
    passTwo.textContent = generateRandomPass()
}

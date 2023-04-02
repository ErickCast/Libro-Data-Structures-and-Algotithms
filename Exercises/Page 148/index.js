function reverseString(string) {
    let stackString = [];
    for(let i = string.length; i >=0; i--) {
        stackString.push(string[i]);
    }
    return stackString.join('').toUpperCase();
}

function reverseString2(string) {
    let stackString = string.split('');
    return string.split('').map(c =>  stackString.pop()).join('');
}



console.log(reverseString("Erick"))
console.log(reverseString2("Erick"))
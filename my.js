function disemvowel(str) {
    let vowels = ['a', 'A','e', 'E', 'i', 'I','u', 'U','o', 'O', ];
    let arr = str.split('');
    console.log(arr);
    
    return arr.join('');
}
console.log(disemvowel("This website is for losers LOL!"))
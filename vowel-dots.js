const vowels = /[aeiou|AEIOU]/g;

function vowelDots(str) {

    return str.replace(vowels, '$&.');
}


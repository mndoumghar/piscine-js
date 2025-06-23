
function vowelDots(str) {
    const vowels = /[aeiou|AEIOU]/g;

    return str.replace(vowels, '$&.');
}

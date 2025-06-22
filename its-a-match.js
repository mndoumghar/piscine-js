//const re = /ab+c/;
/*Have you ever pondered the etymology of grep?
Create 4 regular expression variables:
normal: matches with the expression 'hi'.
begin: matches with the expression 'hi', only when it is at the beginning.
end: matches with the expression 'hi', only when it is at the end.
beginEnd: matches with the expression 'hi', only when it is exactly hi.
*/
const normal = /hi/;
const begin = /^hi/;
const end = /hi$/;
const beginEnd = /^hi$/;

console.log("normal:", normal);
console.log("begin:", begin);
console.log("end:", end);
console.log("beginEnd:", beginEnd);

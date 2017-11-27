var a = prompt();
var b = prompt();
var value = (a * a) - (2 * a * b) + (b * b);
console.log('Value "a" is ' + a + ' and value "b": ' + b + ', so score is equal to: ' + value);
if (value > 0) {
    console.log('The score is positive')
} else if (value == 0) {
    console.log('The score is equal 0')
} else {
    console.log(' The score is negative')
}
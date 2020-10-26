var counter = function (arr) {
    return 'The Element has  ' + arr.length + 'elements';
}

var typeof1 = function (var1) {
    return 'The TypeOf Var is ' + typeof var1;
}

var add = function add(a, b) {
    return `The addition of 2 number is ${a + b}`;
}

var Mulitply = function mul(a, b) {
    return `The Mulplication of 2 number is ${a * b}`;
}

module.exports = {
    counter: counter,
    typeof1: typeof1,
    add: add,
    Mulitply: Mulitply
}

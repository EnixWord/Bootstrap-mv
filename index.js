module.exports = function fizzBuzz () {
    // write your code here
    var output = [];
    for (let i = 1; i <= 100; i++){ 
      if (i % 3 === 0 && i % 5 === 0){
        output.push('FizzBuzz');
      } else if (i % 3 === 0){
        output.push('Fizz');
      } else if (i % 5 === 0){
        output.push('Buzz');
      } else {
        output.push(i)
      }
    }
    return output;
  }
  console.log(module.exports())





  module.exports = function (str) {
    str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    StringA = str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
     return str === StringA
  }




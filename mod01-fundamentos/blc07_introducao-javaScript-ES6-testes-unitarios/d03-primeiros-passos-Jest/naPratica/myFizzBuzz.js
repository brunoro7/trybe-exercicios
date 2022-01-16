function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 1 || num % 5 === 1) return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}


module.exports = myFizzBuzz;

console.log(myFizzBuzz(4));
/**
 * FizzBuzz - Classic Programming Problem
 *
 * Print numbers 1 to n, replacing:
 * - Multiples of 3 with "Fizz"
 * - Multiples of 5 with "Buzz"
 * - Multiples of both with "FizzBuzz"
 */

function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result;
}

/**
 * FizzBuzz (Alternative - String Building)
 */
function fizzBuzzAlt(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let output = '';

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';

    result.push(output || i);
  }

  return result;
}

/**
 * FizzBuzz (Extensible - Easy to add more rules)
 */
function fizzBuzzExtensible(n, rules = [[3, 'Fizz'], [5, 'Buzz']]) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let output = '';

    for (const [divisor, word] of rules) {
      if (i % divisor === 0) output += word;
    }

    result.push(output || i);
  }

  return result;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { fizzBuzz, fizzBuzzAlt, fizzBuzzExtensible };
}

// Example usage
if (typeof require !== 'undefined' && require.main === module) {
  console.log('FizzBuzz (1-20):');
  console.log(fizzBuzz(20).join(', '));

  console.log('\nFizzBuzzExtensible with custom rules (1-15):');
  console.log(fizzBuzzExtensible(15, [[3, 'Fizz'], [5, 'Buzz'], [7, 'Bazz']]).join(', '));
}

/**
 * @param {string} name
 * @returns {void}
 */
function greet(name) {
  console.log(`Hello, ${name}!`);
}

/**
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/** @type {number[]} */
const numbers = Array.from({ length: 10 }, () => randomInt(1, 100));
console.log('Numbers:', numbers);

/** @type {number[]} */
const primes = numbers.filter(isPrime);
console.log('Primes:', primes);

/** @type {number[]} */
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

/** @type {number} */
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

/** @type {number} */
const average = sum / numbers.length;
console.log('Average:', average);

/** @type {Set<number>} */
const uniqueNumbers = new Set(numbers);
console.log('Unique Numbers:', [...uniqueNumbers]);

/**
 * @param {number} n
 * @returns {number}
 */
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log('Fibonacci:', Array.from({ length: 10 }, (_, i) => fib(i)));

/** @type {string[]} */
const words = ["apple", "banana", "cherry", "date", "elderberry"];
const upperCaseWords = words.map(word => word.toUpperCase());
console.log('Uppercase Words:', upperCaseWords);

/** @type {number} */
const wordLengths = words.reduce((acc, word) => acc + word.length, 0);
console.log('Total Length of Words:', wordLengths);

/** @type {string[]} */
const sortedWords = [...words].sort();
console.log('Sorted Words:', sortedWords);

/**
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

console.log('Vowels in "banana":', countVowels("banana"));

/** @type {number[][]} */
const grid = Array.from({ length: 5 }, () =>
  Array.from({ length: 5 }, () => randomInt(1, 100))
);
console.log('Grid:', grid);

/**
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

console.log('Transposed Grid:', transpose(grid));

/**
 * @param {any[]} arr
 * @returns {any[]}
 */
function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

console.log('Flattened Grid:', flatten(grid));

/** @type {number[]} */
const sortedGrid = flatten(grid).sort((a, b) => a - b);
console.log('Sorted Flattened Grid:', sortedGrid);

/**
 * @param {number[]} arr
 * @returns {{ even: number[], odd: number[] }}
 */
const groupedNumbers = numbers.reduce((acc, num) => {
  const key = num % 2 === 0 ? 'even' : 'odd';
  if (!acc[key]) acc[key] = [];
  acc[key].push(num);
  return acc;
}, {});
console.log('Grouped Numbers:', groupedNumbers);

/**
 * @param {number} r
 * @returns {number}
 */
const circleArea = r => Math.PI * r * r;

/**
 * @param {number} r
 * @returns {number}
 */
const circleCircumference = r => 2 * Math.PI * r;

console.log('Circle Area (r=5):', circleArea(5));
console.log('Circle Circumference (r=5):', circleCircumference(5));

/** @type {{ name: string, score: number }[]} */
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 87 },
  { name: "Dave", score: 73 }
];

/** @type {{ name: string, score: number }[]} */
const topStudents = students.filter(student => student.score >= 85);
console.log('Top Students:', topStudents);

/** @type {string[]} */
const studentNames = students.map(student => student.name);
console.log('Student Names:', studentNames);

/** @type {number} */
const highestScore = Math.max(...students.map(student => student.score));
console.log('Highest Score:', highestScore);

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log('Binary Search (sortedGrid):', binarySearch(sortedGrid, 42));

console.log('Random Numbers:', Array.from({ length: 10 }, () => randomInt(1, 50)));

/**
 * @template T
 * @param {T} fn
 * @returns {T}
 */
function memoize(fn) {
  /** @type {{ [key: string]: any }} */
  const cache = {};
  return function (...args) {
    const key = args.toString();
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const memoizedFib = memoize(fib);
console.log('Memoized Fibonacci:', Array.from({ length: 10 }, (_, i) => memoizedFib(i)));

/**
 * @template T
 * @param {T[]} arr
 * @param {number} size
 * @returns {T[][]}
 */
function chunks(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log('Chunks:', chunks(numbers, 3));

/**
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log('Capitalize:', capitalize('hello'));

/**
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  return str === reverseString(str);
}

console.log('Is Palindrome ("radar"):', isPalindrome('radar'));
console.log('Is Palindrome ("hello"):', isPalindrome('hello'));

/**
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

console.log('Range 1-10:', range(1, 10));

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log('GCD of 48 and 18:', gcd(48, 18));

/**
 * @param {string} sentence
 * @returns {boolean}
 */
function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCaseSentence = sentence.toLowerCase();
  return [...alphabet].every(char => lowerCaseSentence.includes(char));
}

console.log(
  'Is Pangram ("The quick brown fox jumps over the lazy dog"):',
  isPangram("The quick brown fox jumps over the lazy dog")
);
console.log('Is Pangram ("Hello World"):', isPangram("Hello World"));

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

console.log('LCM of 12 and 15:', lcm(12, 15));

/**
 * @param {string} str
 * @param {string} char
 * @returns {number}
 */
function countOccurrences(str, char) {
  return str.split('').filter(c => c === char).length;
}

console.log('Occurrences of "a" in "banana":', countOccurrences("banana", "a"));

/**
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log('Shuffled Numbers:', shuffleArray(numbers));

console.log('Range 5-15:', range(5, 15));

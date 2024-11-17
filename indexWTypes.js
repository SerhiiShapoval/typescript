function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

const numbers: number[] = Array.from({ length: 10 }, () => randomInt(1, 100));
console.log('Numbers:', numbers);

const primes: number[] = numbers.filter(isPrime);
console.log('Primes:', primes);

const doubled: number[] = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

const sum: number = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

const average: number = sum / numbers.length;
console.log('Average:', average);

const uniqueNumbers: Set<number> = new Set(numbers);
console.log('Unique Numbers:', [...uniqueNumbers]);

function fib(n: number): number {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log('Fibonacci:', Array.from({ length: 10 }, (_, i) => fib(i)));

const words: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
const upperCaseWords: string[] = words.map(word => word.toUpperCase());
console.log('Uppercase Words:', upperCaseWords);

const wordLengths: number = words.reduce((acc, word) => acc + word.length, 0);
console.log('Total Length of Words:', wordLengths);

const sortedWords: string[] = [...words].sort();
console.log('Sorted Words:', sortedWords);

function countVowels(str: string): number {
  return str.match(/[aeiou]/gi)?.length || 0;
}

console.log('Vowels in "banana":', countVowels("banana"));

const grid: number[][] = Array.from({ length: 5 }, () =>
  Array.from({ length: 5 }, () => randomInt(1, 100))
);
console.log('Grid:', grid);

function transpose(matrix: number[][]): number[][] {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

console.log('Transposed Grid:', transpose(grid));

function flatten<T>(arr: T[][]): T[] {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

console.log('Flattened Grid:', flatten(grid));

const sortedGrid: number[] = flatten(grid).sort((a, b) => a - b);
console.log('Sorted Flattened Grid:', sortedGrid);

const groupedNumbers = numbers.reduce(
  (acc: { even: number[]; odd: number[] }, num: number) => {
    const key = num % 2 === 0 ? 'even' : 'odd';
    if (!acc[key]) acc[key] = [];
    acc[key].push(num);
    return acc;
  },
  { even: [], odd: [] }
);
console.log('Grouped Numbers:', groupedNumbers);

const circleArea = (r: number): number => Math.PI * r * r;
const circleCircumference = (r: number): number => 2 * Math.PI * r;
console.log('Circle Area (r=5):', circleArea(5));
console.log('Circle Circumference (r=5):', circleCircumference(5));

const students: { name: string; score: number }[] = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 87 },
  { name: "Dave", score: 73 }
];

const topStudents = students.filter(student => student.score >= 85);
console.log('Top Students:', topStudents);

const studentNames: string[] = students.map(student => student.name);
console.log('Student Names:', studentNames);

const highestScore: number = Math.max(...students.map(student => student.score));
console.log('Highest Score:', highestScore);

function binarySearch(arr: number[], target: number): number {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log('Binary Search (sortedNumbers):', binarySearch(sortedGrid, 42));

console.log('Random Numbers:', Array.from({ length: 10 }, () => randomInt(1, 50)));

function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache: Record<string, ReturnType<T>> = {};
  return function (...args: Parameters<T>): ReturnType<T> {
    const key = args.toString();
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  } as T;
}

const memoizedFib = memoize(fib);
console.log('Memoized Fibonacci:', Array.from({ length: 10 }, (_, i) => memoizedFib(i)));

const chunks = <T>(arr: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log('Chunks:', chunks(numbers, 3));

const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
console.log('Capitalize:', capitalize('hello'));

const isPalindrome = (str: string): boolean => str === reverseString(str);
console.log('Is Palindrome ("radar"):', isPalindrome('radar'));
console.log('Is Palindrome ("hello"):', isPalindrome('hello'));

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
console.log('Range 1-10:', range(1, 10));

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log('GCD of 48 and 18:', gcd(48, 18));

function isPangram(sentence: string): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCaseSentence = sentence.toLowerCase();
  return [...alphabet].every(char => lowerCaseSentence.includes(char));
}

console.log(
  'Is Pangram ("The quick brown fox jumps over the lazy dog"):',
  isPangram("The quick brown fox jumps over the lazy dog")
);
console.log('Is Pangram ("Hello World"):', isPangram("Hello World"));

function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

console.log('LCM of 12 and 15:', lcm(12, 15));

function countOccurrences(str: string, char: string): number {
  return str.split('').filter(c => c === char).length;
}

console.log('Occurrences of "a" in "banana":', countOccurrences("banana", "a"));

function shuffleArray<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5);
}

console.log('Shuffled Numbers:', shuffleArray(numbers));

console.log('Range 5-15:', range(5, 15));

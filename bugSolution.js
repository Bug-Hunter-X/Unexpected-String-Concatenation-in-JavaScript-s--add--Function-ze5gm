function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error('Inputs must be numbers');
  }
  return a + b;
}

console.log(add(2, '3')); // Output: NaN
console.log(add(2, 3));   // Output: 5
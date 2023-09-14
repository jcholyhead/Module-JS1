// Implement a function isValidTriangle

// Acceptance criteria:

// Given the lengths of three sides of a triangle (a, b, c),
// When the function isValidTriangle is called with these side lengths as input,
// Then it should:

// scenario: invalid triangle
// Given the side lengths a, b, and c,
// When the sum of any two side lengths is less than or equal to the length of the third side (i.e., a + b <= c, a + c <= b, b + c <= a),
// Then it should return false because these conditions violate the Triangle Inequality, which states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.

// scenario: invalid triangle
// Check for Valid Input:
// Given the side lengths a, b, and c,
// When any of the side lengths is less than or equal to zero,
// Then it should return false because a triangle cannot have zero or negative side lengths.

// scenario: valid triangle
// Given valid side lengths that satisfy the conditions mentioned above,
// When the function is called with these side lengths,
// Then it should return true because the input forms a valid triangle.
// This specification outlines the behavior of the isValidTriangle function for different input scenarios, ensuring it properly checks for invalid side lengths and whether they form a valid triangle according to the Triangle Inequality Theorem.

function isValidTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }

  return true;
}

console.assert(isValidTriangle(3, 4, 5) === true, 'Should return true for valid triangle with side lengths 3, 4, 5');
console.assert(isValidTriangle(5, 12, 13) === true, 'Should return true for valid triangle with side lengths 5, 12, 13');
console.assert(isValidTriangle(1, 2, 3) === false, 'Should return false for invalid triangle with side lengths 1, 2, 3');
console.assert(isValidTriangle(0, 4, 5) === false, 'Should return false for invalid triangle with side length 0');
console.assert(isValidTriangle(-3, 4, 5) === false, 'Should return false for invalid triangle with negative side length');
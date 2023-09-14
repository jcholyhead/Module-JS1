// You will need to implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// If the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// If the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// If the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// If the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
// Identify Reflex Angles:

// If the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"


function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  else if (angle < 90) return "Acute angle";
  else if (angle > 90 && angle < 180) return "Obtuse angle";
  else if (angle === 180) return "Straight angle";
  else if (angle > 180 && angle < 360) return "Reflex angle";
}

console.assert(getAngleType(90) === 'Right angle', 'Test Case 1 Failed');
console.assert(getAngleType(45) === 'Acute angle', 'Test Case 2 Failed');
console.assert(getAngleType(100) === 'Obtuse angle', 'Test Case 3 Failed');
console.assert(getAngleType(180) === 'Straight angle', 'Test Case 4 Failed');
console.assert(getAngleType(200) === 'Reflex angle', 'Test Case 5 Failed');
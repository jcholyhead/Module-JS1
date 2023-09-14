// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

function getCardValue(card) {
  const rank = card.slice(0, -1);

  if (isNaN(rank)) {
    if (rank === 'A') {
      return 11;
    } else if (['K', 'Q', 'J'].includes(rank)) {
      return 10;
    } else {
      throw new Error('Invalid card rank.');
    }
  } else {
    return parseInt(rank);
  }
}

console.assert(getCardValue('2♠') === 2, 'Should return 2 for "2♠"');
console.assert(getCardValue('5♣') === 5, 'Should return 5 for "5♣"');
console.assert(getCardValue('10♥') === 10, 'Should return 10 for "10♥"');
console.assert(getCardValue('K♦') === 10, 'Should return 10 for "K♦"');
console.assert(getCardValue('A♠') === 11, 'Should return 11 for "A♠"');
console.assert(getCardValue('A♣') === 11, 'Should return 11 for "A♣"');
console.assert(getCardValue('A♥') === 11, 'Should return 11 for "A♥"');
console.assert(getCardValue('A♦') === 11, 'Should return 11 for "A♦"');
console.assert(
  (() => {
    try {
      getCardValue('X♠');
      return false;
    } catch (error) {
      return error.message === 'Invalid card rank.';
    }
  })(),
  'Should throw an error for "X♠"'
);
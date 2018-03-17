const quicksort = require('../src/quicksort');
const assert = require('assert');

describe('quicksort', () => {
  it('should handle an empty list', () => {
    assert.deepEqual(quicksort([]), []);
  });

  it('should handle a list of ints', () => {
    assert.deepEqual(
      quicksort([5, 3, 7, 2, 7, 9, 1]),
      [1, 2, 3, 5, 7, 7, 9],
    );
  });

  it('should handle a list of strings', () => {
    assert.deepEqual(
      quicksort(['foo', 'bar', 'baz', 'bang', 'foo', 'qqq']),
      ['bang', 'bar', 'baz', 'foo', 'foo', 'qqq'],
    );
  });
});

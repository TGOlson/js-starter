const merge = arrays => arrays.reduce((acc, array) => acc.concat(array), []);

const partition = (xs, f) => xs.reduce(([left, right], x) => {
  if (f(x)) {
    return [left.concat(x), right];
  }

  return [left, right.concat(x)];
}, [[], []]);

const quicksort = ([pivot, ...xs]) => {
  if (pivot === undefined) return xs;

  const [left, right] = partition(xs, x => x < pivot);

  return merge([
    quicksort(left),
    [pivot],
    quicksort(right),
  ]);
};


module.exports = quicksort;

const tail = xs => xs[xs.length - 1];
const init = xs => xs.slice(0, xs.length - 1);

const merge = arrays => arrays.reduce((acc, array) => acc.concat(array), []);

const partition = (xs, f) => xs.reduce(([left, right], x) => {
  if (f(x)) {
    return [left.concat(x), right];
  }

  return [left, right.concat(x)];
}, [[], []]);

const quicksort = (xs) => {
  if (xs.length === 0) return xs;

  const pivot = tail(xs);
  const rest = init(xs);
  const [left, right] = partition(rest, x => x < pivot);

  return merge([quicksort(left), [pivot], quicksort(right)]);
};


module.exports = quicksort;

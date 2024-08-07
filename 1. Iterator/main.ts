/* -------------------------------------------------------------------------- */
/*                      1. Implementation with Iterators                      */
/* -------------------------------------------------------------------------- */
console.log("%c\nIterator Implementation", "font-size: 16px");
class NumRange {
  start: number;
  end: number;
  step: number;

  constructor(start: number, end: number, step: number) {
    this.start = start;
    this.end = end;
    this.step = step;
  }

  [Symbol.iterator]() {
    let index = this.start;

    return {
      next: () => {
        if (index <= this.end) {
          const result = { value: index, done: false };
          index += this.step;
          return result;
        }

        return { value: undefined, done: true };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

const myRange = new NumRange(1, 10, 2);

// Testing --> for ... of
for (const number of myRange) {
  console.log(number);
}

// Testing --> spread operator
console.log(...myRange);

// Testing --> iterator.next()
const iterator1 = myRange[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

/* -------------------------------------------------------------------------- */
/*                  2. Implementation with Generator Function                 */
/* -------------------------------------------------------------------------- */
console.log("%c\nGenerator Function Implementation", "font-size: 16px");

function* range(start: number, end: number, step: number) {
  for (start; start <= end; start += step) {
    yield start;
  }
}

// Testing --> for ... of
for (const number of range(1, 10, 2)) {
  console.log(number);
}

// Testing --> spread operator
console.log(...range(1, 10, 2));

// Testing --> iterator.next()
const iterator2 = range(1, 10, 2)[Symbol.iterator]();
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

import myArray, {
  // methods,
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  someNumbsGreaterThanZero,
  allNumbersGreaterThanZero,
  evensOnlyAndDoubleArray,
  doubleLikes,
} from '../app'
import { TestScheduler } from 'jest'

describe('originalArray Test', () => {
  test('originalArray should return itself', ('', () => {
    expect(originalArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  })
  )
});


describe('doubleArray Test', () => {
  test('doubleArray should return each number *2', () => {
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8]);
  })
})

describe('evensOnlyArray Test', () => {
  test('grab each even number on the array and return it', () => {
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4]);
  })
})

describe('arraySum Test', () => {
  test('add all numbers on an array together and return total', () => {
    expect(arraySum([1,2,3,4])).toEqual(10);
  })
})

describe('allNumbersGreaterThanZero Test', () => {
  test('print true if all numbers in array are greater than 0', () => {
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true);
  })
})


describe('someNumbsGreaterThanZero Test', () => {
  test('print true if some numbers in array are greater than 0', () => {
    expect(someNumbsGreaterThanZero([1,2,3,4])).toEqual(true);
  })
})

// describe('evensOnlyAndDoubleArray Test', () => {
//   test('print even numbs and double them', () => {
//     expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8]);
//   })
// })


// describe('doubleLikes Test', () => {
//   test('expect double likes to equal the same array names with likes *2', () => {
//     expect(doubleLikes(artists)).toEqual(artistDoubled);
//   })
// })

// artists = [
//   {name:'a', likes:100},
//   {name:'b', likes:120},
//   {name:'c', likes:110},
// ]

// artistDoubled = [
//   {name:'a', likes: 200},
//   {name:'b', likes: 240},
//   {name:'c', likes: 220},
// ]


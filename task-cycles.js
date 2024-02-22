// 1 =================================
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Your code:
export const arrayOfMultiples = (num, length) => {
    // ... write code ...
    let output = [];
    for (let i = 1; i <= length; i++) {
        output.push(num * i);
    }
    return output;
};

// 2 =================================
// Change direction of array
// TIP: Check if there is function which can help you https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Example:
// changeDirection([0, 1, 2, 3]) ➞ [3, 2, 1, 0]
// changeDirection([]) ➞ []
// changeDirection([1, 2]) ➞ [2, 1]

// Your code:
export const changeDirection = (array) => {
// ... write code ...
    let bigger = [];
    for (let i = 0; i < array.length; i++) {
        bigger.push(array[array.length - 1 - i]);
    }
    return bigger;
};

// 3 =================================
// Create function that takes two arrays and return object with two keys - bigger array, sum all numbers
// Examples
// biggerArray([1,2,3,4,5], [50,50]) ➞ { array: [50,50], sum: 100 }
// biggerArray([1,2,3], [2,3,4]) ➞ { array: [2,3,4], sum: 9 }

// Your code:
export const biggerArray = (array1, array2) => {
// ... write code ...
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < array1.length; i++) {
        firstSum += array1[i];
    }

    for (let i = 0; i < array2.length; i++) {
        secondSum += array2[i];
    }

    const objCreator = (array, sum) => {
        return {
            array,
            sum
        };
    };

    let biggerArray = firstSum > secondSum ? array1 : array2;

    return objCreator(biggerArray, firstSum > secondSum ? firstSum : secondSum);
};
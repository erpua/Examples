/*
function centuryFromYear(year) {
    return parseInt((year - 1) / 100) + 1;
}
*/



/*
Given the string, check if it is a palindrome.

A palindrome is a string that reads the same left-to-right and right-to-left.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
*/


/*
function checkPalindrome(inputString) {

    const palindrome = inputString.split("").reverse().join("");

    if (palindrome === inputString) return true;
    else return false;

}
console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abaac"));
console.log(checkPalindrome("a"));
*/



/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

//const inputArray = [3, 6, -2, -5, 7, 3];




/*
function adjacentElementsProduct(inputArray) {

    var x = 0;
    var y = 0;
    var z = 0;

    for (var i = 0; i < inputArray.length; i++) {

        x = inputArray[i];
        y = inputArray[i + 1];

        if (x * y > z) {

            z = x * y;

            console.log("x:", x);
            console.log("y:", y);
            console.log("z:", z);
        };
    };
    return z;
};

console.log(adjacentElementsProduct(inputArray));
*/
/*
const inputArray = [-23, 4, -3, 8, -12];

function adjacentElementsProduct(inputArray) {

    let max = inputArray[0] * inputArray[1];

    console.log("max", max);

    for (let i = 2; i < inputArray.length; i+= 1){

        console.log("max", max);

        if ((inputArray[i - 1] * inputArray[i]) > max){

            max = inputArray[i - 1] * inputArray[i];

            console.log("max", max);
        }
    }
    return max;
};
console.log(adjacentElementsProduct(inputArray));
*/


/*
Below we will define an n - interesting polygon.Your task is to find the area of a polygon for a given n.

    A 1 - interesting polygon is just a square with a side of length 1.
    An n - interesting polygon is obtained by taking the n - 1 - interesting polygon and appending 1 - interesting polygons to its rim,
    side by side.You can see the 1 -, 2 -, 3 - and 4 - interesting polygons in the picture below.

    Example

For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13.

    */
/*

function shapeArea(n) {

    let areaOfPolygon = 1;

    while (n > 1) {

        console.log("n:", n);
        areaOfPolygon += (n - 1) * 4;
        console.log("areaOfPolygon:", areaOfPolygon);

        n -=1;
        console.log("n:", n);
    }

    return areaOfPolygon;
}

console.log(shapeArea(1));
*/



/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
 each statue having an non-negative integer size. Since he likes to make things perfect, 
 he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. 
 He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

const statues = [5, 4, 6];

function makeArrayConsecutive2(statues) {

    statues.sort();

    const max = Math.max(...statues);

    const min = Math.min(...statues);

    const result = max - min - statues.length + 1;

    return result;
}

console.log("quantity of missing numbers:", makeArrayConsecutive2(statues));
*/

/*
Given a sequence of integers as an array, 
determine whether it is possible to obtain a strictly increasing sequence 
by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing
 if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].



function almostIncreasingSequence(sequence) {
    let counter = 0
    for (let i = 1; i < sequence.length; i += 1) {
        if (sequence[i] <= sequence[i - 1]) {
            counter += 1;
            if (counter > 1) {
                return false;
            };
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            };
        };
    };
    return true;
};

console.log("[1, 3, 2, 1]", almostIncreasingSequence([1, 3, 2, 1]));
console.log("[1, 3, 2]", almostIncreasingSequence([1, 3, 2]));
console.log("[1, 2, 1, 2]", almostIncreasingSequence([1, 2, 1, 2]));
console.log("[3, 6, 5, 8, 10, 20, 15]", almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15]));
console.log("[1, 1, 2, 3, 4, 4]", almostIncreasingSequence([1, 1, 2, 3, 4, 4]));
console.log("[1, 4, 10, 4, 2]", almostIncreasingSequence([1, 4, 10, 4, 2]));
console.log("[10, 1, 2, 3, 4, 5]", almostIncreasingSequence([10, 1, 2, 3, 4, 5]));
console.log("[1, 1, 1, 2, 3]", almostIncreasingSequence([1, 1, 1, 2, 3]));
console.log("[0, -2, 5, 6]", almostIncreasingSequence([0, -2, 5, 6]));
console.log("[1, 2, 3, 4, 5, 3, 5, 6]", almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]));
console.log("[40, 50, 60, 10, 20, 30]", almostIncreasingSequence([40, 50, 60, 10, 20, 30]));
console.log("[1, 1]", almostIncreasingSequence([1, 1]));
console.log("[1, 2, 5, 3, 5]", almostIncreasingSequence([1, 2, 5, 3, 5]));
console.log("[1, 2, 5, 5, 5]", almostIncreasingSequence([1, 2, 5, 5, 5]));
console.log("[10, 1, 2, 3, 4, 5, 6, 1]", almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6, 1]));
console.log("[1, 2, 3, 4, 3, 6]", almostIncreasingSequence([1, 2, 3, 4, 3, 6]));
console.log("[1, 2, 3, 4, 99, 5, 6]", almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]));
console.log("[123, -17, -5, 1, 2, 3, 12, 43, 45]", almostIncreasingSequence([123, -17, -5, 1, 2, 3, 12, 43, 45]));
console.log("[3, 5, 67, 98, 3]", almostIncreasingSequence([3, 5, 67, 98, 3]));
*/

//MATRIX ELEMENT SUM

/*
After becoming famous, 
the CodeBots decided to move into a new building together. 
Each of the rooms has a different cost, and some of them are free,
 but there's a rumour that all the free rooms are haunted!
  Since the CodeBots are quite superstitious,
   they refuse to stay in any of the free rooms,
    or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers,
 where each value represents the cost of the room, 
 your task is to return the total sum of all rooms that are suitable for the CodeBots
  (ie: add up all the values that don't appear below a 0).

Example

For

matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]
the output should be
matrixElementsSum(matrix) = 9.

const matrix = [[0, 1, 1, 2],
                [0, 5, 0, 0],
                [2, 0, 3, 3]];

function matrixElementsSum(matrix) {

    let total = 0;
    for (let i = 0; i < matrix[0].length; i += 1)
        for (let j = 0; j < matrix.length; j += 1) {
            console.log("matrix[j]", matrix[j]);
            console.log("matrix[i]", matrix[i]);
            console.log("matrix[j][i] before condition", matrix[j][i]);
            if (matrix[j][i] == 0) {
                console.log("matrix[j][i] from inside of condition:", matrix[j][i]);
                break;
            } else {
                total += matrix[j][i];
                console.log("total:", total);
            }
        }
    return total;
}

console.log("matrix sum result:", matrixElementsSum(matrix));

*/



//ALL LONGEST STRINGS
/*
Given an array of strings, 
return another array containing all of its longest strings.

    Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].


//const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
const inputArray = ["a","abc","cbd","zzzzzz","a","abcdef","asasa","aaaaaa"];

function allLongestStrings(inputArray) {

    let longestValuesNewArray = [];
    let startCounter = 0;

    for (let i = 0; i < inputArray.length; i += 1) {

        if (inputArray[i].length > startCounter) {

            longestValuesNewArray.length = 0;

            longestValuesNewArray.push(inputArray[i]);

            startCounter = inputArray[i].length;
        }
        else if (inputArray[i].length == startCounter) {

            longestValuesNewArray.push(inputArray[i]);
        };
    };
    return longestValuesNewArray;
};

console.log(allLongestStrings(inputArray));
*/

//COMMON CHARACTER COUNT 
/*
Given two strings, find the number of common characters between them.

    Example

For s1 = "aabcc" and s2 = "adcaa", the output should be

commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

    Input / Output

    [execution time limit]4 seconds(js)

    [input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.



const string1 = "aabcc";
const string2 = "adcaa";

function commonCharacterCount(string1, string2) {

    let amount = 0;
    const arrOfString1 = string1.split('');
    console.log("arrOfString1 declared:", arrOfString1);
    const arrOfString2 = string2.split('');
    console.log("arrOfString2 declared:", arrOfString2);

    for (let i = 0; i < arrOfString1.length; i += 1) {

        let index = arrOfString2.indexOf(arrOfString1[i]);
        console.log("arrOfString1[i] from the loop:", arrOfString1[i]);
        console.log("arrOfString2.indexOf(arrOfString1[i]):", index);
        if (index !== -1) {
            console.log("arr2.indexOf(arrOfString1[i]) from condition:", index);
            arrOfString2.splice(index, 1);
            console.log("arrOfString2 from condition equals:", arrOfString2);
            amount += 1
        }
    }
    return amount;
};
console.log("sum of all matches:", commonCharacterCount(string1, string2));
*/

/*
Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum 
of the first half of the digits is equal to the sum of 
the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.

//const n = 1230;
const n = 239017;

function plus(inputArray) {
    return inputArray.reduce((prev, current) => prev += parseInt(current), 0);
}

function isLucky(n) {

    const newArray = String(n).split('');
    console.log("newArray:", newArray);

    const halfFirst = plus(newArray.slice(0, newArray.length / 2));
    console.log("newArray.slice(0, newArray.length / 2)", newArray.slice(0, newArray.length / 2));
    console.log("halfFirst:", halfFirst);

    const halfSecond = plus(newArray.slice(newArray.length / 2));
    console.log("newArray.slice(newArray.length / 2):", newArray.slice(newArray.length / 2));
    console.log("halfSecond:", halfSecond);

    return halfFirst === halfSecond;
}

console.log(isLucky(n));
*/



//SORT BY HEIGHT
/*

Some people are standing in a row in a park.
here are trees between them which cannot be moved.
Your task is to rearrange the people by their heights in a non - descending order without moving the trees.
People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/


/*
const a = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(a) {

    let copyArray = a;

    let newArray = [];

    copyArray.forEach(element => {
        if ((element * -1) === 1) {
            newArray.push(element);
        } else if ((element * -1) != 1) {

            let element = max;
        }
    });

    return newArray;
};


const a = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];
//const a = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(a) {

    let newArray = a;
    let sortedArray = a.filter(i => i !== -1).sort((a,b) => (a-b));
    console.log("sortedArray:", sortedArray);
    console.log("newArray:", newArray);

    for (let i = 0; i < a.length; i += 1) {
        if (newArray[i] !== -1) {
            newArray[i] = sortedArray.shift();
            console.log("sortedArray:", sortedArray);
            console.log("newArray[i]:", newArray[i]);
        }
    };
    return newArray;
};

console.log(sortByHeight(a));
*/







//reverseInParentheses

/*
Write a function that reverses characters in (possibly nested) 
parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".





const inputString = "foo(bar)baz";

function reverse(inputString) {
    let length = inputString.length;
    let openBracketInd = inputString.lastIndexOf("(");

    // The characters before the opening bracket
    let beforeBracket = inputString.slice(0, openBracketInd + 1);

    // The characters before the opening bracket
    let afterBracket = inputString.slice(openBracketInd + 1, length);

    // To get the index of the closing bracket we add the characters before the bracket to the index of the first closing
    // bracket in the string after the opening bracket
    let closeBracketInd = beforeBracket.length + afterBracket.indexOf(")");

    // Once we have the indexes, we're going to slice the string to remove the brackets
    let firstPart = inputString.slice(0, openBracketInd);
    let secondPart = inputString.slice(closeBracketInd + 1, length);
    let middle = inputString.slice(openBracketInd + 1, closeBracketInd);

    // We reverse the string between the brackets
    middle = middle.split('').reverse().join('');

    // And finally we join the parts and return the string
    //return firstPart + middle + secondPart;
    return firstPart + middle + secondPart;
}

function reverseInParentheses(inputString) {
    // We keep running the function while there's an opening bracket in the string
    while (inputString.indexOf("(") !== -1) {
        inputString = reverse(inputString);
    }
    return inputString;
}

console.log("results:",reverseInParentheses(inputString));
*/






//ALTERNATING SUM 
/*
Several people are standing in a row and need to be divided into two teams. 
The first person goes into team 1, the second goes into team 2, 
the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. 
Return an array of two integers, where the first element is the total weight of team 1, 
and the second element is the total weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be
alternatingSums(a) = [180, 105].

const a = [50, 60, 60, 45, 70];

function alternatingSums(a) {

    let newArray = [];

    let evenNumbersOfIndex = 0;

    let oddNumbersOfIndex = 0;

    for (let i = 0; i < a.length; i += 1) {
        //console.log("index:", i);
        //console.log("a[i]:", a[i]);
        if (i % 2 != 0) {
            oddNumbersOfIndex += a[i];
        } else {
            evenNumbersOfIndex += a[i];
        }
    }
    newArray.push(evenNumbersOfIndex, oddNumbersOfIndex);
    return newArray;
};

console.log(alternatingSums(a));
*/




//TWO DIGITS ADD

/*
You are given a two - digit integer n.
Return the sum of its digits.

    Example

For n = 29, the output should be
addTwoDigits(n) = 11.

const n = 29;

function addTwoDigits(n) {
    let num = n.toString().split("");
    console.log("num:", num)
    return parseInt(num[0]) + parseInt(num[1]);
};

console.log(addTwoDigits(n));
*/




//LARGEST NUMBER 

/*
Given an integer n,
return the largest number that contains exactly n digits.

    Example

For n = 2, the output should be
largestNumber(n) = 99.
*/


/*
function largestNumber(n) {
    return Math.pow(10, n) - 1;
};
console.log(largestNumber(n));


or  

const n = 2;

function largestNumber(n) {

    let newValue = 0;
    let maxValue = 0;

    for (let i = 0; i <= 9; i += 1) {
        if (i > maxValue) {
            maxValue = i;
        }
    };

    for(let i = 0; i < n; i += 1) {
        newValue = newValue + maxValue.toString() - 0;
    };

    return newValue;
};

console.log(largestNumber(n));
*/







//CANDIES

/*

n children have got m pieces of candy.
They want to eat as much candy as they can,
 but each child must eat exactly the same amount of candy as any other child.
 Determine how many pieces of candy will be eaten by all the children together.
 Individual pieces of candy cannot be split.

    Example

For n = 3 and m = 10, the output should be
candies(n, m) = 9.

Each child will eat 3 pieces.So the answer is 9.
*/

//MAIN SOLUTION
/*
const n = 3;
const m = 15;

function candies(n, m) {

    console.log("quantity of children:", n);
    console.log("quantity of candies:", m);

    if (m % n === 0) {
        return console.log(`${n} children have eaten ${m / n * n} candies!`);
    } else {
        const quantityOfEatenCandiesPerChild = parseInt(m / n);
        console.log("quantityOfEatenCandiesPerChild:", quantityOfEatenCandiesPerChild);
        const quantityOfEatenCandiesByAllChildren = console.log(`${n} children have eaten ${quantityOfEatenCandiesPerChild * n} candies!`);
        return quantityOfEatenCandiesByAllChildren;
    };
};

candies(n, m);
*/

//codesignal way

/*
const n = 3;
const m = 10;

function candies(n, m) {

    //console.log("quantity of children:", n);
    //console.log("quantity of candies:", m);

    if (m % n === 0) {
        return m / n * n;

        //return console.log(`${n} children have eaten ${m / n * n} candies!`);
    } else {
        const quantityOfEatenCandiesPerChild = parseInt(m / n);
        //console.log("quantityOfEatenCandiesPerChild:", quantityOfEatenCandiesPerChild);
        //const quantityOfEatenCandiesByAllChildren = console.log(`${n} children have eaten ${quantityOfEatenCandiesPerChild * n} candies!`);
        const quantityOfEatenCandiesByAllChildren = quantityOfEatenCandiesPerChild * n;
        return quantityOfEatenCandiesByAllChildren;
    };
};

candies(n, m);
*/

/*
//other decisions
function candies(n, m) {
    if (m % n === 0) {
        return console.log(`${n} children have eaten ${m/n} candies!`);
    } else {
        const leftFromDivision = m - (m % n);
        console.log("tempSub:", leftFromDivision);
        const numEach = leftFromDivision / n;
        console.log("numEach:", numEach);
        const qweqwe = console.log(`${n} children have eaten ${numEach * n} candies!`);
        return qweqwe;
    };
}
candies(n, m);

or
function candies(n, m) {
    return m - m % n;
}

console.log(candies(n,m));
*/






//SEATS IN THEATER
/*
Your friend advised you to see a new performance in the most 
popular theater in the city.He knows a lot about art and his
 advice is usually good, but not this time: the performance 
 turned out to be awfully dull.It's so bad you want to sneak out,
  which is quite simple, especially since the exit is located right 
  behind your row to the left. All you need to do is climb 
  over your seat and make your way to the exit.

The main problem is your shyness:
 you're afraid that you'll end up blocking the view
 (even if only for a couple of seconds) of all the people who sit
  behind you and in your column or the columns to your left.
  To gain some courage, you decide to calculate the number of such 
  people and see if you can possibly make it to the exit
   without disturbing too many people.

Given the total number of rows and columns in the 
theater(nRows and nCols, respectively), and the row and column 
you're sitting in, return the number of people who sit strictly 
behind you and in your column or to the left, assuming all seats are occupied.

Example

For nCols = 16, nRows = 11, col = 5, and row = 3, the output should be
seatsInTheater(nCols, nRows, col, row) = 96.

const nCols = 16;
const nRows = 11;
const col = 5;
const row = 3;

function seatsInTheater(nCols, nRows, col, row) {

    let allBotheredPeople = 0;

    const amountOfPeopleBotheredFromBack = nRows - row;
    console.log(amountOfPeopleBotheredFromBack);

    const amoutOfPeopBotheredFromLeft = nCols - col + 1;
    console.log(amoutOfPeopBotheredFromLeft);

    allBotheredPeople = amountOfPeopleBotheredFromBack * amoutOfPeopBotheredFromLeft;

    return allBotheredPeople;
};

console.log(seatsInTheater(nCols, nRows, col, row));
*/







//MAX MULTIPLE
/*
Given a divisor and a bound, find the largest integer N such that:

N is divisible by divisor.
N is less than or equal to bound.
N is greater than 0.
It is guaranteed that such a number exists.

    Example

For divisor = 3 and bound = 10, the output should be
maxMultiple(divisor, bound) = 9.

The largest integer divisible by 3 and not larger than 10 is 9.

const divisor = 3;
const bound = 10;

function maxMultiple(divisor, bound) {
    let theLargestInt;

    for(let i = 0; i <= bound; i += 1) {
        if(i % divisor === 0 && i > 0) {
            theLargestInt = i;
        }
    }
    return theLargestInt;
};

console.log(maxMultiple(divisor, bound));
*/




//CIRCLE OF NUMBERS
/*
Consider integer numbers from 0 to n - 1 written down 
along the circle in such a way that the distance between 
any two neighboring numbers is equal(note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written
 in the radially opposite position to firstNumber.

    Example

For n = 10 and firstNumber = 2, the output should be
circleOfNumbers(n, firstNumber) = 7.


const n = 10;
const firstNumber = 2;

function circleOfNumbers(n, firstNumber) {

    console.log("quantity of numbers in circle:", n);

    console.log("the required number:", firstNumber);

    const formula = (firstNumber + n / 2) % n;

    return formula;
}

console.log("the opposite number:", circleOfNumbers(n, firstNumber));
*/




//LATE RIDE (HOURS N MINUTES CONVERTED INTO PARSE AND SUMMED)
/*
One night you go for a ride on your motorcycle.
At 00: 00 you start your engine, and the built -i
n timer automatically begins counting the length of
 your ride, in minutes.Off you go to explore the neighborhood.

When you finally decide to head back, you realize there's 
a chance the bridges on your route home are up, leaving you stranded! 
Unfortunately, you don't have your watch on you and don't
 know what time it is. All you know thanks to the bike's 
 timer is that n minutes have passed since 00: 00.

Using the bike's timer, calculate the current time. 
Return an answer as the sum of digits that the digital timer
 in the format hh:mm would show.

Example

For n = 240, the output should be
lateRide(n) = 4.

Since 240 minutes have passed, the current time is 04: 00.
The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.

For n = 808, the output should be
lateRide(n) = 14.

808 minutes mean that it's 13:28 now, so the answer should be 1 + 3 + 2 + 8 = 14.


//const n = 240;
const n = 808;

function lateRide(n) {

    const theSumOfHoursMinutes = parseInt((n / 60) / 10) + parseInt((n / 60) % 10) + parseInt((n % 60) / 10) + parseInt((n % 60) % 10);

    return theSumOfHoursMinutes;
};

console.log("the sum of hh:mm is:", lateRide(n));

//console.log( 67 % 6730);
*/



//PHONE CALL 

/*
Some phone usage rate may be described as follows:

first minute of a call costs min1 cents,
    each minute from the 2nd up to 10th(inclusive)
     costs min2_10 cents
each minute after 10th costs min11 cents.
You have s cents on your account before the call.
What is the duration of the longest call
(in minutes rounded down to the nearest integer) you can have ?

    Example

For min1 = 3, min2_10 = 1, min11 = 2, and s = 20, 
the output should be
phoneCall(min1, min2_10, min11, s) = 14.

Here's why:

the first minute costs 3 cents, which 
leaves you with 20 - 3 = 17 cents;
the total cost of minutes 2 through 10 is 1 * 9 = 9, 
so you can talk 9 more minutes and still have 17 - 9 = 8 cents;
each next minute costs 2 cents, which means that 
you can talk 8 / 2 = 4 more minutes.
    Thus, the longest call you can make 
    is 1 + 9 + 4 = 14 minutes long.



const min1 = 10;
const min2_10 = 1;
const min11 = 2;
const s = 22;

function phoneCall(min1, min2_10, min11, s) {

    if (s < min1) {
        return 0;
    }
    for (let i = 2; i <= 10; i += 1) {
        if (s < min1 + min2_10 * (i - 1)) {
            return i - 1;
        }
    }
    return 10 + (s - min1 - min2_10 * 9) / min11;;
};
alert(`you can speak ${parseInt(phoneCall(min1, min2_10, min11, s))} minutes`);
*/




//RICH NEXT LEVEL

/*
You are playing an RPG game.
Currently your experience points(XP) total is equal to experience.
To reach the next level your XP should be at least at threshold.I
f you kill the monster in front of you, you will gain more
 experience points in the amount of the reward.

Given values experience, threshold and reward, 
check if you reach the next level after killing the monster.

    Example

For experience = 10, threshold = 15, and reward = 5, the output should be
reachNextLevel(experience, threshold, reward) = true;
For experience = 10, threshold = 15, and reward = 4, the output should be
reachNextLevel(experience, threshold, reward) = false.

const experience = 10;
const threshold = 15;
const reward = 7;

function reachNextLevel(experience, threshold, reward) {
    if ((reward + experience) >= threshold) return true;
     return false;
};

console.log(reachNextLevel(experience, threshold, reward));
*/

//KNAPSACK LIGHT
/*
You found two items in a treasure chest! 
The first item weighs weight1 and is worth value1, 
and the second item weighs weight2 and is worth value2.
What is the total maximum value of the items you can take with you, 
assuming that your max weight capacity is maxW and you can't come back for the items later?

Note that there are only two items and you can't 
bring more than one item of each type, i.e. you can't take two first items or two second items.

    Example

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) = 10.

You can only carry the first item.

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) = 16.

You're strong enough to take both of the items with you.

For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) = 7.

You can't take both items, but you can take any of them.



const value1 = 12;
const weight1 = 4;
const value2 = 11;
const weight2 = 5;
const maxW = 6;

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let result = 0;
    if (maxW < weight1 && maxW < weight2) result = 0;
    else if (maxW < weight1 && maxW > weight2) result = value2;
    else if (maxW > weight1 && maxW < weight2) result = value1;
    else if (maxW === weight1 && maxW > weight2) {
        if(value1 > value2) result = value1;
        else result = value2;
    }
    else if (maxW === weight1 && maxW < weight2) result = value1;
    else if (maxW === weight2 && maxW < weight1) result = value2;
    else if (maxW === weight2 && maxW > weight1) {
        if (value1 > value2) result = value1;
        else result = value2;
    }
    else if (maxW === weight2 && maxW === weight1) {
        if (value1 > value2) result = value1;
        else if(value1 < value2) result = value2;
        else if(value1 === value2) result = value1;
    }
    else if (maxW >= (weight1 + weight2)) result = value1 + value2;
    else if (maxW > weight1 && maxW > weight2 && maxW < (weight1 + weight2)) {
        if (value1 > value2) result = value1;
         else result = value2;
    }
    return result;
};

console.log(knapsackLight(value1, weight1, value2, weight2, maxW));



//another one
function knapsackLight(value1, weight1, value2, weight2, maxW) {
    return weight1 + weight2 <= maxW ? value1 + value2 : value1 > value2 && weight1 <= maxW ? value1 : weight2 <= maxW ? value2 : weight1 <= maxW ? value1 : 0;
}
*/



//Extra number
/*
You're given three integers, a, b and c. 
It is guaranteed that two of these integers are equal to each other. 
What is the value of the third integer?

Example

For a = 2, b = 7, and c = 2, the output should be
extraNumber(a, b, c) = 7.

The two equal numbers are a and c.The third number(b) equals 7, which is the answer.

const a = 9;
const b = 7;
const c = 7;

function extraNumber(a, b, c) {
    if (a === b) return c;
    if (a === c) return b;
    if (b === c) return a;
};

console.log(extraNumber(a, b, c));

//extraNumber = (a, b, c) => a === b ? c : a === c ? b : a;
*/






//IS INFINITE PROCESS

/*
Given integers a and b, 
determine whether the following pseudocode
 results in an infinite loop

while a is not equal to b do
    increase a by 1
decrease b by 1
Assume that the program is executed on a 
virtual machine which can store arbitrary 
long numbers and execute forever.

    Example

For a = 2 and b = 6, the output should be
isInfiniteProcess(a, b) = false;
For a = 2 and b = 3, the output should be
isInfiniteProcess(a, b) = true.

const a = 2;
const b = 6;

function isInfiniteProcess(a, b){

    if (b < a) return true

    if ((b - a) % 2 == 0) return false;

    else return true
};

console.log(isInfiniteProcess(a, b));
*/



//ARITHMETIC EXPRESSION

/*
Consider an arithmetic expression of the form a#b = c.
Check whether it is possible to replace # with one 
of the four signs: +, -, * or / to obtain a correct expression.

    Example

For a = 2, b = 3, and c = 5, the output should be
arithmeticExpression(a, b, c) = true.

We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.

For a = 8, b = 2, and c = 4, the output should be
arithmeticExpression(a, b, c) = true.

We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.

For a = 8, b = 3, and c = 2, the output should be
arithmeticExpression(a, b, c) = false.

8 + 3 = 11 ≠ 2;
8 - 3 = 5 ≠ 2;
8 * 3 = 24 ≠ 2;
8 / 3 = 2.(6) ≠ 2.
So the answer is false.


const a = 2;
const b = 3;
const c = 5;

function arithmeticExpression(a, b, c) {
    //if ((a + b === c) || (a - b === c) || (a * b === c) || (a / b === c)) return true;
    //return false;
    return (a + b === c) || (a - b === c) || (a * b === c) || (a / b === c);
};

console.log(arithmeticExpression(a, b, c));

*/




//TENNIS SET

/*
In tennis, the winner of a set is based on how many games each player wins.
The first player to win 6 games is declared the winner unless their opponent 
had already won 5 games, in which case the set continues until one of the 
players has won 7 games.

Given two integers score1 and score2, your task is to determine if 
it is possible for a tennis set to be finished with a final score of score1: score2.

    Example

For score1 = 3 and score2 = 6, the output should be
tennisSet(score1, score2) = true.

Since player 1 hadn't reached 5 wins, the set ends once player 2 has won 6 games.

For score1 = 8 and score2 = 5, the output should be
tennisSet(score1, score2) = false.

Since both players won at least 5 games, the set would've ended once one of them won the 7th one.

For score1 = 6 and score2 = 5, the output should be
tennisSet(score1, score2) = false.

This set will continue until one of these players wins their 7th game, so this can't be the final score


const score1 = 7;
const score2 = 7;

function tennisSet(score1, score2) {
    if (score1 == 7) {
        return score2 >= 5 && score2 < 7;
    };
    if (score2 == 7) {
        return score1 >= 5 && score1 < 7;
    };
    if (score1 == 6) {
        return score2 < 5;
    };
    if (score2 == 6) {
        return score1 < 5;
    };
    return false;
}

console.log(tennisSet(score1, score2));
*/




//WILL YOU?

/*
Once Mary heard a famous song, and a line from it stuck in her head.
That line was "Will you still love me when I'm no longer young and beautiful?".
Mary believes that a person is loved if and only if he / she is both young and beautiful, 
but this is quite a depressing thought, so she wants to put her belief to the test.

Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.

A person contradicts Mary's belief if one of the following statements is true:

they are young and beautiful but not loved;
they are loved but not young or not beautiful.
    Example

For young = true, beautiful = true, and loved = true, the output should be
willYou(young, beautiful, loved) = false.

Young and beautiful people are loved according to Mary's belief.

For young = true, beautiful = false, and loved = true, the output should be
willYou(young, beautiful, loved) = true.

Mary doesn't believe that not beautiful people can be loved



const young = true;
const beautiful = true;
const loved = true;

function willYou(young, beautiful, loved) {
    if (young && beautiful && loved) return false;
    else if (young && beautiful && !loved)return true;
    else if((young && beautiful) || loved) return true;
    else return false;
};

console.log(willYou(young, beautiful, loved));


const young = true;
const beautiful = true;
const loved = true;

function willYou(young, beautiful, loved) {
    return (young && beautiful) != loved;
}

console.log(willYou(young, beautiful, loved));
*/



//METRO CARD

/*
You just bought a public transit card that allows you to ride 
the Metro for a certain number of days.

Here is how it works: upon first receiving the card, 
the system allocates you a 31 - day pass, 
which equals the number of days in January.
The second time you pay for the card, your pass is extended by 28 days, 
i.e.the number of days in February(note that leap years are not considered),
 and so on.The 13th time you extend the pass, you get 31 days again.

You just ran out of days on the card, and unfortunately you've forgotten 
how many times your pass has been extended so far. However, you do remember
 the number of days you were able to ride the Metro during this most recent month.
  Figure out the number of days by which your pass will now be extended,
   and return all the options as an array sorted in increasing order.

Example

For lastNumberOfDays = 30, the output should be
metroCard(lastNumberOfDays) = [31].

There are 30 days in April, June, September and November, 
so the next months to consider are May, July, October or December.
All of them have exactly 31 days, which means that you will definitely get a 
31 - days pass the next time you extend your card.

const lastNumberOfDays = 31;

function metroCard (lastNumberOfDays) {

    let newArray = [];

    if (lastNumberOfDays === 28) {
        newArray.push(31);
    } else if (lastNumberOfDays === 30) {
        newArray.push(31);
    } else if (lastNumberOfDays === 31){
        newArray.push(28, 30, 31);
    }

    return newArray;
};

console.log(metroCard(lastNumberOfDays));
*/

/*
function metroCard(lastNumberOfDays) {
    const result = {
        30: [31],
        28: [31],
        31: [28, 30, 31]
    };
    return result[lastNumberOfDays];
};

//ternar operator
metroCard = (lastNumberOfDays) => lastNumberOfDays < 31 ? [31] : [28, 30, 31];
*/


//LEVEL    3

//KILL K-TH BIT

/*
Implement the missing code, denoted by ellipses.
You may not modify the pre - existing code.
In order to stop the Mad Coder evil genius you need 
to decipher the encrypted message he sent to his minions.
The message contains several numbers that, when typed into a supercomputer, 
will launch a missile into the sky blocking out the sun, 
and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in
 their binary representation.More specifically, in the given number n 
 the kth bit from the right was initially set to 0, but its current 
 value might be different.It's now up to you to write a 
 function that will change the kth bit of n back to 0.

Example

For n = 37 and k = 3, the output should be
killKthBit(n, k) = 33.

3710 = 1001012 ~> 1000012 = 3310.

For n = 37 and k = 4, the output should be
killKthBit(n, k) = 37.

The 4th bit is 0 already(looks like the Mad Coder forgot to encrypt this number), so the answer is still 37.


const n = 37;
const k = 3;

function killKthBit(n, k) {
    const convertedToBinaryAndReversedInArray = n.toString(2).split("").reverse();
    console.log("convertedToBinaryAndReversedInArray:", convertedToBinaryAndReversedInArray);
    for (let i = 0; i <= convertedToBinaryAndReversedInArray.length-1; i += 1) {
        console.log("i + 1", i + 1);
        console.log("(convertedToBinaryAndReversedInArray[i]", convertedToBinaryAndReversedInArray[i]);
        if (((i + 1) === k) && (convertedToBinaryAndReversedInArray[i] == 1)) {
            convertedToBinaryAndReversedInArray[i] = "0";
        };
    };
    console.log("convertedToBinaryAndReversedInArray:", convertedToBinaryAndReversedInArray);
    const reversedInArrayAndConvertedToBinary = convertedToBinaryAndReversedInArray.reverse().map(Number).join("");
    console.log("reversedInArrayAndConvertedToBinary:", reversedInArrayAndConvertedToBinary);
    return parseInt((reversedInArrayAndConvertedToBinary + '').replace(/[^01]/gi, ''), 2);
};
console.log(killKthBit(n, k));
*/



//ARRAY PACKING
/*
You are given an array of up to four non - negative integers,
 each less than 256.

Your task is to pack these integers into one number M in the following way:

The first element of the array occupies the first 8 bits of M;
The second element occupies next 8 bits, and so on.
Return the obtained integer M.

    Note: the phrase "first bits of M" refers to the least 
    significant bits of M - the right - most bits of an integer.
    For further clarification see the following example.

        Example

For a = [24, 85, 0], the output should be
arrayPacking(a) = 21784.

An array[24, 85, 0] looks like[00011000, 01010101, 00000000] in binary.
After packing these into one number we get 00000000 01010101 00011000
(spaces are placed for convenience), which equals to 21784.
*/

/*
const a = [24, 85, 0];

function addLeftZeros(valueToAdd) {
    let maxLength = 8;
    let currentSize = valueToAdd.length;
    let zerosToAdd = maxLength - currentSize; // 3
    let currentArray = Array.from(valueToAdd);
    for (let i = 0; i < zerosToAdd; i += 1) {
        currentArray.unshift('0');
    }
    return currentArray.join('');
}

function arrayPacking(a) {
    let newArray = [];
    let binaryNumberReveresed = 0;
    let resultNumber = 0;
    for (let i = 0; i < a.length; i += 1) {
        let binaredNumber = a[i].toString(2);
        newArray.push(binaredNumber);
        if (newArray[i].length < 8) {
            newArray[i] = addLeftZeros(newArray[i]);
            console.log("newArray[i]:", newArray[i]);
        };
    };
    console.log("newArray:", newArray);
    binaryNumberReveresed = newArray.reverse().join('');
    console.log("binaryNumberReveresed:", binaryNumberReveresed);
    resultNumber = parseInt((binaryNumberReveresed + '').replace(/[^01]/gi, ''), 2);
    
   // Converting Binary to Decimal  Exam  function bin2dec(bin){ return parseInt(bin, 2).toString(10); } 

return resultNumber;
};

console.log(arrayPacking(a));

*/








//RANGE BIT COINT
/*
You are given two numbers a and b where 0 ≤ a ≤ b.
Imagine you construct an array of all the integers from a to b inclusive.
You need to count the number of 1s in the binary representations of all the numbers in the array.

    Example

For a = 2 and b = 7, 
the output should be
rangeBitCount(a, b) = 11.

Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7].
Converting the numbers to binary, we get[10, 11, 100, 101, 110, 111], 
which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.


const a = 2;
const b = 7;

function rangeBitCount(a, b) {

    let total = 0;

    if (a >= 0 && a <= b) {

        for (let i = a; i <= b; i += 1) {
            console.log("i:", i);
            let binaryNumber = i.toString(2);
            console.log(`binaryNumbern of ${i} is ${binaryNumber}`);
            for (let j = 0; j < binaryNumber.length; j += 1) {
                console.log("binaryNumber[j]:", binaryNumber[j]);
                if (binaryNumber[j] == 1) {
                    total += 1;
                }
            }
        };
    };

    return total;
};

console.log(rangeBitCount(a, b));
*/


//SUM OF NUMBERS FROM ARRAY 
/*
const array = [37, 18, 29, 45, 28, 34, 67, 55]

function sumOfTen(array) {

  let newArray = []

  for (let i = 0; i < array.length; i += 1) {
    let lengthG = array[i].toString().split('').map(Number)
    console.log("lengthG:", lengthG)
    for (let j = 0; j < lengthG.length; j += 1) {
      console.log("lengthG[j]:", lengthG[j])
      if (lengthG[j] + lengthG[j + 1] == 10) {
        let convertedToNumbers = lengthG.join('')
        console.log('convertedToNumbers:', convertedToNumbers)
        newArray.push(parseInt(convertedToNumbers))
      }
    }
  }
  return newArray;
}
console.log(sumOfTen(array))
*/



//MIRRORS BITE

/*
Reverse the order of the bits in a given integer.

    Example

For a = 97, the output should be
mirrorBits(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, 
and that is 67 in base 10.

For a = 8, the output should be
mirrorBits(a) = 1.



const a = 97;

function mirrorBits (a) {
    let result = 0;
    let aConvertedToBites = a.toString(2);
    console.log("aConvertedToBites:", aConvertedToBites);

    let reversedA = aConvertedToBites.toString().split("").reverse().map(Number).join("");
    console.log("reversedA:",reversedA)

    result = parseInt(reversedA, 2).toString(10);
    console.log("result:" , result);
    return parseInt(result);
};

console.log(mirrorBits(a));
*/




//SECOND - RIGHTMOST ZERO BIT
/*
Implement the missing code, denoted by ellipses.
You may not modify the pre - existing code.
Presented with the integer n, find the 0 - 
based position of the second rightmost zero bit in its
 binary representation(it is guaranteed that such a bit exists),
  counting from right to left.

Return the value of 2position_of_the_found_bit.

    Example

For n = 37, the output should be
secondRightmostZeroBit(n) = 8.

3710 = 1001012. The second rightmost zero bit is at position 3(0 - based) 
from the right in the binary representation of n.
    Thus, the answer is 23 = 8.
    */

/*
const n = 37;

function secondRightmostZeroBit(n) {

let result = 0;
let counter = 0;
let nConvertedToBinarSystem = n.toString(2);
console.log("nConvertedToBinarSystem:", nConvertedToBinarSystem);

let reversedN = nConvertedToBinarSystem.toString().split("").reverse().map(Number).join("");
console.log("reversedA:", reversedN);
console.log("reversedN.length:", reversedN.length);

for (let i = 0; i < reversedN.length; i += 1) {
    console.log("reversedN[i]:", reversedN[i]);
    console.log("i:", i);
    if (reversedN[i] == 0){
        counter +=1;
        if (counter == 2) { 
            console.log("i:", i);
            result = Math.pow(2, i); 
         };
    };
};
return result;
};
*/

//or 
/*
const n = 1073741824;
function secondRightmostZeroBit(n) {
    return Math.pow(2, n.toString(2).split('').reverse().join("").split("0", 2).join("0").length);
};
console.log(secondRightmostZeroBit(n));
*/

/*
//example

var myString = 'Hello World. How are you doing?';
var splits = myString.split(' ', 3);

console.log(splits);
*/

//swapAdjacentBits
/*
Implement the missing code, denoted by ellipses.You may not modify the pre - existing code.
    You're given an arbitrary 32-bit integer n. Take its binary representation,
    split bits into it in pairs (bit number 0 and 1,
        bit number 2 and 3, etc.) and swap bits in each pair.
    Then return the result as a decimal number.

Example

For n = 13, the output should be
swapAdjacentBits(n) = 14.

1310 = 11012 ~> { 11}{ 01 } 2 ~> 11102 = 1410.

For n = 74, the output should be
swapAdjacentBits(n) = 133.

7410 = 010010102 ~> { 01}{ 00 } { 10 } { 10 } 2 ~> 100001012 = 13310.
Note the preceding zero written in front of the initial number:
since both numbers are 32 - bit integers, they have 32 bits in their binary representation.
The preceding zeros in other cases don't matter, so they are omitted. Here, however, it does make a difference.
//solution 1
const n = 13;

function swapAdjacentBits(n) {
    return (((n & 0x2AAAAAAA) >> 1) | ((n & 0x15555555) << 1));
};

console.log(swapAdjacentBits(n));
*/



/*
const n = 13;

function swapAdjacentBits(n) {
    let resultNumber = 0;
    let newArray = [];
    let numberConvertedToBinar = n.toString(2).split("");
    console.log("numberConvertedToBinar:", numberConvertedToBinar);
    console.log("numberConvertedToBinar.length:", numberConvertedToBinar.length);

    for (let i = 0; i < numberConvertedToBinar.length; i +=1) {
        console.log("numberConvertedToBinar[i]: ", numberConvertedToBinar[i]);
        console.log("i:", i);
        
        if(i % 2 != 0) {
            let slicedNumbers = numberConvertedToBinar.slice(i-1,i+1);
            console.log(" slicedNumbers:", slicedNumbers);
            newArray.push(slicedNumbers);
            console.log("newArray:", newArray);
            slicedNumbers.reverse();
            console.log("reversedSlicedNumbers:", slicedNumbers);

            newArray[0].join("")
            console.log("joined New Array:", newArray);
        };
        
    };
    resultNumber = parseInt(numberConvertedToBinar, 2).toString(10);
    console.log("resultNumber:", resultNumber);

    return parseInt(resultNumber);
};


console.log(swapAdjacentBits(n));

*/

/*
const n = 13;

function swapAdjacentBits(n) {
    let to_binary = n.toString(2);
    let to_add = 0
    let to_arr = [];
    if (to_binary.length % 2 != 0) {
        for (i = 1; i <= 8 - to_binary.length; i++) {
            to_binary = 0 + to_binary
        }
    }

    // console.log(to_add);
    return to_binary
}

console.log(swapAdjacentBits(n));
*/



//DIFFERENT RIGHT MOST BIT 
/*
Implement the missing code, denoted by ellipses.
You may not modify the pre - existing code.
    You're given two integers, n and m. 
    Find position of the rightmost bit in which they differ in their binary 
    representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit(0 - based).

    Example

For n = 11 and m = 13, the output should be
differentRightmostBit(n, m) = 2.

1110 = 10112, 1310 = 11012, the rightmost bit in which they
 differ is the bit at position 1(0 - based) from the right in the binary representations.
So the answer is 21 = 2.

For n = 7 and m = 23, the output should be
differentRightmostBit(n, m) = 16.

710 = 1112, 2310 = 101112, i.e.

00111
10111
So the answer is 24 = 16.
*/

/* const n = 11
const m = 13

function compliteBinaryNumber(valueToAdd) {
  let maxLength = 8
  const numberToBinary = valueToAdd.toString(2)
  console.log("numberToBinary:", numberToBinary);
  console.log("Array.from(numberToBinary):", Array.from(numberToBinary));

  let currentSize = numberToBinary.length

  let zerosToAdd = maxLength - currentSize 

  console.log('zerosToAdd:', zerosToAdd)

  if (zerosToAdd > 0) {
    let currentArray = Array.from(numberToBinary)
    for (let i = 0; i < zerosToAdd; i += 1) {
      currentArray.unshift('0')
    }
    return currentArray
  } else {
    return Array.from(numberToBinary)
  }
}

console.log('compliteBinaryNumber:', compliteBinaryNumber(n))

function differentRightmostBit(n, m) {
  let newNumber = 0;

  let accomplishedWithAllZerosBinaryN = compliteBinaryNumber(n)
  console.log('accomplishedBinaryN:', accomplishedWithAllZerosBinaryN)

  let accomplishedWithAllZerosBinaryM = compliteBinaryNumber(m)
  console.log('accomplishedBinaryM:', accomplishedWithAllZerosBinaryM)

  const reversedN = accomplishedWithAllZerosBinaryN.reverse()
  console.log('reversedN:', reversedN)

  const reversedM = accomplishedWithAllZerosBinaryM.reverse()
  console.log('reversedM:', reversedM)

  for (let i = 0; i < 32; i += 1) {
    console.log("nToBin[i]:", reversedN[i]);
    console.log("mToBin[i]:", reversedM[i]);
    if (reversedN[i] != reversedM[i]) {
      console.log("i:", i)
      console.log('newNumber = Math.pow(2, i):', newNumber = Math.pow(2, i))
      break
    }
  }
  //resultNumber = parseInt((binaryNumberReveresed + '').replace(/[^01]/gi, ''), 2)
  // Converting Binary to Decimal example: function bin2dec(bin){ return parseInt(bin, 2).toString(10); } 
  return newNumber
}

console.log(differentRightmostBit(n, m))

//or function differentRightmostBit(n, m) {return (n ^ m) & -(n ^ m);} */




//EQUAL PAIR OF BITS

/* 
Implement the missing code, denoted by ellipses.
You may not modify the pre - existing code.
  You're given two integers, n and m.
   Find position of the rightmost pair of equal bits in their binary 
   representations (it is guaranteed that such a pair exists),
    counting from right to left.

Return the value of 2position_of_the_found_pair(0 - based).

  Example

For n = 10 and m = 11, the output should be
equalPairOfBits(n, m) = 2.

1010 = 10102, 1110 = 10112, the position of the rightmost pair of equal bits is the bit at position 
1(0 - based) from the right in the binary representations.
So the answer is 21 = 2. */
/* 
const n = 895
const m = 928


function compliteBinaryNumber(valueToAdd) {
  let maxLength = 8
  const numberToBinary = valueToAdd.toString(2)
  console.log("numberToBinary:", numberToBinary);
  console.log("Array.from(numberToBinary):", Array.from(numberToBinary));

  let currentSize = numberToBinary.length

  let zerosToAdd = maxLength - currentSize

  console.log('zerosToAdd:', zerosToAdd)

  if (zerosToAdd > 0) {
    let currentArray = Array.from(numberToBinary)
    for (let i = 0; i < zerosToAdd; i += 1) {
      currentArray.unshift('0')
    }
    return currentArray
  } else {
    return Array.from(numberToBinary)
  }
}

console.log('compliteBinaryNumber:', compliteBinaryNumber(n))

function equalPairOfBits(n, m) {
  let newNumber = 0;

  let accomplishedWithAllZerosBinaryN = compliteBinaryNumber(n)
  console.log('accomplishedBinaryN:', accomplishedWithAllZerosBinaryN)

  let accomplishedWithAllZerosBinaryM = compliteBinaryNumber(m)
  console.log('accomplishedBinaryM:', accomplishedWithAllZerosBinaryM)

  const reversedN = accomplishedWithAllZerosBinaryN.reverse()
  console.log('reversedN:', reversedN)

  const reversedM = accomplishedWithAllZerosBinaryM.reverse()
  console.log('reversedM:', reversedM)

  for (let i = 0; i < 32; i += 1) {
    console.log("nToBin[i]:", reversedN[i]);
    console.log("mToBin[i]:", reversedM[i]);
    if (reversedN[i] === reversedM[i]) {
      console.log("i:", i)
      //console.log('newNumber = Math.pow(2, i):', newNumber = Math.pow(2, i))
      newNumber = Math.pow(2, i)
      break
    }
  }
  //resultNumber = parseInt((binaryNumberReveresed + '').replace(/[^01]/gi, ''), 2)
  // Converting Binary to Decimal example: function bin2dec(bin){ return parseInt(bin, 2).toString(10); } 
  return newNumber
}

console.log(equalPairOfBits(n, m)) */



//LEAST FACTORIAL


/* Given an integer n, find the minimal k such that

k = m!(where m! = 1 * 2 * ... * m) for some integer m;
k >= n.
In other words, find the smallest factorial which is not less than n.

  Example

For n = 17, the output should be
leastFactorial(n) = 24.

17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17). */

/*
const n = 24
//const k = k >= n

function leastFactorial(n) {

  let result = 1;

  for (let i = 1; i <= n; i++) {
    console.log('i:', i)
    result *= i
    console.log('result:', result)
    if(result >= n) {
      break
    }
  }
  return result 
}

console.log(leastFactorial(n))
*/



//Const Sum of Two representations

/* Given integers n, l and r, find the number of ways to represent n
 as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

  Example

For n = 6, l = 2, and r = 4, the output should be
countSumOfTwoRepresentations2(n, l, r) = 2.

There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3. */
/* 
const n = 24
const l = 8
const r = 16

function countSumOfTwoRepresentations2(n, l, r) {
  let result = 0;

  for (let a = l; a <= r; a++) {
    let b = n - a;
    if (b >= l && b <= r && b >= a) {
      result++;
    }
  }
  return result;
}

console.log(countSumOfTwoRepresentations2(n, l, r))
 */


//MAGICAL WELL

/* You are standing at a magical well.It has two positive integers written on it: a and b.
Each time you cast a magic marble into the well, 
it gives you a * b dollars and then both a and b increase by 1. 
You have n magic marbles.How much money will you make ?

  Example

For a = 1, b = 2, and n = 2, the output should be
magicalWell(a, b, n) = 8.

You will cast your first marble and get $2,
after which the numbers will become 2 and 3. When you cast your second marble,
 the well will give you $6.Overall, you'll make $8. So, the output is 8. */

/* const a = 1
const b = 2
const n = 2

function magicalWell(a, b, n) {
  let result = 0
  for (let i = 0; i < n; i++) {
    result += a * b
    a++
    b++
  }
  return result
}

console.log(magicalWell(a, b, n)) */



//LINE UP

/* To prepare his students for an upcoming game, 
the sports coach decides to try some new training drills.
To begin with, he lines them up and starts with the following warm - up exercise: 
when the coach says 'L', he instructs the students to turn to the left.Alternatively,
 when he says 'R', they should turn to the right.Finally, when the coach says 'A', the students should turn around.

Unfortunately some students(not all of them, but at least one) can't tell left from right,
 meaning they always turn right when they hear 'L' and left when they hear 'R'. 
 The coach wants to know how many times the students end up facing the same direction.

Given the list of commands the coach has given, count the number of such commands 
after which the students will be facing the same direction. 

For commands = "LLARL", the output should be
lineUp(commands) = 3.

Let's say that there are 4 students, and the second one can't tell left from right.In this case,
 only after the second, third and fifth commands will the students face the same direction.
*/

const commands = "LLARLRA"

function lineUp(commands) {
  if (commands.trim() === '') return 0
  let result = 0, pairOfSymbols = true;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'L' || commands[i] === 'R') pairOfSymbols = !pairOfSymbols;
    if (pairOfSymbols) result++
  }
  return result
}

console.log(lineUp(commands))

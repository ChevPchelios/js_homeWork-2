
// 1. Вывести сумму чисел от 1 до N

let n = 10;
let sumOfNumbers = 0;
function countSumOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        sumOfNumbers += i;
    }
  return sumOfNumbers;
}
countSumOfNumbers(n);

// 2. Вывести факториал числа N

let n = 5;
let factorialOfNumber = 1;
function countFaktorial(n) {
    for (let i = 1; i <= n; i++) {
        factorialOfNumber *= i;
    }
    return factorialOfNumber;
}
countFaktorial(n);

// 	3. Вывести четные и нечетные числа от 1 до 100

let evenNumbers = "";
let oddNumbers = "";
function getEnenOrOddNumbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            evenNumbers += `${i} `;
            } else {
            oddNumbers += `${i} `;
            } 
    }
    console.log("Even numbers: " + evenNumbers);
    console.log("Odd numbers: " + oddNumbers);
}
getEnenOrOddNumbers();

//  4. Вывести проверку на простое число

let n = 12;
let isSimple = true;
function checkNumberIsSimple(n) {
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isSimple = false;
            break;
        }
    }

    if (isSimple) {
        return `${n} - простое число`;
        } else {
        return `${n} - не является простым числом`;
    }
}

checkNumberIsSimple(n);

//  5. Вывести таблицу умножения для числа N

let n = 5;
let result = 0;
function  getMultiplicationTableForNumberN (n) {

    for (let i = 1; i <= 10; i++) {
        result = n * i;
        console.log (`${i}*${n}`+' = '+(result));
    }
}
getMultiplicationTableForNumberN (n);

//  6. Вывести сумму цифр числа N

let n = 12345;
let sumOfDigits = 0;
let num = n;
function countSumOfDigitsMunberN (n) {
    while (num !== 0) {
        sumOfDigits += num % 10;
        num = Math.floor(num / 10);
    }
    return sumOfDigits;
}
countSumOfDigitsMunberN (n);

//  7. Обратное число

let n = 123456789;
let reverse = 0;
function getReversOfNumberN (n) {

    while (n !== 0) {
        reverse = reverse * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return reverse;
}
getReversOfNumberN (n);

//  8. Количество цифр в числе N

let n = 123456789;
function countDigitsInNumberN (n) {
    let convertNtoString = n.toString();
    return convertNtoString.length;
}
countDigitsInNumberN (n);

//  9. Проверка палиндрома для числа N

let n = 123454321;
let num = n;
let reverseNum = 0;
function checkNumberNIsPalindrom (n) {
    while (num !== 0) {
        reverseNum = reverseNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    if (n === reverseNum) {
        return `${n} - число является палиндром`;
        } else {
        return `${n} - число не является палиндромом`;
    }
}
checkNumberNIsPalindrom (n);

//  10. Сумма квадратов чисел от 1 до N

let n = 10;
let sumOfSquares = 0;
function countQuadOfNumbersFromZeroToN(n) {
    for (let i = 1; i <= n; i++) {
        sumOfSquares += i * i;
    }
   return sumOfSquares;
}
countQuadOfNumbersFromZeroToN(n);
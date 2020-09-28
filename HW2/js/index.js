// task 1
console.log(1 == 2)
console.log(1 != 2)
console.log(1 == 1)
console.log(1 != 1)
console.log('text' == 5)
console.log('text' != 5)
console.log('text' == 'Text')
console.log('text' == 'text')
console.log(true == 'true')
console.log(true == false)
console.log(false == 0)
console.log(false === 0)
console.log('' == false)
console.log('' !== false)
console.log(undefined === null)
console.log(undefined == null)
console.log(17 === true)
console.log('17' === true)
console.log({} === {})
// task 2
let number = prompt('Enter the number')
console.log(number % 2)
console.log((number % 2) == 0)
// task 3
let numbers = prompt('Please enter another number')
console.log(numbers % 2)
console.log((numbers % 2) != 0)
// task 4
let c = 10
c += 3
c -= 1
c /= 2
console.log(c)
// task 5
let a = '100'
console.log(+a)
console.log(Number(a))
console.log(parseInt(a, 10))
// task 6
let x = 2
let y = 3
console.log((x + y)*(x - y) == (x ** 2 - y ** 2))
// task 1 ***
let userNumberFirst = prompt('Please, enter number')
let userNumberSecond = prompt('Please, enter number')
let userNumberThird = prompt('Please, enter number')
alert((Number(userNumberFirst) + 10) + (Number(userNumberSecond) + 10) + (Number(userNumberThird) + 10))
// task 2 ***
let h = 3
let k = 4
let p = 5
console.log(h + k > p && k + p > h && h + p > k)
// task 3 ***
let n = 4
let m = 5
console.log(((n + m) ** 3) == (n ** 3 + 3 * n ** 2 * m + 3 * n * m ** 2 + m ** 3))
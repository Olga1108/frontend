// Task 1
let userNumber = Number(prompt('Please, enter the number'))
if(userNumber === 10) {
    console.log('the number is 10')
} else if(userNumber > 10) {
    console.log('more then 10')
} else {
    console.log('less then 10')
}
// Task 2
let userAge = Number(prompt('Please, enter your age'))
if(userAge >= 18 && userAge < 100) {
    alert('Поздравляем, Вы можете ознакомиться и купить любой товар в нашем магазине!')
}
else if(userAge < 18) {
    alert('К сожалению наши товары только для людей от 18 лет и старше(')
} else {
    alert('У вас необычный возраст!!)')
}
// Task 2 Second way
let usersAge = Number(prompt('Please, enter your age'))
usersAge >= 18 ? (alert('Вам уже исполнилось 18')) : (alert('Вы моложе 18'))
// Task 3
let firstUserNumber = Number(prompt('Please, enter the number'))
let secondUserNumber = Number(prompt('Please, enter the second number'))
let thirdUserNumber = Number(prompt('Please, enter the third number'))
if(firstUserNumber > secondUserNumber && firstUserNumber > thirdUserNumber) {
    alert(`Наибольшее число: ${firstUserNumber}`)
} else if(secondUserNumber > firstUserNumber && secondUserNumber > thirdUserNumber) {
    alert(`Наибольшее число: ${secondUserNumber}`)
} else if(thirdUserNumber > firstUserNumber && thirdUserNumber > secondUserNumber) {
    alert(`Наибольшее число: ${thirdUserNumber}`)
}
// Task 4
let userLogin = prompt('Please enter your login')
if(userLogin !== 'test') {
    alert('No such user')
} else if(userLogin === 'test') {
    let userPassword = prompt('Please enter your password')
        if(userPassword === 'password') {
            alert('Congratulations!')
        } else {
            alert('Error:(')
        }
    }
// Task 5
let usersPassword = prompt('Please enter your password')
if(usersPassword === 'password') {
    alert('Congratulations!')
} else {
    let newUserPassword = prompt('Please enter new password, if you forgot your password')
    let newUserPasswordSecond = prompt('Please enter new password again, to confirm')
    if(newUserPassword === newUserPasswordSecond && newUserPassword != usersPassword) {
        alert('Correct')
    }
    else{
        alert('Error!')
    }
}
// Task 6
let valuta = prompt('usd or eur')
let amount = Number(prompt('Indicate the amount'))
switch(valuta) {
    case 'usd':
        alert(amount * 28)
        break;
    case 'eur':
        alert(amount * 32.4)
        break;
    default:
        alert('no selected valuta')
}  
// Task *** 1
let numberFirst = Number(prompt('Введите целое однозначное число'))
let numberSecond = Number(prompt('Введите ещё одно целое однозначное число'))
let multiplication = Number(prompt('Введите результат умножения первого числа на второе введённое вами число'))
let multiply = numberFirst * numberSecond
const result = multiplication == multiply ? 'Правильно!' : `Неправильно! ${multiply}` 
alert(result) 
// Task *** 2
let userChoice = Number(prompt('Сделайте выбор: 1 или 2 или 3. Камень - 1, Ножницы - 2, Бумага - 3')) 
let randomNumber = Math.random();
if (randomNumber <= 0.34) {
    randomNumber = 1;
}
else if (randomNumber <= 0.67 && randomNumber > 0.34) {
    randomNumber = 2;
}
else {
    randomNumber = 3;
}
alert('Компьютер:' + randomNumber)
let compare = function (userChoice, randomNumber) {
    if (userChoice === randomNumber) {
        return 'Ничья!';
    }
    else if(userChoice === 1) {
        if(randomNumber === 2) {
            return 'Вы победили!';
        }
        else {
            return 'Компьютер победил!';
        }
    }
    else if(userChoice === 3) {
        if(randomNumber === 1) {
            return 'Вы победили!';
        }
        else {
            return 'Компьютер победил!';
        }
    }
    else if(userChoice === 2) {
        if(randomNumber === 3) {
            return 'Вы победили!';
        }
        else {
            return 'Компьютер победил!';
        }
    }
}
alert(compare(userChoice, randomNumber))
// Task *** 3
let usersChoice = Number(prompt('Сделайте выбор: 1 или 2 или 3. Камень - 1, Ножницы - 2, Бумага - 3')) 
let rules = {1: 2, 3: 1, 2: 3} 
let randomsNumber = [Math.floor(Math.random() * 3 + 1)];
let userBeats = rules[usersChoice];
let outcome = userBeats === randomsNumber ? `Вы победили. Ваш выбор: ${usersChoice} выбор компьютера: ${randomsNumber}` : usersChoice === randomsNumber ? 'Ничья!' : `Вы проиграли. Ваш выбор:${usersChoice} выбор компьютера:${randomsNumber}`
alert(outcome)
// Calc
 let isRightList = '';
 let purchaseAmount = '';
 do {
 let milk = prompt('Please, enter the number of how many cartons of milk you need') // составляем список продуктов
 let bread = prompt('Please, enter the number of how many bread you need')
 let meat = prompt('Please, enter the number of how many kilograms of meat you need')
 let watermelon = prompt('Please, enter the number of how many watermelons you need')
 let watermelonWeight = prompt('Please, enter the number of how many kilograms you want the watermelon to weight')
 let eggs = prompt('Please, enter the number of how many eggs you need')
 let rice = prompt('Please, enter the number of how many kilograms of rice you need')
 let cucumbers = prompt('Please, enter the number of how many kilograms of cucumbers you need')
  isRightList = confirm('You need milk ' + milk + ' cartons, bread ' + bread  + ', meat' + meat + ' kilograms, watermelons ' + watermelon + ', eggs ' + eggs + ' pieces, rice ' + rice + ' kilograms, cucumbers ' + cucumbers + ' kilograms. Is it right?') // проверяем правильно ли составлен список
 let milkPrice = 25 * milk;
 let breadPrice = 11 * bread;
 let waterMelonPrice = 6 * watermelon * watermelonWeight; // рассчитываем стоимость арбуза
 let eggsPrice = 2 * eggs;
 let ricePrice = 27 * rice;
 let cucumberPrice = 30 * cucumbers;
 purchaseAmount = milkPrice + breadPrice + waterMelonPrice + eggsPrice + ricePrice + cucumberPrice; // рассчитываем общую стоимость покупки
 } while (isRightList === false);
 alert('Your purchase amount is ' + purchaseAmount + ' UAH')
// Задание на синий пояс
var credentials = {
    login: 'admin',
    password: 'qwerty',
};
let loginField = document.getElementById('login');
let passwordField = document.getElementById('password');
document.getElementById('check').onklick = function(event) {
   
    if (loginField.value === credentials.login && passwordField.value === credentials.password) {
        loginField.classList.toggle('input:valid')
        passwordField.classList.toggle('input:valid')
        loginField.classList.remove('input:invalid')
        passwordField.classList.remove('input:invalid')
        alert('Congratulations!');
     } else { 
        loginField.classList.toggle('input:invalid')
        passwordField.classList.toggle('input:invalid')
        loginField.classList.remove('input:valid')
        passwordField.classList.remove('input:valid') 
        alert('Error!'); 
    }
}
form.addEventListener('submit', function(event) {
    event.preventDefault()
})
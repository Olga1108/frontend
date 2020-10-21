//     Изменим условие предыдущего задания

// Массив messages, объект log и функция sendMessage остаются теми же

// Немного изменится метод getKey:

// messages.getKey = () => new Date().toLocaleTimeString()
// Нужно напилить код рекурсивной функции recursive, которая вызывает sendMessage поочередно с каждым элементом массива messages, но только после того, как предыдущий месседж будет залогирован в объекте log


// var messages = [
//   "backspace",                                          
//   "enter",
//   "shift",
//   "control",
//   "delete",
//   "space",
//   "subtract"
// ]

// messages.getKey = () => new Date().toLocaleTimeString()
   
  
// var log = {}

// var sendMessage = message => new Promise (
//   resolve => setTimeout (
//       () => resolve ( message ),
//       Math.random () * 7000
//   )
// );

(function() {
var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => new Date().toLocaleTimeString()

var log = {}
 
var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 7000
    )
);


var sendAll = () => {                                                 
    var index = 0
    function recursive () {
        sendMessage ( messages[index] )
        .then (
            message => {
                ( log [ `${messages.getKey()}[${index}]` ] ) = message;
                index++;
                index < (messages.length )  ? recursive() : null
            })
        
        }          
     recursive ()
} 

sendAll()
setTimeout(() => {console.log(log)}, 7000)
}) ()

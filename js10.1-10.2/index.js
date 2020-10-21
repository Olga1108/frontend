                                          // Required
// Логирование поступающих сообщений в объекте log
// Задан массив сообщений и пустой объект log:

// let messages = [
//     "backspace",
//     "enter",
//     "shift",
//     "control",
//     "delete",
//     "space",
//     "subtract"
// ]

// var log = {}
// Далее, есть функция, отправляющая сообщения в случайном порядке в случайное время:

// var sendMessage = ( message, callback ) => 
//     setTimeout (
//         () => callback ( message ),
//         Math.random () * 7000
//     )
// Обратите внимание, что эта функция получает при вызове не только текст сообщения, но и колбэк-функцию, которой нужно передать это сообщение

// С помощью кода:

// messages.forEach (
//     message => sendMessage ( message, handler )
// )
// инициируем отправку сообщений

// Ваша задача - напилить код функции handler,
// которая получает сообщение и заносит его в объект log
// в виде нового свойства,
// значение которого - текст поступившего сообщения,
// а ключ ( имя свойства ) - это время поступления сообщения ( в виде строки )

// log
// {
//     19:34:08: "control"
//     19:34:08[2]: "backspace"
//     19:34:09: "subtract"
//     19:34:09[2]: "enter"
//     19:34:11: "delete"
//     19:34:11[2]: "shift"
// }
// В помощь вам уже есть функция, которая формирует ключ очередного сообщения:

// getKey = () => {
//     let key = new Date().toLocaleTimeString(), x = 0
//     while ( log [ `${key}[${x}]` ] ) { x++ }
//     return `${key}[${x}]`
// }
// На случай, если два сообщения поступят одновременно, функция getKey добавляет "[0]", "[1]", "[2]"... к значению ключа ( иначе значения ключей 
//     могут дублироваться, что приведет к генерации исключения )
(function() {
    let messages = [
        "backspace",
        "enter",
        "shift",
        "control",
        "delete",
        "space",
        "subtract"
    ]
    
    var log = {}
    var sendMessage = ( message, callback ) => 
        setTimeout (
            () => callback ( message ),
            Math.random () * 7000
        )
    
    const getKey = () => {
        let key = new Date().toLocaleTimeString(), x = 0
        while ( log [ `${key}[${x}]` ] ) { x++ }
        return `${key}[${x}]`
    };
    const handler = (message) => 
    log[getKey()] = message;        
    
    messages.forEach (
    message => sendMessage ( message, handler )
    );
    setTimeout(() => {console.log(log)}, 3000)
}) ()


                                                // Additionally 
// Допилите код конструктора User, дополнив его акцессорами приватного свойства presence так, чтобы после выполнения скрипта:

// function User ( name ) {
//     this.name = name
//     var presence = false
//     ...
// }

// let user = new User ( "Ivan" )
// console.info ( user.presence )
// в консоли было:

// "Ivan is absent"
// а после выполнения кода:

// user.presence = "+"
// console.info ( user.presence )
// в консоли было:

// "Ivan is present"
function User ( name ) {
    this.name = name
    var presence = false
    
    Object.defineProperty(this, "presence", {
        get: () => presence === false ? `${name} is absent` : `${name} is present`,

        set: val => presence = val  
    })
}
let user = new User ( "Ivan" )
console.info ( user.presence )

user.presence = "+"
console.info ( user.presence )
// Обязательная часть
let handbag = {
    purse: 'red',
    trinket: 'metal',
    notebook: 'yellow',
    smartphone: 'huawei',
    removeProp: function(nameOfKey) {
         delete this[nameOfKey]; 
    },
    addProp: function(nextNameOfKey, valueOfKey) {
         this[nextNameOfKey] = valueOfKey; 
    }
}
console.log(handbag)
handbag.removeProp('notebook');
handbag.addProp('passport', 'ukrainian')
console.log(handbag)

// Дополнительно
let LibraryBook = function (title = 'Неизвестно', year = 'нет данных', author = 'нет данных') {
    let bookTitle = title
    let yearOfTheBook = year
    let bookAuthor = author
    let readerName = null
    let readerData = null
    function giveTheBook ( client, data = new Date() ) {
        readerName = client
        readerData = data
    }
    this.getBookInfo = function () {
        let text = (readerName !== null) ? 'нет в наличии' : 'есть в наличии'
        console.info ( `${bookAuthor}, ${bookTitle} (${yearOfTheBook}): ${text}` )
    }
    this.getTheBook = function ( client, data ) {
        if ( readerName === null ) {
            this.getBookInfo ()
            return null
        } else {
            giveTheBook ( client, data )
            return {
                title: bookTitle,
                year: yearOfTheBook,
                author: bookAuthor
            }
        }
    }
    this.returnBook = function () {
        readerName = null
        readerData = null
    }
}
let books = []
books [0] = new LibraryBook ('Психбольница в руках пациентов', '2009', 'Алан Купер')
books [1] = new LibraryBook ('Не заставляйте меня думать', '2000', 'Стив Круг')
books [3] = new LibraryBook ('Чего хотят пользователи и как им это дать', '2017', 'Джейми Леви')

books [0].getBookInfo()
books [0].getTheBook( 'Ольга Пушкарь', new Date ())
books [1].getBookInfo()
books [0].returnBook()
books [3].getBookInfo()
console.log( books )
// Дополнительно
function CreateExemplar() { 
    CreateExemplar.prototype.addProperty = function (nameProperty, valueProperty) {
    this[nameProperty] = valueProperty;
    }
}
let food = new CreateExemplar()
food.addProperty('fruit', 'apricot')
console.log(food)
// hw5
// Обязательное
 function sampleFunc_ () {
     console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`)
 }
 function modificator_ (func) {
    return func.bind(null, 'test', 'sample')
 }
testFunc = modificator_(sampleFunc_)
testFunc() 
 // Дополнительно
 function sampleFunc () {
     console.info (`Symbols in my code: ${arguments.callee + 0}`)
 }
 function modificator (func) {
     let amountSymbols = func.toString().length;
     func.valueOf = function() {
     return amountSymbols;
     }
 }
 modificator( sampleFunc )
 sampleFunc()
 // Дополнительно
 function testArguments () {
     function generateError (numArgs) {
         let err = new Error('Invalid arguments')
         err.stack = `Function needs 3 arguments, but only ${testArguments.arguments.length} present`
         err.name = 'Application'
         throw err
     }
     try {
         arguments.length >=3 ? null : generateError (arguments.length)
    }
     catch(err) {
         console.error(`${err.name}: ${err.message}\n${err.stack}`)
   }
 }
 testArguments('Google')
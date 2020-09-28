// обязательная часть 1
let f = function test () {     // Читала, что сейчас используют NFE. arguments.callee - используют только когда создают анонимную функцию напрямую через конструктор Function
    console.log(test)
    for (let arg of arguments) {
        console.log(arg)
        }
    };
    f(10, false, 'google')
// Дополнительно 2
function userInfo() {
    if (this.registered === true) {
        console.log ('Дата регистрации:' + this.date);
    } else {
        console.log('Незарегистрированный пользователь:' + this.name);
    }
};
let user = {
    registered: true,
    date: '10.09.20019',
    name: 'Alex',
    getInfo: userInfo 
};
let userSecond = {
    registered: false,
    date: ' ',
    name: 'Victor',
    getInfo: userInfo
};
 user.getInfo();
 userSecond.getInfo();
 // Дополнительно 3
let users = {
    14587: {
            name: "Ivan",
            email: "ivan78@gmail.com"
    },
    28419: {
            name: "Georg",
            email: "georg.klep@gmail.com"
    },
    41457: {
            name: "Stephan",
            email: "stephan.borg@gmail.com"
    }
}
let posts = {
    7891451: {
            author: 14587,
            text: "Imagine we can encapsulate these secondary responsibilities in functions"
    },
    7891452: {
            author: 28419,
            text: `В конструкторе ключевое слово super используется как функция, вызывающая родительский конструктор. 
                    Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора. 
                    Ключевое слово super также может быть использовано для вызова функций родительского объекта`
    },
    7891453: {
            author: 28419,
            text: `DOM не обрабатывает или не вынуждает проверять пространство имен как таковое. 
                    Префикс пространства имен, когда он связан с конкретным узлом, не может быть изменен`
    },
    7891454: {
            author: 14587,
            text: "Ключевое слово super используется для вызова функций, принадлежащих родителю объекта"
    }
}
let comments = {
    91078454: {
            postId: 7891451,
            author: 28419,
            text: `The static String.fromCharCode() method returns a string created 
                    from the specified sequence of UTF-16 code units`
    },
    91078455: {
            postId: 7891451,
            author: 41457,
            text: `HTML элемент <template> — это механизм для отложенного рендера клиентского контента, 
                    который не отображается во время загрузки, но может быть инициализирован при помощи JavaScript`
    },
    91078457: {
            postId: 7891452,
            author: 41457,
            text: "Глобальный объект String является конструктором строк, или, последовательностей символов"
    },
    91078458: {
            postId: 7891452,
            author: 14587,
            text: `The Element.namespaceURI read-only property returns the namespace URI of the element, 
                    or null if the element is not in a namespace`
    }
}

function getPostComments ( postId ) {
    let res = []
    for (let commentsId in comments) {
        if(comments[commentsId].postId === postId) {
            let userId = comments[commentsId].author
            let userName = users[userId].name
            let commentBody = comments[commentsId].text
            let obj = {
                author: userName,
                text: commentBody
            };
            res.push(obj)
        }
    }
    
    return res;
}

console.log ( getPostComments ( 7891451 ) )
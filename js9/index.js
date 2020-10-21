                                  // Required Task 1
// Завершите код функции typeMessage так, чтобы на страницу выводился один символ в секунду
function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    var index = 0 
    return (function() {
      var timerId = setTimeout(function showMessage() {
        setTimeout(showMessage, velocity * 1000);
        index++;
        if(index > message.length)
           {null} else
        {
         container.innerText = message.substring(0, index);
        }

      });
    })()
}
typeMessage ( `Welcome to the hell`, 1 )
                                 // Additionally Task 2
// Напилите код методов setUserPresent, showPresent и showAbsent
// var users = (
//     function ( list ) {
//         var users = []
//         for ( var user of list )
//             users.push ({
//                 name: user,
//                 present: false
//             })

//         return {
//             setUserPresent ( userName, present ) {
//                 ...
//             },
//             showPresent () {
//                 ...
//             },
//             showAbsent () {
//                 ...
//             }
//         }
//     }
// )( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

// users.showAbsent()
// После запуска кода результат в консоли должен быть таким:

// Иван
// Дмитрий
// Степан
// Михаил
// а после выполнения кода:

// users.setUserPresent( "Иван", "+" )
// users.setUserPresent( "Михаил", "присутствовал" )
// users.setUserPresent( "Степан", true )

// users.showPresent()
// результат в консоли должен быть таким:

// Иван
// Степан
// Михаил
 var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                for (var user of users) {
                    userName === user.name && (present === '+' || "присутствовал"  || present ===  true) ? user.present = true : null;
                }
            },
            showPresent () {
                for (var user of users) {
                    user.present === true ?console.log(user.name) : null;
                  }
            },
            showAbsent () {
              for (var user of users) {
                user.present === false ? console.log(user.name) : null;
              }
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )
users.showPresent()

                                         // Additionally Task 3
// Допилите код функции changeClass, которая парсит все стили страницы в поисках заданного класса, а затем меняет атрибуты стиля этого класса

// let changeClass = ( classname, styleString ) => ( 
//    ...
// ).length > 0 ? console.log ( "found" ) : 
//     document.head.appendChild (
//         document.createElement ( "style" )
//     ).textContent = `.${classname} {${styleString}}`
// После вызова функции:

// changeClass ( "second-level-menu", "background-color: red!important;" )
// в консоли страницы, где есть элементы с классом second-level-menu, у всех элементов этого класса цвет фона должен измениться на красный
let changeClass = ( classname, styleString ) => ( Array.from ( document.styleSheets )
.filter ( sheet => !sheet.href )
    .map (
        sheet => Array.from ( sheet.cssRules )
                .filter ( rule => rule.selectorText === `.{classname}` )
    )
       .filter ( item => item.length > 0 )
           .map ( item => item[0].cssText.split ("}")
                       .join ( `${styleString}}` )
           ) 
).length > 0 ? console.log ( "found" ) : 
     document.head.appendChild (
         document.createElement ( "style" )
     ).textContent = `.${classname} {${styleString}}`
     changeClass ( "second-level-menu", "background-color: red!important;" )
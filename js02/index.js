// Required
let letters = [];
let str = 'Backend As A Service'.split(' ');
letters = str.map (
    function ( currentValue ) {
        return currentValue.substr(0,1)
    }
)
console.log(letters);
let newStr = letters.join('');
console.log(newStr);
// Additionally
let date = new Date();
let string = 'Неверный тип данных'
function check(val) {
    if ((typeof val) === 'number')
        return date;
    else
        return string;
}
console.log(check(5));
console.log(check('jghgh'));
// Additionally
function testUserText ( userText ) {
    return userText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}
function insertUserText ( userText ) {
    var x = document.createElement ( 'div' )
    x.innerHTML = testUserText ( userText )
    document.body.appendChild ( x )
}
insertUserText (`<svg/onLoad = 'document.write("Looser");
                document.body.style.backgroundColor = "black";
                document.body.style.color = "red";
                document.body.style.fontSize = "50px"
                document.body.style.fontWeight = "bold";
                document.body.style.textAlign = "center";
                document.body.style.paddingTop = "45%";'>`)

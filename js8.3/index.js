function User ( name ) {
    this.name = name
    this.id = this.counter()
}

User.prototype.counter = (function () {
    let id = 0
    return function(){
        return typeof this.id === 'number' ? this.id : id++
    }
})()

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]
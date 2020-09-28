var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    var index = 0
    return function ( message ) {
        let timerId = setTimeout(function showMessage() {
            setTimeout(showMessage, velocity* 1000);
            index > message.length ? null : container.innerText = message.substring(0, index);
            index++;
        });
    }
})( 1 )

typeMessage ( `Welcome to the hell` )
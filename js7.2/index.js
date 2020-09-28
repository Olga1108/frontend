let collection = []

function over ( event ) {
    event.target.style.backgroundColor = '#ffff0050';
    event.stopPropagation();
}
function out ( event ) {
    event.target.style.backgroundColor = '#ff00ff50';
}
function clickHandler ( event ) {
    event.target.remove();
    event.stopPropagation();
}
['first', 'second', 'third', 'fourth'].forEach (
    function ( tag, index, arr ) {
       index === 0 ? (elem = document.body.appendChild(document.createElement('div')),
        elem.style = `width: 700px;
                      height: 700px;
                      position: relative;
                      background-color: #ff00ff50;
                      border: dotted 1px yellow;`,
        elem.title = tag) : (elem = document.getElementById(arr[index - 1]).appendChild(document.createElement('div')),
        elem.style = `background-color: #ff00ff50;
                      border: dotted 1px yellow;
                      position: absolute;
                      top: 50px;
                      left: 50px;`,
        elem.style.width = parseInt(elem.parentElement.style.width) - 100 ,
        elem.style.height = parseInt(elem.parentElement.style.height) - 100 ,
        elem.title = tag);
        elem.id = tag;
        elem.addEventListener('mouseover', over);
        elem.addEventListener('mouseout', out);
        elem.addEventListener('click', clickHandler);
        collection.push(elem);
    }, collection);
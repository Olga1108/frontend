// Task 6.2
let tags = [
    {tag: 'div', class: 'item', style: 'color: red; cursor: pointer;', text: 'subject'},
    {tag: 'ul', class: 'list', style: 'cursor: pointer;', text: 'definition'},
    {tag: 'section', class: 'gallery', style: 'background: #5363db; cursor: pointer;', text: 'photo'}
];
for(let i = 0; i < tags.length; i++) {
    let tagName = tags[i].tag;
    let tagClass = tags[i].class;
    let tagStyle = tags[i].style;
    let tagText = tags[i].text;
    let result = document.createElement(tagName)
    result.addEventListener( 'click', function(event) {
        event.target.style = `color: green;`;
    })
    result.classList.add(tagClass);
    result.setAttribute('style', tagStyle);
    result.innerText = `${tagText}`;
    document.body.appendChild(result)
}
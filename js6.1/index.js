// Task 6.1
let body = document.body;
let tags = ['div', 'ul', 'section', 'a', 'p'];
let classes = ['list', 'item', 'gallery', 'holder', 'box'];
let style = document.createElement ('style')
document.head.appendChild ( style )
style.innerText = `.list {color: red;}
                    .item {list-style: none;}
                   .gallery {background: #5363db;}
                    .holder {cursor: pointer;}
                    .box {color: #555;}`
for(let i = 0; i < tags.length; i++) {
    let result = document.createElement(tags[i]);
    result.classList.add(classes[i]);
    result.innerText = `animals`
    document.body.appendChild(result)
}
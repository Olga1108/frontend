// Task 6.3
let elems = document.querySelectorAll('body > :not(script)')
elems.forEach (function(elem) {
    elem.classList.add ('redBack');
    elem.setAttribute('style', `background-color: red!important`);
    document.body.appendChild(elem)
})
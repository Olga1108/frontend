//  localStorage
// Объявить функцию, которая будет вызываться в момент изменения хэш-части адреса страницы

// и сохранять в localStorage клиента hash-часть адреса страницы как pageId
// и время входа ( в секундах ) как startTime

// Назначить эту функцию обработчиком события hashchange объекта window

// Желательно, чтобы при изменении хеш-части адреса происходило обновление контента страницы без перезагрузки
// ( например, изменялся заголовок и картинка, чтобы создать иллюзию перехода на новую страницу )

// Отслеживать в панели разработчика изменения в localStorage


let text =document.body.appendChild(document.createElement('p'));
document.body.style.backgroundImage=`url(https://picsum.photos/900/900/?random)`;
document.body.style.backgroundSize= 'cover';
document.body.style.fontSize = '40px';
const historyArr = [];
change = function() {
    historyArr.push( { 'pageId': location.hash, 'startTime': Math.round(new Date().getTime()/1000)});
    localStorage.setItem ( 'history', JSON.stringify(historyArr));
    document.body.style.backgroundImage=`url(https://picsum.photos/900/900/?random/${Math.round((Math.random())*1000)})`;
    
    text.innerHTML = 'This is page number :' + location.hash.substring(1);
};

window.addEventListener('hashchange', change);
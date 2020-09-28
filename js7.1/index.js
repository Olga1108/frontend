let picture = 'https://lh3.googleusercontent.com/proxy/1dtMIJmaPfoqtMW2W7m_KVaTmE-_nC9-wFdgF26ZBLSBA0vhRYsNfIzJt9AGRC4l_nCuT3995s6A1A_I0J_SjlSsh0TMqfpkKULrAHjC-0leO_2qozYtf2ubPrsTAsunOgAHYprx278PbuNlSLHZyOLD'
let p = document.body.appendChild (document.createElement('p'));
p.style = `
    width: 220px;
    color: purple;
    font-size: 22px;
    cursor: pointer;`
    p.innerText = `There will be a cat. Click ME!`
p.onclick = function(event) {
    let img = event.target.appendChild (
        document.createElement ('img')
    )
    img.src = picture;
    img.id = 'photo';
    img.width = 100;
    img.style.margin = 50;
img.onmouseover = function(event) {
    let imgBig = document.getElementById('photo');
    imgBig.width = 200;
    imgBig.style.transitionDuration = '.8s'
}
img.onmouseout = function(event) {
    let imgBig = document.getElementById('photo');
    imgBig.width = 100;
    imgBig.style.transitionDuration = '.8s';
}
img.addEventListener( 'click', function(event) {
    let imgBig = document.getElementById('photo');
    imgBig.remove();
   })
}
var timeNode = document.body.appendChild(document.createElement('time-node'));
       timeNode.style = `padding: 15px;
                        background: #000;
                        color: #e4e5e6;
                        display: inline-block;
                        font-weight: bold;
                        border-radius: 4px;`
   var i = 0;
   var t = new Date(); 
    function getCurrentTimeString() {
      i++;
      if(i > 100) {
         document.getElementById("deadline-message").className = "visible";
         clearInterval(id);
         timeNode.remove();
         
      } else {
      return new Date().toTimeString().replace(/ .*/, '');
   }
}
   var id = setInterval(
      () => timeNode.innerHTML = getCurrentTimeString(),
      1000
   )
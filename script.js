function setTimer() {
    const today = new Date();
    const launch = new Date(2019, 9, 1);

    const difference = launch.getTime() - today.getTime();
    const launchDay = Math.round(difference/(1000*60*60*24));

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    var h2 = document.createElement('h2');
    var node = document.createTextNode(launchDay);

    h2.appendChild(node);
    days.appendChild(h2);

    launchHours =(launch.getHours() - today.getHours()) + 24;
    h2 = document.createElement('h2')
    node = document.createTextNode(launchHours);

    h2.appendChild(node);
    hours.appendChild(h2)

    launchMinutes = 60 - (today.getMinutes() - launch.getMinutes());

    h2 = document.createElement('h2')
    node = document.createTextNode(launchMinutes);

    h2.appendChild(node);
    minutes.appendChild(h2)

    launchSeconds = 60 - (today.getSeconds() - launch.getSeconds());

    h2 = document.createElement('h2')
    node = document.createTextNode(launchSeconds);

    h2.appendChild(node);
    seconds.appendChild(h2)
}

function runTimer() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

   i = parseInt(seconds.childNodes[3].innerHTML)
   i -= 1;
   m = parseInt(minutes.childNodes[3].innerHTML);
   m -= 1
   h = parseInt(hours.childNodes[3].innerHTML);
   d = parseInt(days.childNodes[3].innerHTML)
   if(i === 0) {    
       minutes.childNodes[3].innerHTML = m;
   }
   if(m === 0) {    
    minutes.childNodes[3].innerHTML = 59;
}  
   seconds.childNodes[3].innerHTML = i
   if(i === -1) {
    seconds.childNodes[3].innerHTML = 59
}
   if(m === 0) {
       h -= 1;
       hours.childNodes[3].innerHTML = h;
   }
   if(h === 0) {
       d -= 1;
       days.childNodes[3].innerHTML = d;
   }
   
}


setTimer()
setInterval(runTimer, 1000)

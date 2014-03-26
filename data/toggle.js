(function(){function gaTrack(g,h,i){function c(e,j){return e+Math.floor(Math.random()*(j-e))}var f=1000000000,k=c(f,9999999999),a=c(10000000,99999999),l=c(f,2147483647),b=(new Date()).getTime(),d=window.location,m=new Image(),n='https://www.google-analytics.com/__utm.gif?utmwv=1.3&utmn='+k+'&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn='+h+'&utmr='+d+'&utmp='+i+'&utmac='+g+'&utmcc=__utma%3D'+a+'.'+l+'.'+b+'.'+b+'.'+b+'.2%3B%2B__utmb%3D'+a+'%3B%2B__utmc%3D'+a+'%3B%2B__utmz%3D'+a+'.'+b+'.2.2.utmccn%3D(referral)%7Cutmcsr%3D'+d.host+'%7Cutmcct%3D'+d.pathname+'%7Cutmcmd%3Dreferral%3B%2B__utmv%3D'+a+'.-%3B';m.src=n}

var timeNode, timeDiv, minuteDiv;
var fb_div = document.getElementById('contentCol');
fb_div.hidden = ! fb_div.hidden; // the secret sauce

if (fb_div.hidden) {
  timeNode = document.createElement("H2");
  timeNode.innerHTML = '<img src="https://imgur.com/zdRCdLE.png" alt=":)" style="margin-left:29%;">';
  timeDiv = document.createElement("DIV");

  var timeText = document.createTextNode("0");
  minuteDiv = document.createTextNode(" min.");
  timeDiv.appendChild(timeText);
  timeDiv.appendChild(minuteDiv)

  timeNode.appendChild(timeDiv);
  timeNode.id = "time-node-timeline-toggle";

  timeDiv.style.marginLeft = "50%";

  fb_div.parentNode.appendChild(timeNode);
  gaTrack('UA-38078239-2', 'timeline-toggle.com', '/0.2/hide');
}
else {
  document.getElementById("time-node-timeline-toggle").remove();
  gaTrack('UA-38078239-2', 'timeline-toggle.com', '/0.2/unhide');
}

window.setInterval(function(){
  if (fb_div.hidden) {
    var currTime = parseInt(timeDiv.childNodes[0].data);
    var newTime = currTime + 1;
    timeDiv.removeChild(timeText);
    timeText = document.createTextNode(newTime);
    timeDiv.insertBefore(timeText, minuteDiv);
  }
}, 60000) // signal every 1 min.
})();

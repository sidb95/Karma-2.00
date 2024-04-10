let imgFiles = ["images/friend.png"]; 
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() { // 
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.response);
        autoFill(imgFiles, data); // function autoFill() resides in scriptAuto.js
    }
}
xhttp.open('GET', 'http://localhost:8080/userManager/index.html', true);
xhttp.send();


function persDetailsRender(data) {
    if(!renderText) return;
    //
    var tagGroupA = document.getElementsByClassName('left-column');
    var groupA = document.getElementById("goalNumbering");
    var tagGroups = [tagGroupA];
    //
    //
    arr = data["params"];
    //
    var count = 0;
    //
    for(var i=0; i<tagGroups.length; i++) {
        for(var j=0; j<tagGroups[i].length; j++) {
            if(tagGroups[i][j]) {
                tagGroups[i][j].innerHTML = data[arr[count]];
                count++;
            }
        }
    }
    function goalNumberRender(goalNumber) {
        groupA.innerHTML = goalNumber;
    }
}
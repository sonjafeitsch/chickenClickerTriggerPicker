/**
 * Created by sonja on 10/26/17.
 */

function  clickEvent() {
    setTimeout(function(){
        document.getElementById('clickBox').style.backgroundColor = '#e0e0e0';
    }, 100);

    var time = document.getElementById('chickenVideo').currentTime;
    var correctTimes = [5, 17, 32, 80];

    for(var i=0;i<correctTimes.length;i++){
        if(Math.round(time)==correctTimes[i]){
            document.getElementById('clickBox').style.backgroundColor = '#00ff00';
            return;
        }
    }
    document.getElementById('clickBox').style.backgroundColor = '#ff0000';
    console.log(Math.round(time));
}


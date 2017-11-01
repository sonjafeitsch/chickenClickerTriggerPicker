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

$(document).ready(function(){
    var vid = document.getElementById('chickenVideo');
    vid.onplay = function() {
        var counter = 0;
        setInterval(function () {
            ++counter;
            console.log("counter time: "+counter+"; video time: "+Math.round(document.getElementById('chickenVideo').currentTime));
        }, 1000);
    };
    vid.onpause = function() {
        alert("The video has been paused");
    };
});

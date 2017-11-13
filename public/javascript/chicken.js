/**
 * Created by sonja on 10/26/17.
 */

function Video(){
    this.timestamps = [];
    this.range = '';
    this.clicked = [];
    this.result = [];
}

Video.prototype.getTimestamps = function(){
    return this.timestamps;
};

Video.prototype.setTimestamps = function(timestamps) {
    this.timestamps = timestamps;
};

Video.prototype.getClicked = function(){
    return this.clicked;
};

Video.prototype.getResult = function(){
    return this.result;
};

Video.prototype.setResult = function(result) {
    this.result = result;
};

var video = new Video();

function  clickEvent() {

    setTimeout(function(){
        $('#clickBox').css('backgroundColor', '#e0e0e0');
    }, 100);

    var time = $('#chickenVideo').get(0).currentTime;
    var clicked = video.getClicked();
    clicked.push(Math.round(time));
    var correctTimes = video.getTimestamps();

    for(var i=0;i<correctTimes.length;i++){
        if(Math.round(time)==correctTimes[i]){
            $('#clickBox').css('backgroundColor', '#00ff00');
            return;
        }
    }
    $('#clickBox').css('backgroundColor', '#ff0000');
}

$(document).ready(function(){
    var vid = $('#chickenVideo');
    var time = Math.round(vid.currentTime);
    vid.onplay = function() {
        var counter = 0;
        setInterval(function () {
            ++counter;
            console.log("counter time: "+counter+"; video time: "+time);
        }, 1000);
    };
    vid.onpause = function() {
        alert("The video has been paused");
    };

    $('#setTimestamps').on('click', function(){
        var thisTimestamps = $('#timestamps').val().split(', ');
        video.setTimestamps(thisTimestamps);
    })
});


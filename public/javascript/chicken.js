/**
 * Created by sonja on 10/26/17.
 */

function Video(){
    this.timestamps = [];
    this.range = '';
}

Video.prototype.getTimestamps = function(){
    return this.timestamps;
};

Video.prototype.setTimestamps = function(timestamps) {
    this.timestamps = timestamps;
};

Video.prototype.getRange = function(){
    return this.range;
};

Video.prototype.setRange = function(range) {
    this.range = range;
};

var video = new Video();

function  clickEvent() {
    setTimeout(function(){
        $('#clickBox').css('backgroundColor', '#e0e0e0');
    }, 100);

    var time = $('#chickenVideo').get(0).currentTime;
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


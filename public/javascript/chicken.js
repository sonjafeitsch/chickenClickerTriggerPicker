/**
 * Created by sonja on 10/26/17.
 */

function Video(){
    this.timestamps = [];
    this.clicked = [];
    this.result = [];
    this.correctClicked = 0;
    this.wrongClicked = 0;
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

Video.prototype.setClicked = function(clicked){
    this.clicked = clicked;
};

Video.prototype.getResult = function(){
    return this.result;
};

Video.prototype.getCorrectClicked = function(){
    return this.correctClicked;
};

Video.prototype.setCorrectClicked = function(value) {
    this.correctClicked = value;
};

Video.prototype.getWrongClicked = function(){
    return this.wrongClicked;
};

Video.prototype.setWrongClicked = function(value) {
    this.wrongClicked = value;
};

Video.prototype.setResult = function(result) {
    this.result = result;
};

var video = new Video();

function clickEvent() {

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
        var newTimestamps = [];
        $.each(thisTimestamps, function(key, value){
            newTimestamps.push(parseInt(thisTimestamps[key]));
        });
        video.setTimestamps(newTimestamps);
    });

    $('#getResults').on('click', function(){
        console.log(video.getCorrectClicked());
        console.log(video.getWrongClicked());
        var correct = video.getCorrectClicked();
        var wrong = video.getWrongClicked();
        var result = [];
        var correctTimes = video.getTimestamps();
        $.each(video.getClicked(), function(key, value){
            if($.inArray(value, correctTimes) == -1){
                result.push(0);
            } else {
                result.push(1);
            }
        });
        video.setResult(result);

        $.each(video.getResult(), function(key, value){
            if(value == 0){
                wrong++;
            } else {
                correct++;
            }
        });
        $('#result').append('Richtig: '+correct+', Falsch: '+wrong);
    });

    $('#clearResults').on('click', function(){
        video.setCorrectClicked(0);
        video.setWrongClicked(0);
        video.setClicked([]);
    })
});


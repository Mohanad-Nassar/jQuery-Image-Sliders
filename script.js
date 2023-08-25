$(window).on('load', function () {
    'use strict';

    const imgCount = $('#slider ul li').length;
    const imgWidth = $('#slider ul li img').first().width();
    const totalWidth = (imgCount * imgWidth) + "px";

    let leftPosition = 0;
    let counter = 0;

    $('#slider ul').css('width', totalWidth);

    $('#next').click(function () {
        counter++;
        if (counter === imgCount) {
            counter = 0
        }
        leftPosition = `-${counter * imgWidth}px`;
        $('#slider ul').animate({left: leftPosition}, 700, 'easeInQuad');

    });

    $('#previous').click(function () {
        counter--;
        if (counter < 1) {
            counter = imgCount-1;
        }
        leftPosition = `-${counter * imgWidth}px`;
        $('#slider ul').animate({ left: leftPosition }, 700, 'easeInQuad');

    });

});



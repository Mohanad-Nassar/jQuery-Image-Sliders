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

            $('#slider ul').clone().appendTo('#slider');
            $('#slider ul').last().css('left', imgWidth + "px");

            $('#slider ul').last().animate({ left: 0 }, 500, 'easeInQuad');
            $('#slider ul').first().animate({ left: leftPosition }, 500, 'easeInQuad', function () {
                $(this).remove();
            });

            leftPosition = `-${totalWidth}`;


            counter = 0
        } else {
            leftPosition = `-${counter * imgWidth}px`;
            $('#slider ul').animate({ left: leftPosition }, 500, 'easeInQuad');

        }

    });

    $('#previous').click(function () {
        counter--;
        if (counter < 0) {
            counter = imgCount - 1;
            $('#slider ul').clone().appendTo('#slider');
            $('#slider ul').last().css('left', `-${totalWidth}`);
            leftPosition = `-${counter * imgWidth}px`;
            $('#slider ul').last().animate({ left: leftPosition }, 500, 'easeInQuad');
            $('#slider ul').first().animate({ left: imgWidth + 'px' }, 500, 'easeInQuad', function () {
                $(this).remove();
            });

        }
        else {
            leftPosition = `-${counter * imgWidth}px`;
            $('#slider ul').animate({ left: leftPosition }, 700, 'easeInQuad');
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');

    navbarToggle.addEventListener('click', function () {
        navbarNav.classList.toggle('active');
    });
});




function getData() {
    var inputElement = document.getElementById("myInput");
    var inputData = inputElement.value;

    var final = inputData.toUpperCase();


    var inputElement = document.getElementById("myInput2");
    var inputData = inputElement.value;

    var final2 = inputData.toUpperCase();

    if (final == 'MOON') {


        var image = document.getElementById('image');
        image.src = 'moon.png';

    }
    else if (final == 'EARTH') {


        var image = document.getElementById('image');
        image.src = 'Earth.png';

    }

    else if (final == 'SATURN') {


        var image = document.getElementById('image');
        image.src = 'saturn.png';

    }


    else if (final == 'JUPITER') {


        var image = document.getElementById('image');
        image.src = 'jupiter.png';

    }


    if (final2 == 'EARTH') {

        var image2 = document.getElementById('image2');
        image2.src = 'Earth.png';
    }
    if (final2 == 'MOON') {

        var image2 = document.getElementById('image2');
        image2.src = 'Moon.png';
    }

   else if (final2 == 'SATURN') {

        var image2 = document.getElementById('image2');
        image2.src = 'saturn.png';
    }

    else if (final2 == 'JUPITER') {

        var image2 = document.getElementById('image2');
        image2.src = 'jupiter.png';
    }





}


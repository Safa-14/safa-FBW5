$(document).ready(function () {
    let Shuffle = window.Shuffle;
    let element = document.querySelector('.container');


    let shuffleInstance = new Shuffle(element, {
        itemSelector: '.content',

    });

    $('#btnPolitics').click(function (e) {
        e.preventDefault();
        shuffleInstance.filter('politics');
    });

    $('#btnSport').click(function (e) {
        e.preventDefault();
        shuffleInstance.filter('sport');
    });

    $('#btnAll').click(function (e) {
        e.preventDefault();
        shuffleInstance.filter(Shuffle.ALL_ITEMS);
    });

});
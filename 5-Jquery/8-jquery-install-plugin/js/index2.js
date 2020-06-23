
$(document).ready(function () {
    import Shuffle from 'shuffle.js';
    const shuffleInstance = new Shuffle(document.getElementById('grid'), {
        itemSelector: '.js-item',
        sizer: '.js-shuffle-sizer'
      });
});
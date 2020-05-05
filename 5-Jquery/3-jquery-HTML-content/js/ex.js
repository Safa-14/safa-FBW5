$(document).ready(function () {
    // $( "#sec" ).accordion();
    var allPanels = $('#accordion > p').hide();
    
    $('#accordion >  a').click(function() {
      allPanels.slideUp();
      $(this).next().slideDown();
      return false;
    });

});
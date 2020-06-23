$( function() {
    $( "#datepicker" ).datepicker();
    $('#dateBtn').click(function (e) { 
        e.preventDefault();
        alert($( "#datepicker" ).val())
    });
  } );
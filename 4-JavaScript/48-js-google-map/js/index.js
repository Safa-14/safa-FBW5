var map;
var contentString = ''

function initMap() {
  //SET THE MAP
  map = new google.maps.Map(document.getElementById('map-div'), {
    center: {lat: 53.550270,lng: 10.025270},
    zoom: 15, //from 0 to 20
    maxZoom: 15, //manajamch nzoom akther men 15
    disableDefaultUI: true //akela 7ejet eli yatl3ou ma3 l5arita kima zoom w kol
  });

  //SET MARKER IMAGE
  var image = {
    url: '../imgs/marker.gif',
    //size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(50, 100),
    scaledSize: new google.maps.Size(100, 100)
  };

  //SET THE MARKER
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: {lat: 53.550270,lng: 10.025270},
    map: map,
    icon:image,
    title:'DCI Hamburg',
    label:'DCI',
    draggable:true,
    animation:google.maps.Animation.DROP // or BOUNCE it will bounce
  });

  //SETUP INFO WINDOW
  var infowindow = new google.maps.InfoWindow({
    content: document.querySelector('#windowContainer').innerHTML
  });
  
  //add event to the marker
  marker.addListener('mouseover', function() {
    infowindow.open(map, marker);
  });
}

//zoom google map dynamically from earth to dci with setinterval



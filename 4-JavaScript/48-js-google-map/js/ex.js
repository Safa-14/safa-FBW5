var map;
var curZoom = 1

function initMap() {
    
    var interval = setInterval(() => {
        map = new google.maps.Map(document.getElementById('map-div'), {
            center: {
                lat: 53.550270,
                lng: 10.025270
            },
            zoom: curZoom, //from 0 to 20
        });

        curZoom += 1

        if (curZoom === 20) {
            clearInterval(interval);
            var marker = new google.maps.Marker({
                position: {
                    lat: 53.550270,
                    lng: 10.025270
                },
                map: map,

                title: 'DCI Hamburg',
                label: 'DCI',
                draggable: true,
                animation: google.maps.Animation.DROP 
            });
        }

    }, 500);


}


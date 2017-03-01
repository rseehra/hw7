var locations = [
    ["Maclaurin Building",
        48.463063,-123.313952,
     ],
    [
    		"University Center/Mystic Market",
        48.464721,-123.311777
    ],
     [
         "Mcpherson Library/Biblio Cafe",
         48.463217, -123.309886
    ]
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: new google.maps.LatLng(48.462925, -123.311903),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });


  

        var infowindow = new google.maps.InfoWindow();

    
var counter =0;
    for (var i = 0; i < locations.length; i++) {  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          counter++;
        infowindow.setContent(locations[i][0] + " " + locations[i][1] + "," + locations[i][2] + "  Count:" + counter);
          console.log("logged the click event" + counter);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }


    
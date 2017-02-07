    (function($) {
      "use strict";
/* ==============================================
MAP -->
=============================================== */

  var locations = [
    ['<div class="infobox"><h3 class="title"><a href="/about-us/">OUR OFFICE</a></h3><span>Breckenridge House 274 Sauchiehall Street Glasgow G2 3EH Scotland</span><br>0800 056 3983</p></div></div></div>', 55.865506, -4.262564, 2]
    ];
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      scrollwheel: false,
      navigationControl: true,
      mapTypeControl: false,
      scaleControl: false,
      draggable: true,
      styles: [ { "stylers": [ { "hue": "#000" },  {saturation: -100},
                {gamma: 1.6} ] } ],
      center: new google.maps.LatLng(55.865506, -4.262564),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  
    var infowindow = new google.maps.InfoWindow();
  
    var marker, i;
  
    for (i = 0; i < locations.length; i++) {  
    
      marker = new google.maps.Marker({ 
      position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
      map: map ,
      icon: '/images/marker.png'
      });
  
  
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

    })(jQuery);
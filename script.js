function iniciarMap(){
    var coord = {lat:  49.9469  ,lng:  41.7325  };
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
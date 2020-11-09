var newMap = L.map('map').setView([29.76,-95.37], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href=”http://osm.org/copyright”>OpenStreetMap</a> contributors'
}).addTo(newMap);

d3.json("https://raw.githubusercontent.com/florin-vasiliu/FinalProject/master/GeoJSON/Houston_CenTracts.geojson",function(data){
  // add GeoJSON layer to the map once the file is loaded
  var datalayer = L.geoJson(data ,{
  onEachFeature: function(feature, featureLayer) {
      featureLayer.bindPopup(feature.properties.TRACT);
      featureLayer.on('click', function (){
        document.getElementById("tract").innerHTML = feature.properties.TRACT;
      })
  }}).addTo(newMap);
  newMap.fitBounds(datalayer.getBounds());
  });
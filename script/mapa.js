function initMap() {
        var itatiba = {lat: -23.0058893, lng: -46.8442758};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: itatiba
        });
        var marker = new google.maps.Marker({
          position: itatiba,
          map: map,
          title: 'Itatiba'
        });
var locations = [
  ['Zooparque de Itatiba', -23.046626, -46.747236],
  ['Parque Luiz Latorre', -23.028463, -46.838834],
  ['Clube de Campo Fazenda', -22.9570233, -46.7680214],
  ['Eco Run Clube', -22.9694487,-46.7760334],
  ['Parque Ferraz Costa', -22.994255,-46.8385799],
  ['Teatro Ralino Zambotto', -23.0239296,-46.9132034],
  ['Hotel Fazenda Dona Carolina', -22.9395816,-46.7708667],
  ['Praça da bandeiraa', -23.0055097,-46.8413031],
  ['Fazenda Pereira', -22.9678206,-46.8208151],
  ['Hotel Fazenda Nosso Sonho', -23.051065,-46.8467537],
  ['Villa DAngelo Resort Hotel', -23.0444053,-46.8491893],
  ['Mercado Municipal Dona Lica',-23.0079446,-46.8455387],
  ['Palacete Damásio', -23.0058777,-46.8424211],
  ['Pista de Aeromodelismo Senta a Pua!', -22.994253,-46.8385794],
 
];

for (i = 0; i < locations.length; i++) {  
  marker = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    title: locations[i][0],
   
    map: map
  });
}

      }
 //var marker = L.marker([51.5, -0.09]).addTo(mymap);
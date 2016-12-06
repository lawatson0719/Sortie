// Map Code for all data points on one map
render : function() {

    var zoom = 8;
    var markers = [];
    var position = [0,0];
    var data

    // console.log('this.state.data: ' + JSON.stringify(this.state.data));
    if (this.state === null) {
      return null;
    }
      
    data = this.state.data.data;

    this.state.index = 50;

    for (var i = 0, len = data.length; i < len; i++) {

      position = [ data[ i ].lat, data[ i ].lon ];
      markers.push( <Marker key={i} position={position}></Marker> );
    }
    
    return (
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://api.mapbox.com/styles/v1/montytotten/ciw8ae2bw000w2qme1ie8s9cf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9udHl0b3R0ZW4iLCJhIjoiY2l3M3ZvNTg1MDNtdDJvanZicjhvOGpoeiJ9.kSSJlSMxuMzf-Relwp9dOg'
        />
        {markers}
      </Map>
    );
  }
});


//  Map Popup code
 <Popup>
            <span><DroneLocation data={data} /><DroneDate data={data} /><DroneDeaths data={data} /></span>
          </Popup>
mapboxgl.accessToken =
  "pk.eyJ1Ijoib3Vzc2FtYTIwMjMiLCJhIjoiY2xzYmtoZDkxMDJzYzJtbWhrN3VuMDhxNiJ9.20vQPo1K1sLhHZgzpIejkw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/examples/clg45vm7400c501pfubolb0xz",
  center: [-7.6498092, 33.5427328],
  zoom: 12,
});

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.6403525, 33.5430359],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.655013079892126, 33.53429699201245],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.64820922442506, 33.554841993241006],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.628911195046597, 33.52106216198838],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.626240916200977, 33.54459186787761],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.630915008696994, 33.54555389298911],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.641992527238289, 33.564656579904394],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.635706695475866, 33.52925355000557],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.644165575289867, 33.52371472866993],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.654714200491618, 33.515138207344506],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-7.653074968300015, 33.529752078836246],
      },
    },

  ],
};



// add markers to map
geojson.features.forEach(function (marker) {
  // create a HTML element for each feature

  // make a marker for each feature and add to the map
  new mapboxgl.Marker().setLngLat(marker.geometry.coordinates).addTo(map);
});


map.on("load", function () {
    const coordinates = geojson.features.map(feature => feature.geometry.coordinates);
  
    const lats = coordinates.map(coord => coord[1]);
    const lngs = coordinates.map(coord => coord[0]);
  
    const maxLat = Math.max(...lats);
    const minLat = Math.min(...lats);
    const maxLng = Math.max(...lngs);
    const minLng = Math.min(...lngs);
  
    map.fitBounds([[minLng, minLat], [maxLng, maxLat]], {
      padding: 50
    });
  
    geojson.features.forEach(function (marker) {
        new mapboxgl.Marker().setLngLat(marker.geometry.coordinates).addTo(map);
    });
  });
  
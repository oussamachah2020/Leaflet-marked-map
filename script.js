// mapboxgl.accessToken =
//   "pk.eyJ1Ijoib3Vzc2FtYTIwMjMiLCJhIjoiY2xzYmtoZDkxMDJzYzJtbWhrN3VuMDhxNiJ9.20vQPo1K1sLhHZgzpIejkw";
// const map = new mapboxgl.Map({
  //   container: "map",
  //   style: "mapbox://styles/examples/clg45vm7400c501pfubolb0xz",
  //   center: [-7.6498092, 33.5427328],
  //   zoom: 12,
  // });
  // // add markers to map
  // geojson.features.forEach(function (marker) {
  //   // create a HTML element for each feature
  
  //   // make a marker for each feature and add to the map
  //   new mapboxgl.Marker().setLngLat(marker.geometry.coordinates).addTo(map);
  // });
  
  // map.on("load", function () {
  //     const coordinates = geojson.features.map(feature => feature.geometry.coordinates);
  
  //     const lats = coordinates.map(coord => coord[1]);
  //     const lngs = coordinates.map(coord => coord[0]);
  
  //     const maxLat = Math.max(...lats);
  //     const minLat = Math.min(...lats);
  //     const maxLng = Math.max(...lngs);
  //     const minLng = Math.min(...lngs);
  
  //     map.fitBounds([[minLng, minLat], [maxLng, maxLat]], {
  //       padding: 50
  //     });
  
  //     geojson.features.forEach(function (marker) {
  //         new mapboxgl.Marker().setLngLat(marker.geometry.coordinates).addTo(map);
  //     });
  //   });

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.53429699201245, -7.655013079892126],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.554841993241, -7.64820922442506],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.54459186787761, -7.626240916200977],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.54555389298911, -7.630915008696994],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.564656579904394, -7.641992527238289],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.52925355000557, -7.635706695475866],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.52371472866993, -7.644165575289867],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.515138207344506, -7.654714200491618],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.529752078836246, -7.653074968300015],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.515138207344506, -7.654714200491618],
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [33.529752078836246, -7.653074968300015],
      },
    },
  ],
};

var map = L.map("map").setView(geojson.features[0].geometry.coordinates, 10);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var coordinates = geojson.features.map(function (feature) {
  return feature.geometry.coordinates;
});

var bounds = L.latLngBounds(coordinates);

map.fitBounds(bounds);

// Add markers to the map
geojson.features.forEach(function (marker, index) {
  var target = L.marker(marker.geometry.coordinates).addTo(map);
  target.bindPopup(`<br>I am a popup ${index}`).openPopup();
});


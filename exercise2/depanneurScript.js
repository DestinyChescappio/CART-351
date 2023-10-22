let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat:45.5019, lng: 73.5674 },
    zoom: 12,
  });
}

initMap();

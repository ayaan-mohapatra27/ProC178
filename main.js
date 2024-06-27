let longitude = -77.036
let latitude = 38.895

//Initializing MapBox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [longitude, latitude],
    zoom: 16,
})

var canyon= document.querySelector("#canyon")
var marker1=new mapboxgl.Marker({
    element: canyon,
})
.setLngLat([36.056595, -112.125092])
.addTo(map)

var liberty= document.querySelector("#liberty")
var marker2=new mapboxgl.Marker({
    element: liberty,
})
.setLngLat([40.689247, -74.044502])
.addTo(map)

var bridge= document.querySelector("#bridge")
var marker2=3=new mapboxgl.Marker({
    element: bridge,
})
.setLngLat([37.81806, -122.47837])
.addTo(map)

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true,
        },
        trackUserLocation: true,
    })
)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    `top-left`
)

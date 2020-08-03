
var url = "assets/data/data.csv"

var array;

$.get(url, function(data, status) {
    array = $.csv.toObjects(data);

    for (var i = 0; i < array.length; i++) {
        statesData.features.forEach(function(feature) {
            if (array[i]["state"] == feature.properties.name) {
                feature.properties["abbr"] = array[i]["abbr"];
                feature.properties["age"] = array[i]["age"];
                feature.properties["healthcare"] = array[i]["healthcare"];
                feature.properties["income"] = array[i]["income"];
                feature.properties["obesity"] = array[i]["obesity"];
                feature.properties["poverty"] = array[i]["poverty"];
                feature.properties["smokes"] = array[i]["smokes"];
            };
        });
    };
});

console.log(statesData);

const API_KEY = "pk.eyJ1IjoiY2FtaWxvaSIsImEiOiJja2J5MmFuMWowZGZzMnNwanl3aHhrMXlkIn0.T5o02VrPvl-2Qq7hzbIqHg";

var myMap = L.map("map").setView([37,-95], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap);
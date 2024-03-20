class MapSetup
{
    constructor(latlong)
    {
        this.map_setup=L.map('map').setView(latlong,12);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map_setup);
    }
}

const latlong =[1.289,103.81] //SG latitude and longitude
var map = new MapSetup(latlong);

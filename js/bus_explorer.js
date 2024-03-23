const sw = L.latLng(1.144, 103.535);
const ne = L.latLng(1.494, 104.502);
const bounds = L.latLngBounds(sw, ne);

class MapSetup
{
    constructor(latlong)
    {
        this.map_setup=L.map('map').setView(latlong,12);
        this.map_setup.setMaxBounds(bounds);
        L.tileLayer('https://www.onemap.gov.sg/maps/tiles/Default/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 11,
        //attribution: '<img src="https://www.onemap.gov.sg/web-assets/images/logo/om_logo.png" style="height:20px;width:20px;"/>&nbsp;<a href="https://www.onemap.gov.sg/" target="_blank" rel="noopener noreferrer">OneMap</a>&nbsp;&copy;&nbsp;contributors&nbsp;&#124;&nbsp;<a href="https://www.sla.gov.sg/" target="_blank" rel="noopener noreferrer">Singapore Land Authority</a>'
        }).addTo(this.map_setup);
    }
}

const latlong =[1.289,103.81] //SG latitude and longitude
var map = new MapSetup(latlong);

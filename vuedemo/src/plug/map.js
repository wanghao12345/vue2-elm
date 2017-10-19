import AMap from 'AMap'

let city;
let map = new AMap.Map("", {});
let citysearch = new AMap.CitySearch();

citysearch.getLocalCity(function(status, result) {
    if (status === 'complete' && result.info === 'OK') {
        if (result && result.city && result.bounds) {
            var cityinfo = result.city;
            var citybounds = result.bounds;
            city = cityinfo;
        }
    } else {
        city = "上海市";
    }
});
export{
    city
}





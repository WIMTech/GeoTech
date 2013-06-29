var c = function(pos){
var lat = pos.coords.latitude,
long = pos.coords.longitude,
coords = lat + ', '+ long;
document.getElementById('google_map').setAttribute('src', 'https://maps.google.com/?q=' + coords + '&z=14&output=embed')
}

document.getElementById('get_location').onclick = function(){
navigator.geolocation.getCurrentPosition(c);
return false;
}

var c = function(pos){
var lat = pos.coords.latitude,
long = pos.coords.longitude,
coords = lat + ', '+ long;
document.getElementById('google_map2').setAttribute('src', 'https://maps.google.com/?q=' + coords + '&z=14&output=embed')
}
document.getElementById('get_location2').onclick = function(){
navigator.geolocation.getCurrentPosition(c);
return false;
}

var c = function(pos){
var lat = pos.coords.latitude,
long = pos.coords.longitude,
coords = lat + ', '+ long;
document.getElementById('google_map3').setAttribute('src', 'https://maps.google.com/?q=' + coords + '&z=14&output=embed')
}
document.getElementById('get_location3').onclick = function(){
navigator.geolocation.getCurrentPosition(c);
return false;
}


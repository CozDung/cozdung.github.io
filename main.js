let coords = {};
navigator.geolocation.getCurrentPosition( function(position){
    console.log(position.coords)
    coords = position.coords
    }, function (err) {
        console.log(err)
    }
)
function openMap(){
    location.href = "https://www.google.com/maps/@"+coords.latitude +","+ coords.longitude
}


var mke = "5263058";
var chi = "4887398";
var api_cities = "5263058,4887398";
var app_id = "923e44385481ced80694c62dda9823b1";

function get_curr_temp(json) {
    for (i=0; i < json.list.length; i++) {
        city_id = json.list[i].id;
        full_temp = String(json.list[i].main.temp);
        display_temp = full_temp.substr(0, full_temp.indexOf('.')) + "&#8457;";
        document.getElementById(city_id).innerHTML = display_temp;
    }        
}

$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "http://api.openweathermap.org/data/2.5/group?id="+api_cities+"&appid="+app_id+"&units=imperial",
        dataType: "json",
        success: function(result, status, xhr) {
            get_curr_temp(result);
        },
        error: function(xhr, status, error) {
            console.log("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
    });

    $('.loc-card').click(function() {
        $('#fullscreen').show('slow');
    });

    $('#exit').click(function() {
        $('#fullscreen').hide('slow');
    });
});

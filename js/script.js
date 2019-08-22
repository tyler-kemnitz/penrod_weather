var api_cities = "5263058,4887398,5037649,4684888"; //mke, chi, minn, dallas
var app_id = "923e44385481ced80694c62dda9823b1";


function get_day_name(y, m, d) {
    //returns day of week based on date given
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];
    var res = new Date(y, --m, d);
    return res && days[res.getDay()];
}

function get_month_name(y, m, d) {
    //returns month of year based on date given
    var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    res = new Date(y, --m, d);
    return res && months[res.getMonth()];
}

function translate_time_stamp(time) {
    /*converts timestamp from OpenWeatherMap API,
    helper function for get_curr_temp()*/
    var date = new Date(time*1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var res = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return res;
}

function display_weekdays() {
    //Displays next five days from current date
    var today = new Date();
    for (i=0; i < 5; i++) {
        next_day = new Date(today);
        next_day.setDate(today.getDate() + i);

        var day = String(next_day.getDate()).padStart(2, '0');
        var month = String(next_day.getMonth() + 1).padStart(2, '0');
        var year = next_day.getFullYear();

        var $display_day = get_day_name(year, month, day);
        var $display_month = get_month_name(year, month, day);

        //set up html elements to be added to page
        var $date_block = $("<div class='slds-col slds-grid slds-grid_vertical slds-grid_vertical-align-center date-block'></div>");
        var $date_col = $("<div class='slds-col slds-text-heading_medium date'></div>");
        var $weekday_p = $("<p class='weekday'>" + $display_day + "</p>");
        var $date_p = $("<p class='date'>" + $display_month + " " + day + ", " + year + "</p>");
        //update page
        $('#five-day').append($date_block);
        $($date_block).append($date_col);
        $($date_col).append($weekday_p, $date_p);
    }
} 

function get_curr_temp(json) {
    for (i=0; i < json.list.length; i++) {
        //get current temp for each city on initial display
        var city_id = json.list[i].id;
        //TODO::Need to check if full_high or low doesn't have decimcal before parsing further
        var full_high = String(json.list[i].main.temp_max);
        var full_low = String(json.list[i].main.temp_min);
        var display_high = full_high.substr(0, full_high.indexOf('.')) + String.fromCharCode(176) + "F";
        var display_low = full_low.substr(0, full_low.indexOf('.')) + String.fromCharCode(176) + "F";
        var $display_temp = display_high + " / " + display_low;
        //determine weather icon based on weather description and time
        var weather_desc = json.list[i].weather[0].id;
        var time_stamp = translate_time_stamp(json.list[i].dt);
        var $img_src = determine_weather_icon(weather_desc, time_stamp);
        //update page
        //document.getElementById(city_id).innerHTML = display_temp;
        $('img.'+city_id).attr('src', $img_src);
        $('span.'+city_id).text($display_temp);
    }        
}

function get_five_day(json) {
    //Parses JSON data from OpenWeatherMap API to update website
    for (i=0; i < json.list.length; i++) {
        //separate date and time to determine weather icon later
        var time_stamp = json.list[i].dt_text;
        time_stamp = time_stamp.split(" "); 
        var day_mm_year = time_stamp[0];
        var time = time_stamp[1];
        //get number of day to check for day blocks on site
        var day_num = day_mm_year.substr(day_mm_year.lastIndexOf('-') + 1);
        //split year, month, day to get Day of week for site
        var date_array = day_mm_year.split('-');
        var day = get_day_name(date_array[0], date_array[1], date_array[2]);
        //if condition somewhere
        //get high and low temperature for the day, as well as desc. for weather
        low_temp = String(json.list[i].main.temp_min);
        high_temp = String(json.list[i].main.temp_max);
        display_high = high_temp.substr(0, high_temp.indexOf('.')) + "&#8457;";
        display_low = low_temp.substr(0, low_temp.indexOf('.')) + "&#8457;";
        weather_desc = json.list[i].weather.id;
    }
}

function determine_weather_icon(desc, time) {
    //Selects image src for weather icon based on weather description
    //grab first digit of number to determine OpenWeatherMap code category
    var first_digit = String(desc).charAt(0);
    first_digit = Number(first_digit);
    //get hour of day to further specify icon
    var hour = time.substr(0, time.indexOf(':'));

    //check for precipatation-type weather first 
    if (first_digit == 2 || first_digit == 3 || first_digit == 5 || desc == 781) {
        return 'css/assets/images/rain.png';
    } else if (first_digit == 6) {
        return 'css/assets/images/snow.png';
    } else if (first_digit == 7) {
        return 'css/assets/images/part_cloud.png';
    }
    //check for cloudy/clear weather based on time
    if (hour <= 4 || hour >= 18) {
        if (desc == 800) {
            return 'css/assets/images/moon.png';
        } else {
            return 'css/assets/images/moon_cloudy.png';
        }
    } else {
        if (desc == 800) {
            return 'css/assets/images/sunny.png';
        } else return 'css/assets/images/part_cloud.png';
    }
}

function update_five_day_report(high, low, desc, day, time) {
    //Adds HTML given data for a particular day of the week
    var $weather_block = $("<div id='weather-block' class='slds-col slds-grid slds-grid_vertical slds-grid_vertical-align_center'>Test Block</div>");
    var $day_col = $("<div class= 'slds-col slds-text-heading_medium weather-day'>" + day + "</div> ");
    //determine img src for weather icon and add appropriate image
    var $img_src = determine_weather_icon(desc, time);
    //var $icon_col = $("<img class='forecast-icon' src='css/assets/images/rain.png' /> ");
    var $icon_col = $("<img class='forecast-icon' src=" + $img_src + " /> ");
    var $high_low_col = $(" <div class='slds-col slds-text-heading_small'></div> ");
    var $high_temp = $(" <span class='weather-high'>" + high + " / </span> ");
    var $low_temp = $(" <span class='weather-low'>" + low + "</span> ");

    //append to five-day weather report sequentially
    $("#five-day").append($weather_block);
    $($weather_block).append($day_col, $icon_col, $high_low_col);
    $($high_low_col).append($high_temp, $low_temp);
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
        //first grab city and temp for fullscreen view
        var $city_state = $(this).find('h2.location').text();
        var $temp = $(this).find('span.temp').text();
        var $curr_img_src = $(this).find('img').attr('src');
        $('#city-state').text($city_state);
        $('#current-temp').text($temp);
        $('#curr-icon').attr('src', $curr_img_src);
        //populate weekday blocks
        if ($('#five-day').is(':empty')) {
            display_weekdays();
        }
        $('#transparent').css("opacity", "0.6");
        $('#fullscreen').show('slow');
    });

    $('#exit').click(function() {
        $('#fullscreen').hide('slow');
        $('#transparent').css("opacity", "1");
    });
});

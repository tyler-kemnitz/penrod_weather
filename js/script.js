var api_cities = "5263058,4887398,5037649,4684888"; //mke, chi, minn, dallas
var app_id = "923e44385481ced80694c62dda9823b1";
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
'Thursday', 'Friday', 'Saturday'];
const MONTHS = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

function get_day_name(y, m, d) {
    //returns day of week based on date given
    var res = new Date(y, --m, d);
    return res && DAYS[res.getDay()];
}

function get_month_name(y, m, d) {
    //returns month of year based on date given
    res = new Date(y, --m, d);
    return res && MONTHS[res.getMonth()];
}

function convert_html_timestamp(clicked_date) {
    /*converts time from clicked date block into a format
    that can be compared to OpenWeatherMap's dt_text variable;
    helper function for get_hourly_report*/
    clicked_date = clicked_date.replace(",", "");
    var date_array = clicked_date.split(" ");
    var month_num = MONTHS.indexOf(date_array[0]) + 1;
    var month_str = month_num.toString().padStart(2,"0");
    var day_str = date_array[1].padStart(2,"0");
    var res = date_array[2] + "-" + month_str + "-" + day_str;
    return res;
}

function parse_display_temp(temp) {
    //Truncates temperature from OpenWeatherMap API if needed
    var res = temp;
    if (res.includes('.')) {
        res = res.substr(0, res.indexOf('.'));
    }
    res += (String.fromCharCode(176) + "F");
    return res;
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

function military_to_standard(time) {
    //converts military time to standard, returning a string
    var res;
    var time_arr = time.split(':');
    var hours = Number(time_arr[0]);
    var minutes = Number(time_arr[1]);

    if (hours > 0 && hours <= 12) {
        res = "" + hours;
    } else if (hours > 12) {
        res = "" + (hours-12);
    } else if (hours == 0) {
        res = "12";
    }

    res += (minutes < 10) ? ":0" + minutes : ":" + minutes; //get minutes
    res += (hours >= 12) ? " P.M." : " A.M.";  //get AM/PM

    return res;
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
        return './css/assets/images/rain.png';
    } else if (first_digit == 6) {
        return './css/assets/images/snow.png';
    } else if (first_digit == 7) {
        return './css/assets/images/part_cloud.png';
    }
    //check for cloudy/clear weather based on time
    if (hour <= 4 || hour >= 18) {
        if (desc == 800) {
            return './css/assets/images/moon.png';
        } else {
            return './css/assets/images/moon_cloudy.png';
        }
    } else {
        if (desc == 800) {
            return './css/assets/images/sunny.png';
        } else return './css/assets/images/part_cloud.png';
    }
}

function display_weekdays(city_id) {
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
        var $date_block = $("<div class='slds-col slds-grid slds-size_1-of-5 slds-grid_vertical slds-grid_vertical-align-center date-block'></div>");
        var $date_col = $("<div class='slds-col slds-text-heading_medium date'></div>");
        var $weekday_p = $("<p class='weekday'>" + $display_day + "</p>");
        var $date_p = $("<p class='date'>" + $display_month + " " + day + ", " + year + "</p>");
        //add city ID to date blocks for future API calls
        var $city_identifier = $(" <input type='hidden' id='city-identifier' name='city-identifier' value=" + city_id + "></input");
        //update page
        $('#five-day').append($date_block);
        $($date_block).append($date_col);
        $($date_col).append($weekday_p, $date_p, $city_identifier);
    }
} 

function get_curr_temp(json) {
    for (i=0; i < json.list.length; i++) {
        //get current temp for each city on initial display
        var city_id = json.list[i].id;
        //TODO::Need to check if full_high or low doesn't have decimcal before parsing further
        var full_high = String(json.list[i].main.temp_max);
        var full_low = String(json.list[i].main.temp_min);
        var display_high = parse_display_temp(full_high);
        var display_low = parse_display_temp(full_low);
        var $display_temp = display_high + " / " + display_low;
        //determine weather icon based on weather description and time
        var weather_desc = json.list[i].weather[0].id;
        var time_stamp = translate_time_stamp(json.list[i].dt);
        var $img_src = determine_weather_icon(weather_desc, time_stamp);
        //get sunrise and sunset times to display
        var sunrise_timestamp = json.list[i].sys.sunrise;
        var sunset_timestamp = json.list[i].sys.sunset;
        var display_sunrise = military_to_standard(translate_time_stamp(sunrise_timestamp));
        var display_sunset = military_to_standard(translate_time_stamp(sunset_timestamp));
        //store html elements for sunrise/sunset to append to page's div
        var $sunrise = (" <p class='rise-set'>SUNRISE: " + display_sunrise + "</p>");
        var $sunset = (" <p class='rise-set'>SUNSET: " + display_sunset + "</p>");
        //update page
        $('img.'+city_id).attr('src', $img_src);
        $('span.'+city_id).text($display_temp);
        $('div.'+city_id).append($sunrise, $sunset);
    }        
}

function get_hourly_report(json, date) {
    //Parses JSON data from OpenWeatherMap API to update website for hourly report
    var block_count = 0;
    for (i=0; i < json.list.length; i++) {
        //separate date and time to determine weather icon later
        var time_stamp = json.list[i].dt_txt;
        var time_arr = time_stamp.split(" ");
        var year_month_day = time_arr[0];
        var hour_min_sec = time_arr[1];
        if (year_month_day == date) {
            var hour = time_stamp.substr(time_stamp.indexOf(" ")+1);
            //get high and low temperature for the day
            var temp = String(json.list[i].main.temp);
            var display_temp = parse_display_temp(temp);
            //determine weather icon based on weather description and time
            var weather_desc = json.list[i].weather[0].id;
            //update page
            update_hourly_report(display_temp, weather_desc, military_to_standard(hour_min_sec));
            block_count += 1;
        }
    }
    //if no data was found for a particular day, update page to let user know
    if (block_count == 0) {
        $no_data = (" <p class='sorry-msg'>Apologies; Currently no weather available for this day.</p> ");
        $('.hour-head').append($no_data);
    } else $('.hour-head').text("");
}

function update_hourly_report(temp, desc, time) {
    //Adds HTML for hourly weather given data for a particular day of the week
    var $weather_block = $("<div class='weather-block slds-col slds-grid slds-grid_vertical'></div>");
    var $day_col = $("<div class= 'slds-col slds-text-align_center weather-time'>" + time + "</div> ");
    //determine img src for weather icon and add appropriate image
    var $img_src = determine_weather_icon(desc, time);
    var $temp_block = $(" <div class='slds-col slds-grid slds-grid_align-center'></div> ");
    var $icon_block = $(" <div class='forecast-icon-container'></div> ");
    var $icon_col = $("<img class='forecast-icon' alt='weather-icon' src=" + $img_src + " /> ");
    var $high_low = $(" <span class='weather-hl'>" + temp + "</span> ");

    //append to five-day weather report sequentially
    $("#hourly-report").append($weather_block);
    $($weather_block).append($day_col, $temp_block);
    $($temp_block).append($icon_block, $high_low);
    $($icon_block).append($icon_col);
}

$(document).ready(function() {
    $.ajax({    //AJAX request for all four cities current weather
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

    //display full weather report view on click of any city card
    $('.loc-card').click(function() {
        //first grab city and temp for fullscreen view
        var $city_state = $(this).find('h2.location').text();
        var $temp = $(this).find('span.temp').text();
        var $curr_img_src = $(this).find('img').attr('src');
        //grab city ID and store in weekday blocks to use for AJAX request later
        var $curr_city = $(this).find('img').attr('class');
        $('#city-state').text($city_state);
        $('#current-temp').text($temp);
        $('#curr-icon').attr('src', $curr_img_src);
        //populate weekday blocks
        if ($('#five-day').is(':empty')) {
            display_weekdays($curr_city);
        }
        //go to top of page and display hourly full weather report view
        $('html, body').animate({
            scrollTop: $("#fullscreen").offset().top
        }, 500);
        $('#transparent').css("opacity", "0.6");
        $('#fullscreen').show('slow');
        $('#five-day').show('slow');
    });

    //allow exit from fullscreen weather report via exit icon
    $('#full-exit').click(function() {
        $('#fullscreen').hide('slow');
        $('#hourly-report').hide();
        $('#transparent').css("opacity", "1");
    });

    //display hourly weather data for date clicked on
    $(document).on("click", "div.date", function() {
        var clicked_date = $(this).find('p.date').text();
        var converted_timestamp = convert_html_timestamp(clicked_date);
        var city_id = $(this).find('input#city-identifier').val();
        $.ajax({
            type: "POST",
            url: "http://api.openweathermap.org/data/2.5/forecast?id="+city_id+"&appid="+app_id+"&units=imperial",
            dataType: "json",
            success: function(result, status, xhr) {
                //update date header
                $('.hourly-date').html(clicked_date);
                //clear contents from any previous user clicks before displaying new data
                $('.weather-block').remove()
                get_hourly_report(result, converted_timestamp);
                //switch user views
                $('#five-day').hide('slow');
                $('#hourly-report').show('slow');
            },
            error: function(xhr, status, error) {
                console.log("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
            }
        })
    });
    //if user clicks outside fullscreen report div, close it
    $(document).mouseup(function(e) {
        var container = $("#fullscreen");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide('slow');
            $('#hourly-report').hide();
            $("#transparent").css("opacity", "1");
        }
    });

    //if user clicks outside hourly report div, close it
    $(document).mouseup(function(e) {
        var container = $("#hourly-report");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide('slow');
            $('#five-day').show('slow');
        }
    });

    //allow exit from hourly report via exit icon
    $('#hourly-exit').click(function() {
        $('#hourly-report').hide('slow');
        $('#five-day').show('slow');
    });
});

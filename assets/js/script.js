$(document).ready(function() {
    $('form').submit(function() {
        let city = $("#city").val();
        let apikey = prompt("Provide your API Key");
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&&appid=" + apikey;

        $.get(url, function(res) {
            $(".result").append($("<p>", {id: "city-status"}));
            $("#city-status").text(res.name + ": " + res.weather[0].description);
            $(".result").append($("<p>", {id: "temperature"}));
            $("#temperature").text("Temperature: " + res.main.temp);
            $(".result").append($("<p>", {id: "coords"}));
            $("#coords").text("Coord: " + res.coord.lon + ", " + res.coord.lat);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});

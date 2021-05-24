$(function() {

    function createTime() {
        let currentTime = new Date();

        let currentHour = currentTime.getHours();
        let currentMinute = currentTime.getMinutes();
        let currentSecond = currentTime.getSeconds();

        currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
        currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;

        let currentMeridiam = (currentHour < 12) ? "am" : "pm";

        currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;

        currentHour = (currentHour == 0) ? 12 : currentHour;

        let currentTimeString = `${currentHour}:${currentMinute} ${currentMeridiam}`;

        let todaysDate = currentTime.getDate();
        let todaysMonthString = currentTime.toLocaleString('default', {month: 'long'})
        let thisYear = currentTime.getFullYear();

        // $("#currentTime").html(currentTimeString);

        // let myLocation = navigator.geolocation.getCurrentPosition(showPosition);

        // console.log(myLocation);

        // $("#currentTime").html()

        $("#showTime").val(currentTimeString);

        $("#showDate").val(todaysDate);

        $("#showMonth").val(todaysMonthString);

        $("#showYear").val(thisYear);


    };

    createTime();

    setInterval(createTime, 1000);

    function getMyLocation() {
        if ("geolocation" in navigator) { //check geolocation available 
            //try to get user current location using getCurrentPosition() method
            navigator.geolocation.getCurrentPosition(function(position){ 
                    console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
                    $("#currentTime").html("Your location is" + position.coords.latitude + position.coords.longitude +"Have a nice day")
            });
        }else{
            console.log("Browser doesn't support geolocation!");
        }
    }

    getMyLocation();


    function getCities() {
        
        $("#checkBtn").click(function() {
            
            let date = new Date();

            // let foreignHour = date.getHours();
            // let foreignMinute = date.getMinutes();

            // foreignMinute = (foreignMinute < 10 ? "0" : "") + foreignMinute;
            
            // let foreignMeridiam = (foreignHour < 12) ? "am" : "pm";

            // foreignHour = (foreignHour > 12) ? foreignHour - 12 : foreignHour;

            // foreignHour = (foreignHour == 0) ? 12 : foreignHour;

            // let foreignTime = `${foreignHour}:${foreignMinute} ${foreignMeridiam}`;

            let thisCity = "London";
            let thisCountry = "Europe";

            // let thisCity = $("#city").val();
            // let thisCountry = $("#country").val();
            console.log(thisCountry);
            console.log(thisCity);

            let dateAbroad = date.toLocaleString('en-US', {timeZone: `${thisCountry}/${thisCity}` });
            console.log(dateAbroad)

            $("#selectedTimezone").html(dateAbroad);
            
        });
        
        
        
    };

    getCities();

    
})
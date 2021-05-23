$(function() {

    function createTime() {
        let currentTime = new Date();

        let currentHour = currentTime.getHours();
        let currentMinute = currentTime.getMinutes();
        let currentSecond = currentTime.getSeconds();

        currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
        currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;

        let currentMeridiam = (currentHour < 12) ? "AM" : "PM";

        currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;

        currentHour = (currentHour == 0) ? 12 : currentHour;

        let currentTimeString = `${currentHour}:${currentMinute}:${currentSecond} ${currentMeridiam}`;

        if ($("#localTime").prop("checked", true)) {
            $("#currentTime").html(currentTimeString);
        }

        // if ($("#localTime").prop("checked", false)) {
        //     $("#localTime").attr("checked", false);
        //     $("#currentTime").hide();
        // } else {
        //     $("#localTime").attr("checked", true);
        //     $("#currentTime").html(currentTimeString);
        // }
    };

    createTime();

    setInterval(createTime, 1000);

    function timeZones() {
        if ($("#otherTime").is(":checked")) {
            $("#currentTime").html(currentTimeString).hide();
            
            let formDiv = '<div class="form-group mx-auto w-50">';
            let formInput = '<input type="text" class="form-control" id="exampleFormControlInput1"></input>';
            $("#timeZoneCheck").after(formDiv);
            formDiv.append(formInput);
        }
    }

    timeZones();

    function getCities() {

        // let country = "Africa";
        // let timeZone = "Cairo";

        // const settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://wft-geo-db.p.rapidapi.com/v1/locale/timezones/" + country + "__" + timeZone + "/time",
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-key": "9412a276cbmsh4a03f98b46a37d7p1d53c7jsnbbec000e7aac",
        //         "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
        //     }
        // };
        
        // $.ajax(settings).done(function (response) {
        //     console.log(response);
        // });

        let date = new Date();
        
        let city = $("#checkBtn").click(function() {
            
            let thisCity = $("#city").val();
            let thisCountry = $("#country").val();
            console.log(thisCountry);
            console.log(thisCity);

            let dateAbroad = date.toLocaleString('en-US', {timeZone: `${thisCountry}/${thisCity}` });
            console.log(dateAbroad)

            $("#selectedTimezone").html(dateAbroad);
        });
        
        setInterval(city, 1000);
        
    };

    getCities();
    

    // let day = currentTime.getDate();
    // let month = currentTime.getMonth() + 1;
    // let year = currentTime.getFullYear();

    // console.log(`${day}/${month}/${year} at ${time}`)

    
})
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

        $("#currentTime").html(currentTimeString);
    };

    createTime();

    setInterval(createTime, 1000);
    

    

    let day = currentTime.getDate();
    let month = currentTime.getMonth() + 1;
    let year = currentTime.getFullYear();

    console.log(`${day}/${month}/${year} at ${time}`)

    
})
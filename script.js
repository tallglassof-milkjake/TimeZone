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

    function selectYourTimezone() {
        let myLocation = "Your location";

        $("#locationSelector").val(myLocation);

        let aryIannaTimeZones = [
            {country: 'Europe', city: 'Andorra'},
            {country: 'Asia', city: 'Dubai'},
            {country: 'Asia', city: 'Kabul'},
            {country: 'Europe', city: 'Tirane'},
            {country: 'Asia', city: 'Yerevan'},
            {country: 'Antarctica', city: 'Casey'},
            {country: 'Antarctica', city: 'Davis'},
            {country: 'Antarctica', city: 'DumontDUrville'},
            {country: 'Antarctica', city: 'Mawson'},
            {country: 'Antarctica', city: 'Palmer'},
            {country: 'Antarctica', city: 'Rothera'},
            {country: 'Antarctica', city: 'Syowa'},
            {country: 'Antarctica', city: 'Troll'},
            {country: 'Antarctica', city: 'Vostok'},
            {country: 'America/Argentina', city: 'Buenos_Aires'},
            {country: 'America/Argentina', city: 'Cordoba'},
            {country: 'America/Argentina', city: 'Salta'},
            {country: 'America/Argentina', city: 'Jujuy'},
            {country: 'America/Argentina', city: 'Tucaman'},
            {country: 'America/Argentina', city: 'Catamarca'},

            
            {country: 'America/Argentina', city: 'La_Rioja'},
            {country: 'America/Argentina', city: 'San_Juan'},
            {country: 'America/Argentina', city: 'Mendoza'},
            {country: 'America/Argentina', city: 'San_Luis'},
            {country: 'America/Argentina', city: 'RioGallegos'},
            {country: 'America/Argentina', city: 'Ushuaia'},
            {country: 'Pacific', city: 'Pago_Pago'},
            {country: 'Europe', city: 'Vienna'},
            {country: 'Australia', city: 'Lord_Howe'},
            {country: 'Australia', city: 'Macquarie'},
            {country: 'Australia', city: 'Hobart'},
            {country: 'Australia', city: 'Currie'},
            {country: 'Australia', city: 'Melbourne'},
            {country: 'Australia', city: 'Sydney'},
            {country: 'Australia', city: 'Broken_Hill'},
            {country: 'Australia', city: 'Brisbane'},
            {country: 'Australia', city: 'Lindeman'},
            {country: 'Australia', city: 'Adelaide'},
            {country: 'Australia', city: 'Darwin'},
            {country: 'Australia', city: 'Perth'},

            {country: 'Australia', city: 'Eucla'},
            {country: 'Asia', city: 'Baku'},
            {country: 'America', city: 'Barbados'},
            {country: 'Asia', city: 'Dhaka'},
            {country: 'Europe', city: 'Brussels'},
            {country: 'Europe', city: 'Sofia'},
            {country: 'Atlantic', city: 'Bermuda'},
            {country: 'Asia', city: 'Brunei'},
            {country: 'America', city: 'La_Paz'},
            {country: 'America', city: 'Noronha'},
            {country: 'America', city: 'Belem'},
            {country: 'America', city: 'Fortaleza'},
            {country: 'America', city: 'Recife'},
            {country: 'America', city: 'Araguaina'},
            {country: 'America', city: 'Maceio'},
            {country: 'America', city: 'Bahia'},
            {country: 'America', city: 'Sao_Paulo'},
            {country: 'America', city: 'Campo_Grande'},
            {country: 'America', city: 'Cuiaba'},
            {country: 'America', city: 'Santarem'},

            {country: 'America', city: 'Porto_Velho'},
            {country: 'America', city: 'Boa_Vista'},
            {country: 'America', city: 'Manaus'},
            {country: 'America', city: 'Eirunep'},
            {country: 'America', city: 'Rio_Branco'},
            {country: 'America', city: 'Nassau'},
            {country: 'Asia', city: 'Thimphu'},
            {country: 'Europe', city: 'Minsk'},
            {country: 'America', city: 'Belize'},
            {country: 'America', city: 'St_Johns'},
            {country: 'America', city: 'Halifax'},
            {country: 'America', city: 'Glase_Bay'},
            {country: 'America', city: 'Moncton'},
            {country: 'America', city: 'Goose_Bay'},
            {country: 'America', city: 'Blanc-Sablon'},
            {country: 'America', city: 'Toronto'},
            {country: 'America', city: 'Nipigon'},
            {country: 'America', city: 'Thunder_Bay'},
            {country: 'America', city: 'Iqaluit'},
            {country: 'America', city: 'Pangnirtung'},
            {country: 'America', city: 'Atikokan'},
            {country: 'America', city: 'Winnipeg'},


            {country: 'America', city: 'Halifax'},
            {country: 'America', city: 'Glase_Bay'},
            {country: 'America', city: 'Moncton'},
            {country: 'America', city: 'Goose_Bay'},
            {country: 'America', city: 'Blanc-Sablon'},
            {country: 'America', city: 'Toronto'},
            {country: 'America', city: 'Nipigon'},
            {country: 'America', city: 'Thunder_Bay'},
            {country: 'America', city: 'Iqaluit'},
            {country: 'America', city: 'Pangnirtung'},
            
        
            'America/Rainy_River',
            'America/Resolute',
            'America/Rankin_Inlet',
            'America/Regina',
            'America/Swift_Current',
            'America/Edmonton',
            'America/Cambridge_Bay',
            'America/Yellowknife',
            'America/Inuvik',
            'America/Creston',
            'America/Dawson_Creek',
            'America/Fort_Nelson',
            'America/Vancouver',
            'America/Whitehorse',
            'America/Dawson',
            'Indian/Cocos',
            'Europe/Zurich',
            'Africa/Abidjan',
            'Pacific/Rarotonga',
            'America/Santiago',
            'America/Punta_Arenas',
            'Pacific/Easter',
            'Asia/Shanghai',
            'Asia/Urumqi',
            'America/Bogota',
            'America/Costa_Rica',
            'America/Havana',
            'Atlantic/Cape_Verde',
            'America/Curacao',
            'Indian/Christmas',
            'Asia/Nicosia',
            'Asia/Famagusta',
            'Europe/Prague',
            'Europe/Berlin',
            'Europe/Copenhagen',
            'America/Santo_Domingo',
            'Africa/Algiers',
            'America/Guayaquil',
            'Pacific/Galapagos',
            'Europe/Tallinn',
            'Africa/Cairo',
            'Africa/El_Aaiun',
            'Europe/Madrid',
            'Africa/Ceuta',
            'Atlantic/Canary',
            'Europe/Helsinki',
            'Pacific/Fiji',
            'Atlantic/Stanley',
            'Pacific/Chuuk',
            'Pacific/Pohnpei',
            'Pacific/Kosrae',
            'Atlantic/Faroe',
            'Europe/Paris',
            'Europe/London',
            'Asia/Tbilisi',
            'America/Cayenne',
            'Africa/Accra',
            'Europe/Gibraltar',
            'America/Godthab',
            'America/Danmarkshavn',
            'America/Scoresbysund',
            'America/Thule',
            'Europe/Athens',
            'Atlantic/South_Georgia',
            'America/Guatemala',
            'Pacific/Guam',
            'Africa/Bissau',
            'America/Guyana',
            'Asia/Hong_Kong',
            'America/Tegucigalpa',
            'America/Port-au-Prince',
            'Europe/Budapest',
            'Asia/Jakarta',
            'Asia/Pontianak',
            'Asia/Makassar',
            'Asia/Jayapura',
            'Europe/Dublin',
            'Asia/Jerusalem',
            'Asia/Kolkata',
            'Indian/Chagos',
            'Asia/Baghdad',
            'Asia/Tehran',
            'Atlantic/Reykjavik',
            'Europe/Rome',
            'America/Jamaica',
            'Asia/Amman',
            'Asia/Tokyo',
            'Africa/Nairobi',
            'Asia/Bishkek',
            'Pacific/Tarawa',
            'Pacific/Enderbury',
            'Pacific/Kiritimati',
            'Asia/Pyongyang',
            'Asia/Seoul',
            'Asia/Almaty',
            'Asia/Qyzylorda',
            'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
            'Asia/Aqtobe',
            'Asia/Aqtau',
            'Asia/Atyrau',
            'Asia/Oral',
            'Asia/Beirut',
            'Asia/Colombo',
            'Africa/Monrovia',
            'Europe/Vilnius',
            'Europe/Luxembourg',
            'Europe/Riga',
            'Africa/Tripoli',
            'Africa/Casablanca',
            'Europe/Monaco',
            'Europe/Chisinau',
            'Pacific/Majuro',
            'Pacific/Kwajalein',
            'Asia/Yangon',
            'Asia/Ulaanbaatar',
            'Asia/Hovd',
            'Asia/Choibalsan',
            'Asia/Macau',
            'America/Martinique',
            'Europe/Malta',
            'Indian/Mauritius',
            'Indian/Maldives',
            'America/Mexico_City',
            'America/Cancun',
            'America/Merida',
            'America/Monterrey',
            'America/Matamoros',
            'America/Mazatlan',
            'America/Chihuahua',
            'America/Ojinaga',
            'America/Hermosillo',
            'America/Tijuana',
            'America/Bahia_Banderas',
            'Asia/Kuala_Lumpur',
            'Asia/Kuching',
            'Africa/Maputo',
            'Africa/Windhoek',
            'Pacific/Noumea',
            'Pacific/Norfolk',
            'Africa/Lagos',
            'America/Managua',
            'Europe/Amsterdam',
            'Europe/Oslo',
            'Asia/Kathmandu',
            'Pacific/Nauru',
            'Pacific/Niue',
            'Pacific/Auckland',
            'Pacific/Chatham',
            'America/Panama',
            'America/Lima',
            'Pacific/Tahiti',
            'Pacific/Marquesas',
            'Pacific/Gambier',
            'Pacific/Port_Moresby',
            'Pacific/Bougainville',
            'Asia/Manila',
            'Asia/Karachi',
            'Europe/Warsaw',
            'America/Miquelon',
            'Pacific/Pitcairn',
            'America/Puerto_Rico',
            'Asia/Gaza',
            'Asia/Hebron',
            'Europe/Lisbon',
            'Atlantic/Madeira',
            'Atlantic/Azores',
            'Pacific/Palau',
            'America/Asuncion',
            'Asia/Qatar',
            'Indian/Reunion',
            'Europe/Bucharest',
            'Europe/Belgrade',
            'Europe/Kaliningrad',
            'Europe/Moscow',
            'Europe/Simferopol',
            'Europe/Kirov',
            'Europe/Astrakhan',
            'Europe/Volgograd',
            'Europe/Saratov',
            'Europe/Ulyanovsk',
            'Europe/Samara',
            'Asia/Yekaterinburg',
            'Asia/Omsk',
            'Asia/Novosibirsk',
            'Asia/Barnaul',
            'Asia/Tomsk',
            'Asia/Novokuznetsk',
            'Asia/Krasnoyarsk',
            'Asia/Irkutsk',
            'Asia/Chita',
            'Asia/Yakutsk',
            'Asia/Khandyga',
            'Asia/Vladivostok',
            'Asia/Ust-Nera',
            'Asia/Magadan',
            'Asia/Sakhalin',
            'Asia/Srednekolymsk',
            'Asia/Kamchatka',
            'Asia/Anadyr',
            'Asia/Riyadh',
            'Pacific/Guadalcanal',
            'Indian/Mahe',
            'Africa/Khartoum',
            'Europe/Stockholm',
            'Asia/Singapore',
            'America/Paramaribo',
            'Africa/Juba',
            'Africa/Sao_Tome',
            'America/El_Salvador',
            'Asia/Damascus',
            'America/Grand_Turk',
            'Africa/Ndjamena',
            'Indian/Kerguelen',
            'Asia/Bangkok',
            'Asia/Dushanbe',
            'Pacific/Fakaofo',
            'Asia/Dili',
            'Asia/Ashgabat',
            'Africa/Tunis',
            'Pacific/Tongatapu',
            'Europe/Istanbul',
            'America/Port_of_Spain',
            'Pacific/Funafuti',
            'Asia/Taipei',
            'Europe/Kiev',
            'Europe/Uzhgorod',
            'Europe/Zaporozhye',
            'Pacific/Wake',
            'America/New_York',
            'America/Detroit',
            'America/Kentucky/Louisville',
            'America/Kentucky/Monticello',
            'America/Indiana/Indianapolis',
            'America/Indiana/Vincennes',
            'America/Indiana/Winamac',
            'America/Indiana/Marengo',
            'America/Indiana/Petersburg',
            'America/Indiana/Vevay',
            'America/Chicago',
            'America/Indiana/Tell_City',
            'America/Indiana/Knox',
            'America/Menominee',
            'America/North_Dakota/Center',
            'America/North_Dakota/New_Salem',
            'America/North_Dakota/Beulah',
            'America/Denver',
            'America/Boise',
            'America/Phoenix',
            'America/Los_Angeles',
            'America/Anchorage',
            'America/Juneau',
            'America/Sitka',
            'America/Metlakatla',
            'America/Yakutat',
            'America/Nome',
            'America/Adak',
            'Pacific/Honolulu',
            'America/Montevideo',
            'Asia/Samarkand',
            'Asia/Tashkent',
            'America/Caracas',
            'Asia/Ho_Chi_Minh',
            'Pacific/Efate',
            'Pacific/Wallis',
            'Pacific/Apia',
            'Africa/Johannesburg'
          ];
          
        //   let date = new Date;
        //   aryIannaTimeZones.forEach((timeZone) => {
          
        //     let strTime = date.toLocaleString("en-US", {
        //       timeZone: `${timeZone}`
        //     });
        //     console.log(timeZone, strTime);
        //   });
    }

    selectYourTimezone();

    // Location grabbing through longitude and latitude
    // function getMyLocation() {
    //     if ("geolocation" in navigator) { //check geolocation available 
    //         //try to get user current location using getCurrentPosition() method
    //         navigator.geolocation.getCurrentPosition(function(position){ 
    //                 console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
    //                 $("#currentTime").html("Your location is" + position.coords.latitude + position.coords.longitude +"Have a nice day")
    //         });
    //     }else{
    //         console.log("Browser doesn't support geolocation!");
    //     }
    // }

    // getMyLocation();


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
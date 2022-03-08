(function() {
    function getDayInfo(date) {
        // Получаем дату
        let getDate = new Date(date);
        
        // Получаем день
        function getNewDay() {
            let getLocDay = getDate.toLocaleString('ru-RU', {weekday: 'long'});
            return getLocDay[0].toUpperCase() + getLocDay.slice(1);
        }

        // Получаем номер недели
        function getNewWeek() {
            let firstDay = new Date(getDate.getFullYear(),0,1);

            // в 2 сторки
            let numberOfDay = Math.floor((getDate - firstDay) / (24*60*60*1000));
            let result = Math.ceil((getDate.getDay() + 1 + numberOfDay) / 7);
            return result;

            // в 1 строку
            // return Math.ceil(((Math.floor((getDate - firstDay) / (24*60*60*1000))) + getDate.getDay() + 1) / 7);
        }

        // Получаем месяц
        let getNewMoth = function() {
            let getLocMonth = getDate.toLocaleString('ru-RU', {month: 'long'});
                getLocMonth = getLocMonth[0].toUpperCase() + getLocMonth.slice(1);
            if (getLocMonth.endsWith("ь") || getLocMonth.endsWith("й")) {
                return getLocMonth.replace(/.$/, "я");
            } else {
                return getLocMonth += "а";
            } 
        } ();

        // Получаем год
        let getNewYear = getDate.getFullYear();
    
        console.log(`${getNewDay()}, ${getNewWeek()} неделя ${getNewMoth} ${getNewYear} года`);
        
    };

    getDayInfo("01.01.1970");
    // getDayInfo(new Date());
    // getDayInfo(prompt("Введите дату в формате 03.08.2021", ""));

}) ();




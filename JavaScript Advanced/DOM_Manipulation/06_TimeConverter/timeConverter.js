function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');


    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convert);
    hoursBtn.addEventListener('click', convert);
    minutesBtn.addEventListener('click', convert);
    secondsBtn.addEventListener('click', convert);

    function convert(event) {

        let outputDays = 0;
        let outputHours = 0;
        let outputMinutes = 0;
        let outputSeconds = 0;

        let inputValue = 0;

        let target = event.target.id;

        if(target === 'daysBtn'){
            inputValue = Number(days.value);
            outputDays = inputValue;

            outputHours = Math.round(outputDays * 24);
            outputMinutes = Math.round(outputHours * 60);
            outputSeconds = Math.round(outputMinutes * 60);

            days.value = outputDays;
            hours.value = outputHours;
            minutes.value = outputMinutes;
            seconds.value = outputSeconds;

        }
        if(target === 'hoursBtn'){
            inputValue = Number(hours.value);
            outputHours = inputValue;

            outputDays = Math.round(outputHours / 24);
            outputMinutes = Math.round(outputHours * 60);
            outputSeconds = Math.round(outputMinutes * 60);

            days.value = outputDays;
            hours.value = outputHours;
            minutes.value = outputMinutes;
            seconds.value = outputSeconds;

        }
        if(target === 'minutesBtn'){
            inputValue = Number(minutes.value);
            outputMinutes = inputValue;

            outputHours = Math.round(outputMinutes / 60);
            outputDays = Math.round(outputHours / 24);
            outputSeconds = Math.round(outputMinutes * 60);

            days.value = outputDays;
            hours.value = outputHours;
            minutes.value = outputMinutes;
            seconds.value = outputSeconds;

        }
        if(target === 'secondsBtn'){
            inputValue = Number(seconds.value);
            outputSeconds = inputValue;

            outputMinutes = Math.round(outputSeconds / 60);
            outputHours = Math.round(outputMinutes / 60);
            outputDays = Math.round(outputHours / 24);

            days.value = outputDays;
            hours.value = outputHours;
            minutes.value = outputMinutes;
            seconds.value = outputSeconds;
        }


    }
}
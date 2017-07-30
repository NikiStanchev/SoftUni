function getInfo() {
    let stopId = $('#stopId').val();
    let list = $('#buses');
    list.empty();
    //$.get(`https://judgetests.firebaseio.com/businfo/${stopId}.json`).then(displayBusStopInfo).catch(displayError);

    let req = {
        method: 'GET',
        url: `https://judgetests.firebaseio.com/businfo/${stopId}.json`,
        success: displayBusStopInfo,
        error: displayError

    };

    $.ajax(req);
    
    function displayBusStopInfo(busStopInfo) {
       $('#stopName').text(busStopInfo.name);
       let buses = busStopInfo.buses;
       for(let busNumber in buses){
           let busMinutes = buses[busNumber];
           let liItem = $('<li>');
           liItem.text(`Bus ${busNumber} arrives in ${busMinutes} minutes`);
           list.append(liItem);
       }
    }

    function displayError() {
        $('#stopName').text('Error');
    }
}
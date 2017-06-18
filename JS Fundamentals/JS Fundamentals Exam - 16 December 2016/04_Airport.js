function solve(dataRows) {

    let airport = new Map();
    let townStatistic = new Map();
    let townPlanes = new Map();

    for(let dataRow of dataRows){
        let [planeID, town, passengersCount, action] = dataRow.split(/\s+/g);

        passengersCount = Number(passengersCount);

        if(action === 'land'){
            if(airport.has(planeID)){
                continue;
            } else {
                airport.set(planeID, 'land');
            }

            if(!townStatistic.has(town)){
                townStatistic.set(town, [0,0]);
            }

            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }

            townStatistic.get(town)[0] += passengersCount;
            townPlanes.get(town).add(planeID);
        } else {
            if(airport.has(planeID)){
                airport.delete(planeID);
            } else {
                continue;
            }

            if(!townStatistic.has(town)){
                townStatistic.set(town, [0,0]);
            }

            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }

            townStatistic.get(town)[1] += passengersCount;
            townPlanes.get(town).add(planeID);
        }
    }

    let sortedAirport = [...airport.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    console.log('Planes left:');
    for(let [planeID] of sortedAirport){
        console.log(`- ${planeID}`);
    }

    let sortedTowns = [...townStatistic.entries()].sort(sortTowns);

    for(let [town, statistics] of sortedTowns){
        console.log(town);
        console.log(`Arrivals: ${statistics[0]}`);
        console.log(`Departures: ${statistics[1]}`);
        let sortedPlnes = [...townPlanes.get(town).values()].sort((a, b) => a.localeCompare(b));

        console.log('Planes:');
        for(let planeID of sortedPlnes){
            console.log(`-- ${planeID}`);
        }
    }

    function sortTowns(a, b) {

        let aArrivals = a[1][0];
        let bArrivals = b[1][0];

        let firstCriteria = bArrivals - aArrivals;

        if(firstCriteria !== 0){
            return firstCriteria;
        } else {
            return a[0].localeCompare(b[0]);
        }
    }
}

solve([
        "Boeing474 Madrid 300 land",
        "AirForceOne WashingtonDC 178 land",
        "Airbus London 265 depart",
        "ATR72 WashingtonDC 272 land",
        "ATR72 Madrid 135 depart"
    ]
);
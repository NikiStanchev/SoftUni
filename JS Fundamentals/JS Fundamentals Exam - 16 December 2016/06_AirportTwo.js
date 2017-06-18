function solve(input) {

    let airports = new Map();
    let statisticTowns = new Map();
    let airplanesTowns = new Map();


    for(let el of input){
        let [planeID, town, passengersCount, action] = el.split(' ');

        passengersCount = Number(passengersCount);

        if(action === 'land'){

            if(!airports.has(planeID)){
                airports.set(planeID, action);
            }

            if(!statisticTowns.has(town)){
                statisticTowns.set(town, [0, 0]);
            }

            if(!airplanesTowns.has(town)){
                airplanesTowns.set(town, new Set());
            }
            statisticTowns.get(town)[0] += passengersCount;
            airplanesTowns.get(town).add(planeID);
        } else{
            if(airports.has(planeID)){
                airports.delete(planeID);
            } else {
                continue;
            }

            if(!statisticTowns.has(town)){
                statisticTowns.set(town, [0, 0]);
            }

            if(!airplanesTowns.has(town)){
                airplanesTowns.set(town, new Set());
            }

            airplanesTowns.get(town).add(planeID);
            statisticTowns.get(town)[1] += passengersCount;
        }
    }


    sortedAirports = [...airports.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    sortedStatistic = [...statisticTowns.entries()].sort(sortTowns);

    console.log('Planes left:');
    for(let [planeID] of sortedAirports){
        console.log(`-- ${planeID}`);
    }

    for(let [town, statistic] of sortedStatistic){
        console.log(town);
        console.log(`Arrivals: ${statistic[0]}`);
        console.log(`Departures: ${statistic[1]}`);

        let sortedAirplanes = [...airplanesTowns.get(town).values()].sort((a, b) => a.localeCompare(b));

        console.log('Planes:');
        for(let planeID of sortedAirplanes){
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


solve([  "Boeing474 Madrid 300 land",  "AirForceOne WashingtonDC 178 land",  "Airbus London 265 depart",  "ATR72 WashingtonDC 272 land",  "ATR72 Madrid 135 depart" ]);
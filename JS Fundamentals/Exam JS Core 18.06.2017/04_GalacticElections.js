function solve(input) {

    let systemVotes = new Map();
    let candidateVotes = new Map();


    for(let currentObject of input){

        let systemObj = currentObject['system'];
        let candidateObj = currentObject['candidate'];
        let votesObj = currentObject['votes'];

        let currentVotes = new Map();

        currentVotes.set(systemObj, votesObj);

        if(!candidateVotes.has(candidateObj)){
            candidateVotes.set(candidateObj, new Map('', 0));
        }

        candidateVotes.get(candidateObj).set(systemObj, 0);
        candidateVotes.get(candidateObj).get(systemObj)[0] += votesObj;
        console.log(candidateVotes.get(candidateObj));

    }

    console.log(candidateVotes);
    console.log(systemVotes);
}

solve([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau', candidate: 'Space Cow', votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 60 },
    { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 } ]
);
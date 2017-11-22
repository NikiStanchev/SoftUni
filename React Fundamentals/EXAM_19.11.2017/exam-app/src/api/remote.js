const host = 'http://localhost:5000/';

async function register(name, email, password) {
    const res = await fetch(host + 'auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    return await res.json();
}

async function login(email, password) {
    const res = await fetch(host + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await res.json();
}

async function getYearlyBalance(year){
    const res = await fetch(host + 'plan/' + year,{
        method:'GET',
        headers:{
            'Authorization':'bearer ' + localStorage.getItem('authToken')
        }
    })
    return await res.json();
}

async function getMonthlyBalance(year, month){
    const res = await fetch(`${host}plan/${year}/${month}`,{
        method:'GET',
        headers:{
            'Authorization':'bearer ' + localStorage.getItem('authToken')
        }
    })
    return await res.json();
}

async function createPlanner(year, month, planner){
    const res = await fetch(`${host}plan/${year}/${month}`, {
        method: 'POST',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(planner)
    });
    return await res.json();
}

async function addExpense(year, month, expense){
    const res = await fetch(`${host}plan/${year}/${month}/expense`, {
        method: 'POST',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(expense)
    });
    return await res.json();
}

async function removeExpense(id){
    const res = await fetch(host + 'plan/expense/' + id,{
        method:'DELETE',
        headers:{
            'Authorization':'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        }
    })
    return await res.json();
}

export { register, login, getYearlyBalance, getMonthlyBalance, createPlanner, addExpense, removeExpense }
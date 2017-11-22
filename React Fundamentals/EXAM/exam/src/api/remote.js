const host = 'http://localhost:5000/'


async function register(name, email, password){
    const res = await fetch(host + 'auth/signup',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
    })
    return await res.json()
}

async function login(email, password){
    const res = await fetch(host + 'auth/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email,
            password
        })
    })
    return await res.json()
}

async function fetchPage(page){
    const res = await fetch(host + 'furniture/all?page=' + page,{
        method:'GET'
    })
    return await res.json()
}

async function fetchDetails(id){
    const res = await fetch(host + 'furniture/details/' + id,{
        method:'GET'
    })
    return await res.json()
}

async function fetchSurchPage(query, page){
    const res = await fetch(host + `furniture/add?page=${page}&search=${query}`,{
        method:'GET'
    })
    return await res.json()
}

async function fetchStats(){
    const res = await fetch(host + 'stats',{
        method:'GET'
    })
    return await res.json()
}

export {register, login, fetchPage,fetchDetails,fetchStats, fetchSurchPage}
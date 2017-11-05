const data = {
    getCars: () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve([
                    {id:1, make:'Opel', model:'Astra'}
                ])
            }, 2000)
        })
    }
}

export default data
const appKey = 'kid_HJ_WQy-1f'
const appSecret = '730db71dbdca4cfb8f02ccfd4c8dcff0'
const hostUrl = 'https://baas.kinvey.com'


let requestHandler = {
    login:(payload)=>{
        return fetch(`${hostUrl}/user/${appKey}/login`, {
            method:'POST',
            headers:{
                Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res=>{
            return res.json()
        })
    },
    register:(payload)=>{
        return fetch(`${hostUrl}/user/${appKey}/`,{
            method:'POST',
            headers:{
            Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res=>{
            return res.json()
        })
    },
    pullPosts: ()=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts?query={}&sort={"_kmd.ect": -1`,{
            method:'GET',
            headers:{
                Authorization: 'Kinvey '+ localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json()
        })
    },
    createPost: (payload)=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts`,{
            method:'POST',
            headers:{
                Authorization: 'Kinvey '+ localStorage.getItem('token'),
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res=>{
            return res.json()
        })
    },
    editPost: (payload)=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts/${payload._id}`,{
            method:'PUT',
            headers:{
                Authorization: 'Kinvey '+ localStorage.getItem('token'),
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res=>{
            return res.json()  
        })
    },
    deletePost: (id)=>{
        fetch(`${hostUrl}/appdata/${appKey}/posts/${id}`,{
            method:'DELETE',
            headers:{
                Authorization: 'Kinvey '+ localStorage.getItem('token')
            }           
        })
    },
    createComment:(payload)=>{
        
        fetch(`https://baas.kinvey.com/appdata/${appKey}/comments `,{
            method:'POST',
            headers:{
                Authorization: 'Kinvey '+ localStorage.getItem('token'),
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res=>{
            return res.json()  
        })
    },
    deleteComment: (id)=>{
        fetch(`${hostUrl}/appdata/${appKey}/comments/${id}`,{
            method:'DELETE',
            headers:{
                Authorization: 'Kinvey '+ localStorage.getItem('token')
            }           
        })
    },
    getMyPosts:(username)=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts?query={"author":"${username}"}&sort={"_kmd.ect": -1} `,{
            method:'GET',
            headers:{
                Authorization: 'Kinvey '+ localStorage.getItem('token')
            }
        }).then(res=>{
            return res.json()
        })
    }
}

export default requestHandler
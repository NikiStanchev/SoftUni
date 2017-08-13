let remote = (() => {
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_HkG7GC_v-';
    const appSecret = '237ff579b4c04db699cf42cf0659c85e';

    function makeAuth(type) {
        if(type === 'basic'){
            return 'Basic ' + btoa(appKey + ':' + appSecret);
        }else {
            return 'Kinvey ' + localStorage.getItem('authtoken');
        }
    }

    function request(method, module, url, auth) {
        let req = {
            url: baseUrl + module + '/' + appKey + '/' + url,
            method,
            headers: {
                'Authorization': makeAuth(auth)
            }
        };
        return req;
    }

    function get(module, url, auth) {
        return $.ajax(request('GET', module, url, auth));
    }

    function post(module, url, data, auth) {
        let req = request('POST', module, url, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';
        return $.ajax(req);
    }

    function update(module, url, data, auth) {
        let req = request('PUT', module, url, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';
        return $.ajax(req);
    }

    function remove(module, url, auth) {
        let req = request('DELETE', module, url, auth);
        return $.ajax(req);
    }

    return {
        get,
        post,
        update,
        remove
    }
})();
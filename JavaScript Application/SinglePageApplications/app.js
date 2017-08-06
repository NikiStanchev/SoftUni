$(() =>{
    setGreeting();

    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_rJSp3UXDW';
    const appSecret = '0d1923c4968f4b5b90b6324a267217cd';

    $('#linkHome').click(() => showView('home'));
    $('#linkLogin').click(() => showView('login'));
    $('#linkRegister').click(() => showView('register'));
    $('#linkCreate').click(() => showView('create'));
    $('#linkBooks').click(() => showView('books'));
    $('#linkLogout').click(logout);

    $('#viewLogin').find('form').submit(login);
    $('#viewRegister').find('form').submit(register);
    $('#viewCreate').find('form').submit(createBook);

    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').hide()
    });

    $('#infoBox').click((event) => $(event.target).hide());
    $('#errorBox').click((event) => $(event.target).hide());

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(() => $('#infoBox').fadeOut(), 3000);
    }
    
    function showError(message) {
        $('#errorBox').text(message);
        $('#errorBox').show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function makeHeader(type) {
        if(type === 'basic'){
            return{
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'
            }
        }else {
            return{
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken'),
                'Content-Type': 'application/json'
            }
        }

    }
    
    function login(e) {
        e.preventDefault();
        let username = $('#inputUsername').val();
        let password = $('#inputPassword').val();

        let req = ({
            url: baseUrl + 'user/' + appKey + '/login',
            method: 'POST',
            headers: makeHeader('basic'),
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data) =>{
                showInfo('Login successful');
                setStorage(data);
            },
            error: handleError
        });

        $.ajax(req);
    }

    
    // User session
    function setGreeting() {
        let username = localStorage.getItem('username');
        if(username !== null){
            $('#loggedInUser').text(`Wellcome, ${username} !`);
            $('#linkLogin').hide();
            $('#linkRegister').hide();
            $('#linkBooks').show();
            $('#linkCreate').show();
            $('#linkLogout').show();
        } else {
            $('#loggedInUser').text('');
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkBooks').hide();
            $('#linkCreate').hide();
            $('#linkLogout').hide();
        }
    }
    
    function setStorage(data) {
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data._id);
        $('#loggedInUser').text(`Wellcome, ${data.username} !`);
        setGreeting();
        showView('books');
    }
    
    function register(e) {
        e.preventDefault();
        let username = $('#inputNewUsername').val();
        let password = $('#inputNewPassword').val();
        let passwordRe = $('#inputNewPasswordConfirm').val();

        if(password.length === 0){
            showError("Password is empty");
            return;
        }

        if(username.length === 0){
            showError("Username is empty");
            return;
        }

        if(password !== passwordRe){
            showError("Password don't match");
            return;
        }

        let req = ({
            url: baseUrl + 'user/' + appKey,
            method: 'POST',
            headers: makeHeader('basic'),
            data: JSON.stringify({
                username: username,
                password: password
            }),
            success: (data) =>{
                showInfo('Registarion successful');
                setStorage(data);
            },
            error: handleError
        });

        $.ajax(req);
    }

    // Navigation and header
    function showView(name) {
        $('section').hide();

        switch (name){
            case 'home':
                $('#viewHome').show();
                break;
            case'login':
                $('#viewLogin').show();
                break;
            case'register':
                $('#viewRegister').show();
                break;
            case'books':
                getBooks();
                $('#viewBooks').show();
                break;
            case'create':
                $('#viewCreate').show();
                break;
            case'logout':
                $('#viewLogout').show();
                break;
            case'edit':
                $('#viewEdit').show();
                break;
        }
    }

    function logout() {
        let req = ({
            url: baseUrl + 'user/' + appKey + '/_logout',
            method: 'POST',
            headers: makeHeader('kinvey'),
            success: logoutSuccess,
            error: handleError
        });

        $.ajax(req);

        function logoutSuccess(data) {
            localStorage.clear();
            setGreeting();
            showView('home');
        }
    }

    // Catalog
    function getBooks() {
        let tbody = $('#viewBooks').find('table').find('tbody');
        tbody.empty();
        let req = ({
            url: baseUrl + 'appdata/' + appKey + '/books',
            headers: makeHeader('kinvey'),
            success: displayBooks,
            error: handleError
        });

        $.ajax(req);

        function displayBooks(data) {

            for(let book of data){
                let actions = [];
                if (book._acl.creator === localStorage.getItem('userId')){
                    actions.push($('<button>&#9998;</button>').click(() => editBook(book)));
                    actions.push($('<button>&#10006;</button>').click(() => deleteBook(book._id)));
                }
                let row = $('<tr>');
                row.append(`<td>${book.title}</td>`);
                row.append(`<td>${book.author}</td>`);
                row.append(`<td>${book.description}</td>`);
                row.append($(`<td>`).append(actions));
                row.appendTo(tbody);
            }
        }
    }
    
    function createBook() {
        let title = $('#inputNewTitle').val();
        let author = $('#inputNewAuthor').val();
        let description = $('#inputNewDescription').val();

        if(title.length === 0){
            showError("Title is empty");
            return;
        }

        if(author.length === 0){
            showError("Author is empty");
            return;
        }

        let req = {
            url: baseUrl + 'appdata/' + appKey + '/books',
            method: 'POST',
            headers: makeHeader('kinvey'),
            data:JSON.stringify({
                title,
                author,
                description
            }),
            success: createSuccess,
            error: handleError
        };

        $.ajax(req);
        
        function createSuccess(data) {
            $('#viewCreate').find('form').trigger('reset');
            showView('books');
        }
    }

    function editBook(book) {
        showView('edit');
        $('#inputEditTitle').val(book.title);
        $('#inputEditAuthor').val(book.author);
        $('#inputEditDescription').val(book.description);

        $('#viewEdit').find('form').submit(edit);
        
        function edit() {
            let editedBook = {
                title: $('#inputEditTitle').val(),
                author: $('#inputEditAuthor').val(),
                description: $('#inputEditDescription').val()
            };

            if(editedBook.title.length === 0){
                showError("Title is empty");
                return;
            }

            if(editedBook.author.length === 0){
                showError("Author is empty");
                return;
            }

            let req = {
                url: baseUrl + 'appdata/' + appKey + '/books/' + book._id,
                method: 'PUT',
                headers: makeHeader('kinvey'),
                data:JSON.stringify(editedBook),
                success: editSuccess,
                error: handleError
            };

            $.ajax(req);

            function editSuccess(data) {
                showInfo('Book edited');
                showView('books');
            }
        }
    }

    function deleteBook(id) {
        let req = {
            url: baseUrl + 'appdata/' + appKey + '/books/' + id,
            method: 'DELETE',
            headers: makeHeader('kinvey'),
            success: deleteSuccess,
            error: handleError
        };

        $.ajax(req);

        function deleteSuccess(data) {
            showInfo('Book deleted');
            showView('books');
        }
    }
});

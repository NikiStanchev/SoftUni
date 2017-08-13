const handlers = {};

$(() => {

    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', displayWelcome);

        //this.get('', displayWelcome);

        function displayWelcome() {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/welcome.hbs');
            });
        }

        this.get('#/register', function () {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/register.hbs');
            });
        });

        this.get('#/contacts', handlers.contactControllers);

        this.get('#/profile', function () {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/profile.hbs');
            });
        });

        this.get('#/logout', function () {
            auth.logout()
                .then(() => {
                    localStorage.clear();
                    this.redirect('#');
                });
        });

        this.post('#/login', function (context) {
            let username = context.params.username;
            let password = context.params.password;
            auth.login(username, password)
                .then(function (data) {
                    auth.saveSession(data);
                    context.redirect('#/contacts');
                });
        });

        this.post('#/register', function () {
            // handle register
        });

        this.post('#/profile', function () {
            // handle profile
        });
    }).run();


    //   TODO
    // * user search
    // * messages
});
handlers.contactControllers = function (ctx) {

    $.get('data.json')
        .then((data) => ctx.contacts = data);

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        contact: './templates/common/contact.hbs',
        contacts_list: './templates/common/contactsList.hbs',
        contact_details: './templates/common/details.hbs'
    }).then(function () {
        ctx.partials = this.partials;
        ctx.partial('./templates/contacts.hbs');
    });
};
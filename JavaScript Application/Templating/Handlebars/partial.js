$(() =>{

    const main = $('#main');

    let context = {
        contacts: [
            {
                firstName: 'Ivan',
                lastName: 'Ivanov',
                phone: '0888 55 33 22',
                email: 'i.ivanov@abv.bg'
            },
            {
                firstName: 'Petur',
                lastName: 'Petrov',
                phone: '0888 00 33 22',
                email: 'p.petrov@abv.bg'
            },
            {
                firstName: "Kiro",
                lastName: 'Kirov',
                phone: '0888 00 33 22',
                email: 'p.petrov@abv.bg'
            }
        ]
    };

    loadTemplates();

    async function loadTemplates() {
        const [contactSource, listSource] = await Promise.all([$.get('contact.html'), $.get('contactsList.html')]);

        console.log(contactSource, listSource);

        Handlebars.registerPartial('contact', contactSource);
        let listTemplate = Handlebars.compile(listSource);
        let contactTemplate = Handlebars.compile(contactSource);

        main.html(listTemplate(context));

        $('#other').html(contactTemplate(context.contacts[1]));
    }
});
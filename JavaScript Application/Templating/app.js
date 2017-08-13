$(() => {
    const main = $('#main');

    getTemplate();

    let contacts = [
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
        }
    ];

    async function getTemplate() {
        let template = await $.get('contact.html');

        for(let contact of contacts){
            main[0].innerHTML += parse(template, contact);
        }
    }
    
    function parse(htmlAsString, context) {
        return htmlAsString.replace(/{{\s*(\w+)\s*}}/g, (m, g1) => {
            if(context.hasOwnProperty(g1)){
                return context[g1];
            } else {
                return m;
            }
        });
    }

});
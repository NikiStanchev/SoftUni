$(() => {
    const templates = {};

    const context = {
        contacts:[]
    };

    const listContent = $('#list').find('.content');
    const detailsContent = $('#details').find('.content');

    loadData();
    loadTemplates();

    async function loadData() {
        context.contacts = await $.get('data.json');
    }

    async function loadTemplates() {
        const [contactSource, listSource] = await Promise.all([
            $.get('./templates/contact.html'),
            $.get('./templates/contactsList.html')
        ]);
        Handlebars.registerPartial('contact', contactSource);
        templates.listTemplate = Handlebars.compile(listSource);

        renderList();
    }

    function renderList() {
        listContent.html(templates.listTemplate(context));
    }

});
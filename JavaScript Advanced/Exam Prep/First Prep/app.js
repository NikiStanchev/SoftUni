function summary(selector) {
    $(selector).click(() => {
        let summeryText = $('#content strong').text();
        createSummary(summeryText);
    });


    function createSummary(summeryText) {
        let summary = $('<div>');
        summary.attr('id', 'summary');
        let title = $('<h2>').text('Summary');
        let paragraph = $('<p>').text(summeryText);

        summary.append(title);
        summary.append(paragraph);
        let parent = $('#content').parent();
        parent.append(summary);
    }
}
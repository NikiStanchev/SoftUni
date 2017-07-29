function generateSummary(selector) {
    $(selector).on('click', function () {
       let summeryText = $('#content strong').text();
       createSummary(summeryText);
    });

    function createSummary(summeryText) {
        // Create elements
        let summary = $('<div>');
        summary.attr('id', 'summary');
        let title = $('<h2>').text('Summary');
        let paragraph = $('<p>').text(summeryText);

        // Append elements
        summary.append(title);
        summary.append(paragraph);
        let parent = $('#content').parent();
        //let parent = $('.wrapper');
        parent.append(summary);
    }
}
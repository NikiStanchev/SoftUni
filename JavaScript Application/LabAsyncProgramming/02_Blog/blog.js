$(() =>{

    const baseUrl = 'https://baas.kinvey.com/appdata/kid_SJ25hJ6LW/';
    const username = 'admin';
    const password = 'admin';
    const selected = $('#selected');
    const content = $('#content');

    selected.on('change',viewPost);

    loadPosts();

    async function request(endpoint) {
        return $.ajax({
            url: baseUrl + endpoint,
            headers:{
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }
        });
    }

    async function loadPosts() {
        // Request all posts from from the database and display inside <select>
        selected.empty();
        selected.append($('<option>Loading...</option>'));
        selected.prop('disabled', true);

        try {
            let data = await request('posts');
            selected.empty();
            for(let post of data){
                $('<option>')
                    .text(post.title)
                    .val(post._id)
                    .appendTo(selected);
            }
            if(data.length !== 0){
                viewPost();
            }
            selected.prop('disabled', false);
        }catch(reson){
            handleError(reason);
        }
    }
    
    async function viewPost() {
        // Request only the selected post from the database and all associated comments
        // Display post body and comments

        let postId = selected.find('option:selected').val();
        let postP = request('posts/' + postId);
        let commentsP = request(`comments/?query={"postId":"${postId}"}`);

        try{
            let [data, comments] = await Promise.all([postP,commentsP]);
            content.empty();
            content.append($(`<h1>${data.title}</h1>`));
            content.append($(`<p>${data.body}</p>`));
            content.append($('<h2>Comments</h2>'));
            let list = $('<ul>');

            for(let comment of comments){
                list.append($(`<li>${comment.text}</li>`));
            }
            if(comments.length === 0){
                list.append($('<li><i>No comments yet</i></li>'));
            }
            content.append(list);
        } catch (reason){
            handleError(reason);
        }
    }

    function handleError(reason) {
        content.html(`<p>Error: ${reason.statusText}</p>`)
    }
});
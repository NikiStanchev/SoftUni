$(() =>{
    const content = {
        about:'<h2>About Page</h2>',
        home:'<h2>Home Page</h2>',
        contact:'<h2>Contact Page</h2>'
    };
    const main = $('#main');

    $(window).on('hashchange', loadContent);

    loadContent();

   function loadContent() {
       let hash = location.hash.substr(2);

       if(hash === ''){
           hash = 'home';
           location.hash = '#/' + hash;
       }

       if(content.hasOwnProperty(hash)){
           main.html(content[hash]);
       } else {
           main.html('<p>404 Not Found</p>');
       }

       /*
       switch (hash){
           case '#/about':
               $('#main').html(content.about);
               break;
           case '#/home':
               $('#main').html(content.home);
               break;
           case '#/contact':
               $('#main').html(content.contact);
               break;
       }*/
   }
});
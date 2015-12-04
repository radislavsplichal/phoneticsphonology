Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function() {
    this.render('postsList');
});
Router.route('/newArticle', function() {
    this.render('newArticle');
});

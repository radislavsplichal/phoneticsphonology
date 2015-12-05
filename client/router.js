Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function() {
    this.render('postsList');
});
Router.route('/newArticle', function() {
    this.render('newArticle');
});
Router.route('/exercises', function(){
  this.render('exercises', {
    data: { 'exercises' : function () {
      return Exercises.find();
    }
  }
  });
});
Router.route("/exercises/:_id", function(){
  this.render("exerciseDetail", {
    data: function(){
      // console.log(Exercises.findOne({_id: this.params._id}));
      return Exercises.findOne({_id: this.params._id});
    }
  });

},{name: 'exercises.show'});

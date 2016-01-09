Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
    this.render('landing');
});

Router.route('/theory', function() {
    this.render('postsList');
});

Router.route('/tech', function() {
    this.render('tech');
});

Router.route('/newArticle', function() {
    this.render('newArticle');
});

Router.route('/exercisesByCategory', function(){
  this.render('exercisesCategories', {
    data: { 'categories' : function () {
      return _.uniq(Exercises.find().map(function(x){return x.type}));
    }
  }
  });
});

Router.route("/exercises/:type", function(){
  this.render("exercisesSorted", {
    data: function(){
      console.log(this.params);
      // console.log(Exercises.findOne({_id: this.params._id}));
      return Exercises.find({type: this.params.type});
    }
  });

},{name: 'exercises'});


Router.route("/exercisesID/:_id/:type", function(){


  this.render("exerciseDetail" + this.params.type, {
    data: function(){
      // console.log(Exercises.findOne({_id: this.params._id}));
      return Exercises.findOne({_id: this.params._id,type: this.params.type});
    }
  });

},{name: 'exercises.show'});

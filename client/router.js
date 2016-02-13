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

Router.route('/testMenu', function() {
    this.render('testMenu');
});

Router.route('/newArticle', function() {
    this.render('newArticle');
});

Router.route('/exercisesByCategory', function(){
  this.render('exercisesCategories', {
    data: { 'categories' : function () {
      return Categories.find();
    }
  }
  });
});

Router.route("/exercises/:type", function(){
  var exerciseType = this.params.type;
    console.log('Exercise type', exerciseType);

  this.render("exercisesSorted", {
    data: {
      'exercises':function(){
         return Exercises.find({type: exerciseType});
      }, 'category' : function(){
            return Categories.findOne({type: exerciseType});
      }
    }
  });

},{name: 'exercises'});


Router.route("/exercisesID/:_id/:type", function(){


  this.render("MasterTemplate", {
    data: function(){
      // console.log(Exercises.findOne({_id: this.params._id}));
      return Exercises.findOne({_id: this.params._id,type: this.params.type});
    }
  });

},{name: 'exercises.show'});

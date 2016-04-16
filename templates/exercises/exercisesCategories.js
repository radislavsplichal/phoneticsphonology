if (Meteor.isClient){
  //
  // This helper handles the exercisesByCategory menu.
  //
  Template.exercisesCategories.helpers({
    categories: function () {
      //console.log(Categories.find().fetch())
      var categories = Categories.find().fetch();
      var exercises = _.groupBy(Exercises.find().fetch(),'type')
      //console.log(exercises);

      for(var i=0;i<categories.length;i++){
        var category = categories[i];
        try {
          category['count'] = exercises[category['type']].length;
        }
        catch(err) {
          console.log("No exercises Found for "+ exercises[category['type']]);
        }
        //console.log(categories[i]);

      }
      //console.log(categories);
      return categories;

    }
  });
}

if (Meteor.isClient){

Template.exercisesCategories.helpers({
  categories: function () {
    console.log(Categories.find().fetch())
    var categories = Categories.find().fetch();
        var exercises = _.groupBy(Exercises.find().fetch(),'type')
        console.log(exercises);

        for(var i=0;i<categories.length;i++){
            var category = categories[i];
            if (undefined != exercises[category['type']].length) {
             category['count'] = exercises[category['type']].length;
        } else {
           category['count'] = 0;
        }
      }
        console.log(categories);
      return categories;

}
});
}

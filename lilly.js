if(Meteor.isClient){

  Template.exerciseDetail.events({
    'submit form': function(event, template){
      event.preventDefault();
      var exercisesID = event.target.exercisesID.value
      var selected = template.findAll( "input[type=checkbox]:checked");
      var array = _.map(selected, function(item) {
         return item.defaultValue;
       });

       console.log(array);
       console.log(exercisesID);
    }
  });
  Meteor.call('verifyExercise', array, exercisesID )

}

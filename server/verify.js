if(Meteor.isServer){
Meteor.methods({
  verifyExercise: function(array, exercisesID){
    var currentUserId = Meteor.userId();
    var answer = Exercises.findOne({_id: exercisesID}).solution;
    console.log('id=' + exercisesID);
    console.log(answer);

  }
});
}

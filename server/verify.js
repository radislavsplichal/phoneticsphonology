if(Meteor.isServer){



  function progressCheck (currentUserId, exercisesID){
    if(currentUserId != undefined){
    db.progress.update({_id: currentUserId},{$addToSet:{ExercisesDone: exercisesID}},{upsert:true})
    }

  };


Meteor.methods({
  verifyExercise: function(array, exercisesID){
    console.log("hello!");
    var currentUserId = Meteor.userId();
    console.log("hello!");
    var answer = Exercises.findOne({_id: exercisesID}).solution;
    console.log('id=' + exercisesID);
    console.log(answer);


    if (JSON.stringify(array) === JSON.stringify(answer) ){
      console.log("got it right shithead");
      progressCheck (currentUserId, exercisesID);
      return true;
    } else {
      return false;
    }


  }
});
}

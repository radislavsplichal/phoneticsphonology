if(Meteor.isServer){

var curUser = Meteor.userId();

  function progressCheck (curUser, exercisesID){
      
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

      return true;
    } else {
      return false;
    }


  }
});
}

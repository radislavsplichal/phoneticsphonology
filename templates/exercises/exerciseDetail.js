if(Meteor.isClient){
  Template.exerciseDetail.created = function () {

    this.state = new ReactiveDict();
    this.state.set("N/A");
    console.log(this.state);
  }

Template.exerciseDetail.helpers({
   state : function(){
    console.log(this.state +"helpers");
    return Template.instance().state.get();

   }


});
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
     Meteor.call('verifyExercise', array, exercisesID, function (error, result){
       if (result) {
       console.log("Correct!");
       template.state.set("Good Job!");
     } else {
       console.log("You got it Wrong!")
     }
     console.log(error);



     })
  }
});




}

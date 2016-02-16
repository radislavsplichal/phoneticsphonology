if(Meteor.isClient){
  Template.MasterTemplate.created = function (){

    this.state = new ReactiveDict();
    this.state.set('message', "N/A");
    console.log(this.state);
  }

Template.MasterTemplate.helpers({
   state : function(){
    console.log(this.state +"helpers");
    return Template.instance().state;

  }

  //  allData: function(){
  //   var exercises =
  //
  // {
  //     type: 'odd-one-out',
  //     title: "Odd one out",
  //     instructions: 'Read the list of words. Which of the underlined sounds is different? Click on the word.',
  //     options: ['cat', 'fan', 'many', 'attack', 'pack', 'sang', 'dad', 'happy', 'back', 'sad'],
  //     solution: ['attack']
  // };
  //   //console.log(exercises);
  //    return exercises;
  //  }



});
Template.MasterTemplate.events({
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
       template.state.set('message', "Good Job!");
     } else {
       console.log("You got it Wrong!");
       template.state.set('message', "Bad Job!");
     }
     console.log(error);
   })
}
});




}

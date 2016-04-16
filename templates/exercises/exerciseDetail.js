// 
if(Meteor.isClient){

  function responseVerified (error, result){
    if (result) {
      console.log("Correct!");
      template.state.set('message', {
        text : "Good Job!",
        type : "alert-success"
      });
    } else {
      console.log("You got it Wrong!");
      template.state.set('message', {
        text: "Not quite right. Try another time!",
        type: "alert-danger"
      });
    }
    console.log(error);
  }

  Template.MasterTemplate.created = function (){

    this.state = new ReactiveDict();
    this.state.set('message', {});
    console.log(this.state);
  }

  Template.MasterTemplate.helpers({
    state : function(){
      console.log(this.state +"helpers");
      return Template.instance().state.get('message');

    }

  });
  Template.MasterTemplate.events({
    'submit form': function(event, template){
      event.preventDefault();
      var exercisesID = event.target.exercisesID.value;
      var type = event.target.type.value;

      // Exercise Correction Mechanism
      switch (type)
        { case "matching":
            console.log(type);

            var selected = template.findAll( "input[type=radio]:checked");
            var array = _.map(selected, function(item){
              return [item.value, item.name]
            });
                 Meteor.call('verifyExercise', array, exercisesID, function (error, result){
                  responseVerified(error, result);
                })

      break;


      case "odd-one-out":

      var selected = template.findAll( "input[type=radio]:checked");
      var array = _.map(selected, function(item) {
        return item.defaultValue;
      });

      console.log(array);
      console.log(exercisesID);
      Meteor.call('verifyExercise', array, exercisesID, function (error, result){
        responseVerified(error, result);
      break;
    }
  }
});

}

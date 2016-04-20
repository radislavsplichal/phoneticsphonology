


if(Meteor.isClient){

  // ReactiveDict - status of completion defined here
  Template.MasterTemplate.onCreated( function (){

    this.showResult = new ReactiveDict();
    this.showResult.set('message', "N/A");
    //console.log(this.showResult);
  });
  // Get the state of ReactiveDict
  Template.MasterTemplate.helpers({
    state : function(){
      //console.log(Template.instance().showResult.get('message'));
      return Template.instance().showResult.get('message');

    }


  });
  //Submission Event handling and mapping answers
  Template.MasterTemplate.events({
    'submit form': function(event, template){
      event.preventDefault();
      var exercisesID = event.target.exercisesID.value
      var selected = template.findAll( "input[type=checkbox]:checked");
      var array = _.map(selected, function(item) {
        return item.defaultValue;
      });

      //console.log(array);
      //console.log(exercisesID);

    }
  });








  Template.MasterTemplate.events({

    'submit form': function(event, template){
      event.preventDefault();
      var exercisesID = event.target.exercisesID.value;
      var type = event.target.type.value;

      function test (){
        Meteor.call('verifyExercise', array, exercisesID, function (error, result){
          if (result) {
            console.log("Correct!");
            template.showResult.set('message', {
              text : "Good Job!",
              type : "alert-success"
            });
            //console.log(Template.instance().showResult.get('message'));
          } else {
            console.log("You got it Wrong!");
            template.showResult.set('message', {
              text: "Not quite right. Try another time!",
              type: "alert-danger"
            });
            //console.log(Template.instance().showResult.get('message'));

          }
          console.log(error);
        });
      }





      // Exercise Correction Mechanism
      switch (type) {
        case "matching":
        console.log(type);

        var selected = template.findAll( "input[type=radio]:checked");
        var array = _.map(selected, function(item){
          return [item.value, item.name]
        });
        test();
        break;

        case "Listening-matching":
        console.log(type);

        var selected = template.findAll( "input[type=radio]:checked");
        var array = _.map(selected, function(item){
          return [item.value, item.name]
        });
        test();

        break;


        case "odd-one-out":

        var selected = template.findAll( "input[type=radio]:checked");
        var array = _.map(selected, function(item) {
          return item.defaultValue;
        });

        console.log(array);
        console.log(exercisesID);
        test();



        break;
      }
    }}
  );

}

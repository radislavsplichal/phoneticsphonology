if(Meteor.isClient){

Template.exerciseDetail.events({
  'submit .js-verify': function(event){
    var x = event.target.option.value;
    console.log(x);
  }
});
}

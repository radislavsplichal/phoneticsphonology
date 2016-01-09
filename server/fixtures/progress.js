if(Meteor.isServer){
Progress = new Meteor.Collection("progress");
Meteor.publish('progress', function() { return Progress.find();
  });
if(Progress.find().count() === 0){
  Progress.insert({

  })
}

}

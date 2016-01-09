if(Meteor.isServer){
Progress = new Meteor.Collection("progress");
Meteor.publish('progress', function() { return Progress.find();
  });
if(Progress.find().count() === 0){
  Progress.insert({
    UserId: '47Mv3mb535gxwjyPC',
    ExercisesDone:['mwGqZD6AQnNkYrmEw']
  })
}

}

Meteor.publish('exercises', function() { return Exercises.find();
});
if(Exercises.find().count() === 3) {

  Exercises.insert({
    type: 'matching',
    title: 'Matching x',
    instructions:'Look at the words below. Type them in the table according to the vowel sound in the word.',
    options: ['man', 'stand', 'rest', 'rang', 'men', 'red', 'lap', 'left', 'ten', 'sat', 'bed', 'bang'],
    value: ['/æ/','/e/'],
    solution: [["/æ/","man"],["/æ/","stand"],["/e/","rest"],["/æ/","rang"],["/e/","men"],["/e/","red"],["/æ/","lap"],["/e/","left"],["/e/","ten"],["/æ/","sat"],["/e/","bed"],["/æ/","bang"]]

  })
  Exercises.insert({
    type: 'matching',
    title: 'Matching 2',
    instructions:'Look at the words below. Type them in the table according to the vowel sound in the word.',
    options: ['man', 'stand', 'breast', 'suck', 'luck', 'lap', 'left', 'ten', 'sat', 'bed', 'bang'],
    value: ['/æ/','/e/']
  })
}

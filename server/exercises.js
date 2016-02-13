Meteor.publish('exercises', function() { return Exercises.find();
});
Meteor.publish('categories', function() { return Categories.find();
});
if (Categories.find().count() === 0) {
  Categories.insert({
    type:"odd-one-out",
    name:"Odd One Out",
    instructions:"Read the list of words. Choose the one that does not fit!"

  })
  Categories.insert({
    type:"matching",
    name:"Matching",
    instructions:"Read the list of words and choose right phoneme which the word contains!"

  })

}





if(Exercises.find().count() === 3) {
  Exercises.insert({
    type: 'odd-one-out',
    title: "Odd one out /æ/ vs /e/",
    desctription: "",
    options: ['cat', 'fan', 'many', 'attack', 'pack', 'sang', 'dad', 'happy', 'back', 'sad'],
    solution: ['attack']
  })
  Exercises.insert({
    type: 'odd-one-out',
    title: "Odd one out 2",
    instructions: 'Read the list of words. Which of the underlined sounds is different? Click on the word.',
    options: ['fat', 'rat', 'bunny', 'brat', 'pack', 'sang', 'dad', 'happy', 'back', 'sad']
  })

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

Meteor.publish('exercises', function() { return Exercises.find();
});
if(Exercises.find().count() === 3) {
  Exercises.insert({
    type: 'odd-one-out',
    title: "Odd one out",
    instructions: 'Read the list of words. Which of the underlined sounds is different? Click on the word.',
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
    type: 'odd-one-out',
    title: "Odd one out 3",
    instructions: 'Read the list of words. Which of the underlined sounds is different? Click on the word.',
    options: ['cat', 'fan', 'many', 'black', 'pack', 'chap', 'dad', 'happy', 'back', 'sad']
  })
  Exercises.insert({
    type: 'matching',
    title: 'Matching 1',
    instructions:'Look at the words below. Type them in the table according to the vowel sound in the word.',
    options: ['man', 'stand', 'rest', 'rang', 'men', 'red', 'lap', 'left', 'ten', 'sat', 'bed', 'bang']
  })
  Exercises.insert({
    type: 'matching',
    title: 'Matching 2',
    instructions:'Look at the words below. Type them in the table according to the vowel sound in the word.',
    options: ['man', 'stand', 'breast', 'suck', 'luck', 'lap', 'left', 'ten', 'sat', 'bed', 'bang']
  })
}

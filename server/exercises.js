// Meteor publish security feature

Meteor.publish('exercises', function() { return Exercises.find();
});
Meteor.publish('categories', function() { return Categories.find();
});

// Fixture for Categories

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
  Categories.insert({
    type:"Listening-matching",
    name:"Listening and Matching",
    instructions:"Read and listen to the list of words and choose right phoneme which the word contains!"

  })

}

// Fixture of exercises

if(Exercises.find().count() === 0) {
  Exercises.insert({
    type: 'odd-one-out',
    title: "Odd one out /æ/ vs /e/",
    instructions: "Read the list of words. Choose the one that does not fit with others.",
    options: ['cat', 'fan', 'many', 'attack', 'pack', 'sang', 'dad', 'happy', 'back', 'sad'],
    solution: ['many']
  })

  Exercises.insert({
    type: 'odd-one-out',
    title: "Odd one out /ʊ/ vs /uː/",
    instructions: "Read the list of words. Choose the one that does not fit with others.",
    options: ['foot', 'hood', 'hook', 'book', 'look', 'wood', 'food', 'shook', 'took', 'full'],
    solution: ['food']
  })

  Exercises.insert({
    type: 'odd-one-out',
    title: "Odd one out /ɪƏ/ vs /eƏ/",
    instructions: "Read the list of words. Choose the one that does not fit with others.",
    options: ['mere', 'bare', 'dare', 'fair', 'chair', 'rarely', 'hair', 'mayor', 'tear', 'share'],
    solution: ['mere']
  })


  Exercises.insert({
    type: 'matching',
    title: 'Either Or /æ/, /e/',
    instructions:'Look at the words below. Select appropriate phenmic symbols accordingly to the vowel sound in the word.',
    options: ['man', 'stand', 'rest', 'rang', 'men', 'red', 'lap', 'left', 'ten', 'sat', 'bed', 'bang'],
    value: ['/æ/','/e/'],
    solution: [["/æ/","man"],["/æ/","stand"],["/e/","rest"],["/æ/","rang"],["/e/","men"],["/e/","red"],["/æ/","lap"],["/e/","left"],["/e/","ten"],["/æ/","sat"],["/e/","bed"],["/æ/","bang"]]
  })

  Exercises.insert({
    type: 'matching',
    title: 'Either Or /æ/,/ʌ/',
    instructions:'Look at the words below. Select appropriate phenmic symbols accordingly to the vowel sound in the word.',
    options: ['cat', 'cut', 'bug', 'bag', 'hat', 'hut', 'sung', 'sang', 'pan', 'ran', 'nut', 'gnat'],
    value: ['/æ/','/ʌ/'],
    solution: [["/æ/","cat"],["/ʌ/","cut"],["/ʌ/","bug"],["/æ/","bag"],["/æ/","hat"],["/ʌ/","hut"],["/ʌ/","sung"],["/æ/","sang"],["/æ/","pan"],["/æ/","ran"],["/ʌ/","nut"],["/æ/","gnat"]]
  })

  Exercises.insert({
    type: 'matching',
    title: 'Either Or /ʊ/, /uː/',
    instructions:'Look at the words below. Select appropriate phenmic symbols accordingly to the vowel sound in the word.',
    options: ['foot', 'who', 'hoot', 'boot', 'look', 'lose', 'pull', 'shook', 'took', 'tomb', 'wood', 'fool'],
    value: ['/ʊ/','/uː/'],
    solution: [["/ʊ/","foot"],["/uː/","who"],["/uː/","hoot"],["/uː/","boot"],["/ʊ/","look"],["/uː/","lose"],["/ʊ/","pull"],["/ʊ/","shook"],["/ʊ/","took"],["/uː/","tomb"],["/ʊ/","wood"],["/uː/","fool"]]
  })


    Exercises.insert({
      type: 'Listening-matching',
      title: 'Either Or /ʊ/, /uː/',
      instructions:'Look at the words below. Select appropriate phenmic symbols accordingly to the vowel sound in the word.',
      options: ['foot', 'who', 'hoot', 'boot', 'look', 'lose', 'pull', 'shook', 'took', 'tomb', 'wood', 'fool'],
      value: ['/ʊ/','/uː/'],
      solution: [["/ʊ/","foot"],["/uː/","who"],["/uː/","hoot"],["/uː/","boot"],["/ʊ/","look"],["/uː/","lose"],["/ʊ/","pull"],["/ʊ/","shook"],["/ʊ/","took"],["/uː/","tomb"],["/ʊ/","wood"],["/uː/","fool"]]
    })

}

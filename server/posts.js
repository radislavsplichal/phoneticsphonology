/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Meteor.publish('posts', function() { return Posts.find();
});

if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Common Mispronunciation errors by John Green',
        author: 'Radislav Ruda',
        content: 'I found this very exciting video explaining very common mistakes people make in every day language. Mental Floss is a great source of short and comprehensible videos for anyone.  ',
        mediacontent: '<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/xc6cfJztR8A\' frameborder=\'0\' allowfullscreen></iframe>'

    });
}

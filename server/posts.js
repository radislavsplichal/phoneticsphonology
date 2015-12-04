/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Meteor.publish('posts', function() { return Posts.find();
});

if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'My Awesome Posts',
        author: 'Radislav Ruda',
        content: 'Another interesting post',
        mediacontent: '<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/xc6cfJztR8A\' frameborder=\'0\' allowfullscreen></iframe>'

    });
}

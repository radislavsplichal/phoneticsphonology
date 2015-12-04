

Template.postsList.helpers({
    posts: function () {
        return Posts.find();
    }
});

if (Posts.find() === 0) {
    Posts.insert({
        title: 'My Awesome Posts',
        author: 'Radislav Ruda',
        content: 'Another interesting post',
        mediacontent: '<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/xc6cfJztR8A\' frameborder=\'0\' allowfullscreen></iframe>'

    });
}
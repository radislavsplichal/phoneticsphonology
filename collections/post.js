Posts = new Meteor.Collection('posts');
if (Posts.find().count() === 0)
    Posts.insert({
        title: 'Introducing Phonetics and Phonology website',
        text: 'Radislav Šplichal',
        content: "Thsi is very interensting, I recomend everyone to see:",
        mediacontent: "<iframe width='560' height='315' src='https://www.youtube.com/embed/xc6cfJztR8A' frameborder='0' allowfullscreen></iframe>"
    });
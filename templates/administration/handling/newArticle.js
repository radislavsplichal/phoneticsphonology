if(Meteor.isClient){
// State of the form before submission


// newArticle form handling after submission
  Template.newArticle.events({
    "submit .newArticle": function(event){

      event.preventDefault();
      //Extracting the data from the form
      var title = event.target.heading.value;
      //console.log(title);
      var content = event.target.text.value;
      var author = "Administrator"

      //Insert the Article into the collection
      Posts.insert({

        createdAt: new Date(), // current time
        title: title ,
        author: author ,
        content: content


      })

      console.log("Article Inserted");

    }
  });


  Template.newArticle.helpers({
    state : function(){
     console.log(this.state);
     return Template.instance().state;

   }

  });
}

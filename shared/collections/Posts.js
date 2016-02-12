Posts = new Mongo.Collection("posts");

const maximumPostLength = 1500;

Schemas.Posts = new SimpleSchema({
    body: {
        type: String,
        max: maximumPostLength
    },
    //A list of Meteor.User _id's
    likes: {
        type: [String]
    }
});

Posts.attachSchema(Schemas.Posts);

Posts.attachBehaviour("timestampable");
Posts = new Mongo.Collection("posts");

Schemas.Posts = new SimpleSchema({
    body: {
        type: String,
        max: 1500
    },
    likes: {
        type: [String],
        regEx: SimpleSchema.RegEx.Id
    }
});

Posts.attachSchema(Schemas.Posts);

Posts.attachBehaviour("timestampable");
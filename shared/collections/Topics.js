Topics = new Mongo.Collection("Topics");

Schemas.Topics = new SimpleSchema({
    title: {
        type: String
    },
    //A list of Post _id's
    posts: {
        type: [String]
    }
});

Topics.attachSchema(Schemas.Topics);

Topics.attachBehaviour("timestampable");
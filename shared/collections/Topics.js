Topics = new Mongo.Collection("Topics");

Schemas.Topics = new SimpleSchema({
    title: {
        type: String
    },
    posts: {
        type: [String],
        regEx: SimpleSchema.RegEx.Id
    }
});

Topics.attachSchema(Schemas.Topics);

Topics.attachBehaviour("timestampable");
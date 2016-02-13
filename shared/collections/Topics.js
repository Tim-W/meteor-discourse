Topics = new Mongo.Collection("topics");

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
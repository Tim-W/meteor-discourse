Topics = new Mongo.Collection("Topics");

Schemas.Topics = new SimpleSchema({
    title: {
        type: String
    }
});

Topics.attachSchema(Schemas.Topics);

Topics.attachBehaviour("timestampable");
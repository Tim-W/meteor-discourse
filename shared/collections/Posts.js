class PostsCollection extends Mongo.Collection {
    insert(doc, callback) {
        var id;
        if (Meteor.isClient) {
            id = FlowRouter.getParam("_id");
            //Current "_id" param represents the _id of the topic the post is created at
            if (id) {
                Topics.update(
                    {_id: id},
                    {
                        $addToSet: {
                            posts: doc._id
                        }
                    });
            }
        }
    }
}

Posts = new PostsCollection("posts");

Schemas.Posts = new SimpleSchema({
    body: {
        type: String,
        max: 1500
    },
    likes: {
        type: [String],
        regEx: SimpleSchema.RegEx.Id,
        optional: true
    }
});

Posts.attachSchema(Schemas.Posts);

Posts.attachBehaviour("timestampable");
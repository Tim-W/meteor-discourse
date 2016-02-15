Topics = new Mongo.Collection("topics");

Schemas.Topics = new SimpleSchema({
    title: {
        type: String
    },
    posts: {
        type: [String],
        regEx: SimpleSchema.RegEx.Id
    },
    category: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    }
});

Topics.attachSchema(Schemas.Topics);

Topics.attachBehaviour("timestampable");

Topics.helpers({
    getCategory() {
        return Categories.findOne({_id: this.category});
    },
    getUser() {
        if (this.createdBy) {
            return Meteor.users.findOne({_id: this.createdBy});
        }
    },
    getPosts() {
        //Return all posts of this topic, normally sorted on createdAt
        if(this.posts instanceof Array) {
            return Posts.find({
                _id: {$in: this.posts}
            }, {
                sort: {
                    createdAt: 1
                }
            });
        }
    }
});

Topics.friendlySlugs("title");
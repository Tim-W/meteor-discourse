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
        return Posts.find({_id: {$in: this.posts}});
    }
});
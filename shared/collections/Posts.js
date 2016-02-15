Posts = new Mongo.Collection("posts");

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

Posts.helpers({
    getUser() {
        return Meteor.users.findOne({_id: this.createdBy});
    },
    updatedOrCreatedAt() {
        return this.updatedAt ? this.updatedAt : this.createdAt;
    }
});
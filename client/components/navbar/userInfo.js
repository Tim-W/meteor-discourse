Template["userInfo"].helpers({
    email() {
        const user = Meteor.user();
        if ("emails" in user) {
            return user.emails[0].address;
        }
    }
});

Template["userInfo"].events({
    "click #email"() {
        Meteor.logout();
    }
});
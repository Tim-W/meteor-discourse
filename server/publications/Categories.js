Meteor.publish("allCategories", () => {
    return Categories.find();
});
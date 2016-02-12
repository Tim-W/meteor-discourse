Meteor.publish("allTopics", () => {
    return Topics.find();
});
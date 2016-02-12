Meteor.publish("allTopics", () => {
    return Topics.find();
});

Meteor.publish("topic", (topicId) => {
    return Topics.findOne({_id: topicId});
});
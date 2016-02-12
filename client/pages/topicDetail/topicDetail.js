Template["topicDetail"].helpers({
    topic() {
        return Topics.findOne();
    }
});

Template["topicDetail"].onCreated(function() {
    const topicId = FlowRouter.getQueryParam("_id");
    this.autorun(() => {
        subsManager.subscribe("topic", topicId);
    });
});
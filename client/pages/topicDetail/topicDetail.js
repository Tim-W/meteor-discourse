Template["topicDetail"].helpers({
    topic() {
        return Topics.findOne();
    },
    defaultPost() {
        return {
            _id: "q84prLjrXjT69P9Kk"
        }
    }
});

Template["topicDetail"].onCreated(function() {
    const topicId = FlowRouter.getQueryParam("_id");
    this.autorun(() => {
        subsManager.subscribe("topic", topicId);
    });
});
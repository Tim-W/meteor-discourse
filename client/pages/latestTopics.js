Template["latestTopics"].helpers({
    latestTopicsList() {
        //TODO find the topics that were updated latest
        return Topics.find();
    }
});

Template["latestTopics"].onCreated(function () {
    this.autorun(function () {
        subsManager.subscribe("allTopics");
    })
});
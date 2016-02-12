Template["latestTopics"].helpers({
    latestTopicsList() {
        //TODO find the topics that were updated latest
        return Topics.find();
    }
});

TopicsSubs = new SubsManager();

Template["latestTopics"].onCreated(function () {
    this.autorun(function () {
        TopicsSubs.subscribe("allTopics");
    })
});
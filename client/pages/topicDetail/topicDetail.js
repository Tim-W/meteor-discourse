Template["topicDetail"].helpers({
    topic() {
        return Topics.findOne();
    }
});

Template["topicDetail"].onCreated(function () {
    const topicSlug = FlowRouter.getParam("slug");
    this.autorun(() => {
        subsManager.subscribe("topic", topicSlug);
    });
});

AutoForm.hooks({
    insertPost: {
        onSuccess(formType, result) {
            const topicId = FlowRouter.getParam("_id");
            if (topicId) {
                Topics.update(
                    {_id: topicId},
                    {
                        $addToSet: {
                            posts: result
                        }
                    });
            }
        }
    }
});
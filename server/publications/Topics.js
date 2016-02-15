Meteor.publishComposite("topic", (topicSlug) => {
    return {
        find() {
            return Topics.find({slug: topicSlug})
        },
        children: [
            {
                find(topic) {
                    return Posts.find({_id: {$in: topic.posts}});
                },
                children: [
                    {
                        find(post) {
                            return Meteor.users.find({_id: post.createdBy});
                        }
                    }
                ]
            }
        ]
    }
});

Meteor.publishComposite("allTopics", {
    find() {
        return Topics.find();
    },
    children: [
        {
            find(topic) {
                return Categories.find({_id: topic.category});
            }
        },
        {
            find(topic) {
                Posts.find({_id: topic.posts, sort: {createdAt: 1}, limit: 5, fields: {createdBy: true}});
            },
            children: [
                {
                    find(post) {
                        return Meteor.users.find({_id: post.createdBy});
                    }
                }
            ]
        }
    ]
});
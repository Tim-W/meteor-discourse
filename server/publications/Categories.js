Meteor.publishComposite("allCategories", {
    find() {
        return Categories.find();
    },
    children: [
        {
            find(category) {
                return Topics.find({
                    category: category._id,
                    sort: {
                        updatedAt: -1
                    },
                    limit: 3
                })
            }
        }
    ]
});
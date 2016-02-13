Categories = new Mongo.Collection("categories");

Schemas.Categories = new SimpleSchema({
    name: {
        type: String,
        max: 30
    },
    description: {
        type: String,
        max: 300
    },
    colour: {
        type: String
    }
});

Categories.attachBehaviour("timestampable");

Categories.attachSchema(Schemas.Categories);

Categories.helpers({
    isCategorized() {
        return (this.name !== "uncategorized");
    }
});
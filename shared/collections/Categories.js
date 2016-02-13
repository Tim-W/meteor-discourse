Categories = new Mongo.Collection("allCategories");

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
        type: String,
        regEx: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
    }
});
Template["allCategories"].helpers({
    allCategories() {
        return Categories.find();
    }
});

Template["allCategories"].onCreated(function() {
    this.autorun(() => subsManager.subscribe("allCategories"));
});
Template["allCategories"].helpers({
    allCategories() {
        return Categories.find();
    }
});

Template["allCategories"].onCreated(() => {
    this.autorun(() => subsManager.subscribe("allCategories"));
});
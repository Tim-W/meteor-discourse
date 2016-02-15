Meteor.startup(() => {
    if(Meteor.users.find().count() < 25) {
        _.each(_.range(25), () => {
            var randomCategoryName = faker.name.jobArea();
            var randomEmail = faker.internet.email();
            var randomName = faker.name.findName();
            var userName = faker.internet.userName();
            Accounts.createUser({
                username: userName,
                profile: {
                    name: randomName,
                },
                email: randomEmail,
                password: 'password'
            });
        });
    }
});
//Configuration for the useraccounts:core package.
AccountsTemplates.configure({
    homeRoutePath: '/overview'
});

AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    func(value) {
        var self;
        if (Meteor.isClient) {
            self = this;
            Meteor.call("userExists", value, function(err, userExists){
                if (!userExists)
                    self.setSuccess();
                else
                    self.setError(userExists);
                self.setValidating(false);
            });
            return;
        }
        // Server
        return Meteor.call("userExists", value);
    }
});
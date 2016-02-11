/**
 * Created by timwissel on 28-01-16.
 */

FlowRouter.route("/", {
    triggersEnter: [
        (context, redirect) => {
            redirect("/overview/latest")
        }
    ]
});

FlowRouter.route("/sign-in", {
    name: "SignIn",
    action() {
        BlazeLayout.render("overview_layout", {
            navbar: "navbar", main: "atForm"
        })
    }
});

FlowRouter.route("/route1", {
    action() {
        BlazeLayout.render("overview_layout", {
            navbar: "navbar", main: "atForm"
        })
    }
});

const overviewRoutes = FlowRouter.group({
    prefix: "/overview",
    name: "Overview"
});

overviewRoutes.route("/", {
    triggersEnter: [
        (context, redirect) => {
            redirect("/overview/latest");
        }
    ]
});

overviewRoutes.route("/latest", {
    name: "Overview.latest",
    action() {
        BlazeLayout.render("overview_layout", {
            navbar: "navbar", main: "topicsListPage"
        })
    }
});

overviewRoutes.route("/new", {
    name: "Overview.new",
    action() {
        BlazeLayout.render("overview_layout", {
            navbar: "navbar", main: "topicsList"
        })
    }
});

overviewRoutes.route("/unread", {
    name: "Overview.unread",
    action() {
        BlazeLayout.render("overview_layout", {
            navbar: "navbar", main: "topicsList"
        })
    }
});

overviewRoutes.route("/top", {
    name: "Overview.new",
    action() {
        BlazeLayout.render("overview_layout", {
            navbar: "navbar", main: "topicsList"
        })
    }
});

FlowRouter.route("/categories", {
    name: "Categories",
    action() {
        BlazeLayout.render("overview_layout", {
            navbar: "navbar", main: "categoriesList"
        })
    }
});
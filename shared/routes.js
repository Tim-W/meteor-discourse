/**
 * Created by timwissel on 28-01-16.
 */

FlowRouter.route("/", {
    triggersEnter: [
        (context, redirect) => {
            redirect("/overview")
        }
    ]
});

FlowRouter.route("/overview", {
    name: "Overview",
    action() {
        BlazeLayout.render("overview_layout", {
            navbar: "navbar", main: "main"
        })
    }
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
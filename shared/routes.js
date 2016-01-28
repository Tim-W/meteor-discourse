/**
 * Created by timwissel on 28-01-16.
 */
FlowRouter.route("/overview", {
    name: "Overview",
    action(params, queryParams) {
        BlazeLayout.render("overview_layout", {navbar: "navbar", main: "main"})
    }
});
Template["controlButton"].helpers({
    /**
     * Returns 'red' when the current route is matched
     * @param route
     * @returns {*|string}
     */
    activeClass(route) {
        const active = ActiveRoute.name(route);
        return active && "red";
    }
});
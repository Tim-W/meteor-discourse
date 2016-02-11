Template["menu"].onRendered(() => {
    $("#menuTrigger").popup({
        popup: $("#menuPopup"),
        on: "click",
        position: "bottom right",
        transition: "fade up"
    });
});
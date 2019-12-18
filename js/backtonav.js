function makeBackButton (id) {
    return function () {
        
        var classes = ["back-to-top", "button"];
        var buttonContainer = document.createElement ('div');
        for (let i = 0; i < classes.length; i++) {
            buttonContainer.classList.add(classes[i]);
        }
        var anchor = document.createElement ('a');
        var reference = "#main-navbar"
        anchor.setAttribute ('href', reference);

        var container = document.getElementById (id);
        container.appendChild (buttonContainer);
        buttonContainer.appendChild (anchor);    
    }
}
function makeList (id, listItems, makeBackButton) {
    return function () {

        var listContainer = document.getElementById (id);

        var classes = ["section", "center-section"];
        for (let i = 0; i < classes.length; i++) {
            listContainer.classList.add(classes[i]);
        }

        var listElement = document.createElement ('ul');
        listContainer.appendChild(listElement);

        for (let i = 0; i < listItems.length; i++) {
            var item = document.createElement('li');
            item.innerHTML = listItems[i];
            listElement.appendChild(item);
        }    
    }
}
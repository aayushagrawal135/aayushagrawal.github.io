function makeSection (id, makeTitle) {

    var container = document.createElement ('div');
    container.setAttribute('id', id);
    document.getElementsByTagName('body')[0].appendChild(container);
}
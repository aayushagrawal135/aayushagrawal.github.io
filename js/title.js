function makeTitle (id, title, makeList) {
    return function () {

        var span = document.createElement ('span');
        span.setAttribute ('class', "subject");

        var h2 = document.createElement ('h2');
        h2.textContent = title;
        document.getElementById(id).appendChild (span);
        span.appendChild (h2);
    }
}
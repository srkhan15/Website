function dropmenu() {
    var menu = document.getElementById("menu");
    var optionnumber = menu.options.selectedIndex;
    var url = menu.options[optionnumber].value;

    if (url) {
        location.href = url;
    }
}
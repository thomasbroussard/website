"use strict";


function filter() {
    var filterInput = document.getElementById("filter"), filterString = filterInput.value;
    var sheets = document.querySelectorAll("div.sheet");
    if (filterString === "") {
        for (var i = 0, size = sheets.length; i < size; i++) {
            sheets[i].style.display = null;
        }
        return;
    }
    for (i = 0, size = sheets.length; i < size; i++) {
        var tags = sheets[i].dataset.tags;
        var title = sheets[i].getElementsByTagName("h2")[0].textContent;

        if (!tags) {
            tags = title;
        }else{
            tags += " " + title;
        }
        if (tags.toLowerCase().indexOf(filterString.toLowerCase()) === -1) {
            sheets[i].style.display = "none";
        } else {
            sheets[i].style.display = null;
        }

    }


}
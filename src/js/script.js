"use strict"

function toggleMobileMenu(obj1, obj2) {
    if (obj1.className == "ul")
    {
        obj1.className = "ul menu_hide";
        obj2.className = "close_menu menu_hide";
    }
    else
    {
        obj1.className = "ul";
        obj2.className = "close_menu";
    }
}

function hideMobileMenu(obj1, obj2){
    obj1.className = "ul menu_hide";
    obj2.className = "close_menu menu_hide";
}
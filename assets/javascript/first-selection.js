const desert = {
    dropDown: $("#desert"),
    menu: {
        icon: $("#desertPlanets"),
        hidden: false
    }
}

const frozen = {
    dropDown: $("#frozen"),
    menu: {
        icon: $("#frozenPlanets"),
        hidden: false
    }
}

const tropicalJungle = {
    dropDown: $("#tropicalJungle"),
    menu: {
        icon: $("#tropicalJunglePlanets"),
        hidden: false
    }
}

const forest = {
    dropDown: $("#forest"),
    menu: {
        icon: $("#forestPlanets"),
        hidden: false
    }
}

let selectArray = [desert, frozen, tropicalJungle, forest]

desert.dropDown.on("click", function(){
    if (desert.menu.hidden = true) {
        desert.menu.icon.show();
        desert.menu.hidden = false;
    }
    console.log("desert")
    frozen.menu.icon.hide();
    frozen.menu.hidden = true
    tropicalJungle.menu.icon.hide();
    tropicalJungle.menu.hidden = true
    forest.menu.icon.hide();
    forest.menu.hidden = true
})

frozen.dropDown.on("click", function(){
    console.log("frozen")
    if (frozen.menu.hidden = true) {
        frozen.menu.icon.show();
        frozen.menu.hidden = false;
    }
    desert.menu.icon.hide();
    desert.menu.hidden = true
    tropicalJungle.menu.icon.hide();
    tropicalJungle.menu.hidden = true
    forest.menu.icon.hide();
    forest.menu.hidden = true
})

tropicalJungle.dropDown.on("click", function(){
    console.log("tropicalJungle")
    if (tropicalJungle.menu.hidden = true) {
        tropicalJungle.menu.icon.show();
        tropicalJungle.menu.hidden = false;
    }
    desert.menu.icon.hide();
    desert.menu.hidden = true
    frozen.menu.icon.hide();
    frozen.menu.hidden = true
    forest.menu.icon.hide();
    forest.menu.hidden = true
})

forest.dropDown.on("click", function(){
    console.log("forest")
    if (forest.menu.hidden = true) {
        forest.menu.icon.show();
        forest.menu.hidden = false;
    }
    desert.menu.icon.hide();
    desert.menu.hidden = true
    frozen.menu.icon.hide();
    frozen.menu.hidden = true
    tropicalJungle.menu.icon.hide();
    tropicalJungle.menu.hidden = true
})

$("#showAllBtn").on("click", function(){
    for (let i = 0 ; i < selectArray.length; i++) {
        if (selectArray[i].menu.hidden = true) {
            selectArray[i].menu.hidden = false;
            selectArray[i].menu.icon.show();
        } else {
            return
        }
    }
})
const planets = {
    tatooine: {
        name: "Tatooine",
        planetImg: "assets/images/planets/tatooine/planet.png"
    },
    bespin: {
        name: "Bespin",
        planetImg: "assets/images/planets/bespin/planet.png"
    },
    geonosis: {
        name: "Geonosis",
        planetImg: "assets/images/planets/geonosis/planet.png"
    },
    hoth: {
        name: "Hoth",
        planetImg: "assets/images/planets/hoth/planet.png"
    },
    coruscant: {
        name: "Coruscant",
        planetImg: "assets/images/planets/coruscant/planet.png"
    },
    naboo: {
        name: "Naboo",
        planetImg: "assets/images/planets/naboo/planet.png"
    },
    kashyyyk: {
        name: "Kashyyyk",
        planetImg: "assets/images/planets/kashyyyk/planet.png"
    },
    felucia: {
        name: "Felucia",
        planetImg: "assets/images/planets/felucia/planet.png"
    },
    dagobah: {
        name: "Dagobah",
        planetImg: "assets/images/planets/dagobah/planet.jpg",
    },
    endor: {
        name: "Endor",
        planetImg: "assets/images/planets/endor/planet.png"
    },
    yavinIV: {
        name: "Yavin IV",
        planetImg: "assets/images/planets/yavin-IV/planet.png"
    }
}

let planetArray = [planets.tatooine, planets.bespin, planets.geonosis, planets.hoth, planets.coruscant, planets.naboo, planets.kashyyyk, planets.felucia, planets.dagobah, planets.endor, planets.yavinIV]

planetSelection();

function planetSelection() {

    for (let i = 0; i < planetArray.length; i++) {

        let planetName = planetArray[i].name;
        let imgSrc = planetArray[i].planetImg;

        // Button Content ============================

        // <div class="row" id="planetSelection">
        let rowDiv = $("#planetSelection");

        // <div class="col-sm-4 text-center" style="margin: 3%;">
        let btnDiv = $("<div>").addClass("col-sm-4 text-center").css("margin-bottom", "3%");
        rowDiv.append(btnDiv);

        // <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
        let planetBtn = $("<button>").attr("type", "button").addClass("btn btn-info btn-lg").attr("data-toggle", "modal").attr("data-target", "#myModal");
        (btnDiv).append(planetBtn);

        // <img src="" alt="" class="img-thumbnail">
        let image = $("<img>").attr("src", imgSrc).attr("alt", planetName).addClass("img-thumbnail");
        planetBtn.append(image);

        // <p>Name</p>
        let planetP = $("<p>").text(planetName);
        planetBtn.append(planetP);

        // Modal  ===================================

        // <div class="modal fade" id="myModal" role="dialog">
        let modalDiv = $("<div>").addClass("modal fade").attr("id", "myModal").attr("role", "dialog");
        btnDiv.append(modalDiv);

        // <div class="modal-dialog modal-lg">
        let modalDialogue = $("<div>").addClass("modal-dialog modal-lg");
        modalDiv.append(modalDialogue);

        // <div class="modal-content">
        let modalContent = $("<div>").addClass("modal-content");
        modalDialogue.append(modalContent);

        // <div class="modal-header">
        let modalHeader = $("<div>").addClass("modal-header");
        modalContent.append(modalHeader);

        // <h4 class="modal-title"></h4>
        let modalTitle = $("<h4>").addClass("modal-title").text(planetArray[i].name);
        modalHeader.append(modalTitle);
        console.log(planetArray[i].name)

        // <button type="button" class="close btn btn-warning" data-dismiss="modal">&times;</button>
        let xButton = $("<button>").attr("type", "button").addClass("close btn btn-default btn-warning").attr("data-dismiss", "modal").html("&times;");
        modalHeader.append(xButton);

        // <div class="modal-body">
        let modalBody = $("<div>").addClass("modal-body");
        modalContent.append(modalBody);

        // <div class="row">
        let overviewRow = $("<div>").addClass("row");
        modalBody.append(overviewRow);

        // <div class="col-sm text-center">
        let overviewCol = $("<div>").addClass("col-sm text-center");
        overviewRow.append(overviewCol);

        // <p>Brief Overview</p>
        let overviewP = $("<p>").text("Brief Overview");
        overviewCol.append(overviewP);

        // <div class="row">
        let modalInfoRow = $("<div>").addClass("row");
        modalBody.append(modalInfoRow);

        // <div class="col-sm">
        let modalLeftCol = $("<div>").addClass("col-sm");
        modalInfoRow.append(modalLeftCol);

        // Image
        let modalImg = $("<img>").attr("src", imgSrc).attr("alt", planetName).addClass("img-thumbnail");
        modalLeftCol.append(modalImg);

        // <div class="col-sm text-center">
        let modalRightCol = $("<div>").addClass("col-sm text-center");
        modalInfoRow.append(modalRightCol);

        // <div class="row">
        let modalListRow = $("<div>").addClass("row");
        modalRightCol.append(modalListRow);

        // <div class="col-sm text-left">
        let modalListCol = $("<div>").addClass("col-sm text-left");
        modalListRow.append(modalListCol);

        // <ul>
        let modalList = $("<ul>");
        modalListCol.append(modalList);

        // <li>
        let modalListItem = $("<li>").text("Info");
        (modalList.append(modalListItem)) * 5;

        // <div class="row">
        let modalSelectRow = $("<div>").addClass("row");
        modalRightCol.append(modalSelectRow);

        // <div class="col-sm text-center">
        let modalSelectCol = $("<div>").addClass("col-sm text-center");
        modalSelectRow.append(modalSelectCol);

        // <button type="button" class="btn btn-success" style="margin-top: 20%;">Select</button>
        let modalSelectBtn = $("<button>").attr("type", "button").addClass("btn btn-success").css("margin-top", "20%").text("Select");
        modalSelectCol.append(modalSelectBtn);

    }
}






























// planetChoices.desert.dropDown.on("click", function () {
//     console.log("desert")
//     if (planetChoices.desert.menu.hidden = true) {
//         planetChoices.desert.menu.icon.show();
//         planetChoices.desert.menu.hidden = false;
//     }
//     planetChoices.frozen.menu.icon.hide();
//     planetChoices.frozen.menu.hidden = true
//     planetChoices.tropicalJungle.menu.icon.hide();
//     planetChoices.tropicalJungle.menu.hidden = true
//     planetChoices.forrest.menu.icon.hide();
//     planetChoices.forrest.menu.hidden = true
// })

// planetChoices.frozen.dropDown.on("click", function () {
//     console.log("frozen")
//     if (planetChoices.frozen.menu.hidden = true) {
//         planetChoices.frozen.menu.icon.show();
//         planetChoices.frozen.menu.hidden = false;
//     }
//     planetChoices.desert.menu.icon.hide();
//     planetChoices.desert.menu.hidden = true
//     planetChoices.tropicalJungle.menu.icon.hide();
//     planetChoices.tropicalJungle.menu.hidden = true
//     planetChoices.forrest.menu.icon.hide();
//     planetChoices.forrest.menu.hidden = true
// })

// planetChoices.tropicalJungle.dropDown.on("click", function () {
//     console.log("tropicalJungle")
//     if (planetChoices.tropicalJungle.menu.hidden = true) {
//         planetChoices.tropicalJungle.menu.icon.show();
//         planetChoices.tropicalJungle.menu.hidden = false;
//     }
//     planetChoices.desert.menu.icon.hide();
//     planetChoices.desert.menu.hidden = true
//     planetChoices.frozen.menu.icon.hide();
//     planetChoices.frozen.menu.hidden = true
//     planetChoices.forrest.menu.icon.hide();
//     planetChoices.forrest.menu.hidden = true
// })

// planetChoices.forrest.dropDown.on("click", function () {
//     console.log("forrest")
//     if (planetChoices.forrest.menu.hidden = true) {
//         planetChoices.forrest.menu.icon.show();
//         planetChoices.forrest.menu.hidden = false;
//     }
//     planetChoices.desert.menu.icon.hide();
//     planetChoices.desert.menu.hidden = true
//     planetChoices.frozen.menu.icon.hide();
//     planetChoices.frozen.menu.hidden = true
//     planetChoices.tropicalJungle.menu.icon.hide();
//     planetChoices.tropicalJungle.menu.hidden = true
// })

// $("#showAllBtn").on("click", function () {
//     for (let i = 0; i < planetChoiceArray.length; i++) {
//         if (planetChoiceArray[i].menu.hidden = true) {
//             planetChoiceArray[i].menu.hidden = false;
//             planetChoiceArray[i].menu.icon.show();
//         } else {
//             return
//         }
//     }
// })
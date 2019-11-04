const planets = [
    {
        name: "Tatooine",
        planetImg: "assets/images/planets/tatooine/planet.png"
    },
    {
        name: "Bespin",
        planetImg: "assets/images/planets/bespin/planet.png"
    },
    {
        name: "Geonosis",
        planetImg: "assets/images/planets/geonosis/planet.png"
    },
    {
        name: "Hoth",
        planetImg: "assets/images/planets/hoth/planet.png"
    },
    {
        name: "Coruscant",
        planetImg: "assets/images/planets/coruscant/planet.png"
    },
    {
        name: "Naboo",
        planetImg: "assets/images/planets/naboo/planet.png"
    },
    {
        name: "Kashyyyk",
        planetImg: "assets/images/planets/kashyyyk/planet.png"
    },
    {
        name: "Felucia",
        planetImg: "assets/images/planets/felucia/planet.png"
    },
    {

        name: "Dagobah",
        planetImg: "assets/images/planets/dagobah/planet.jpg",

    },
    {
        name: "Endor",
        planetImg: "assets/images/planets/endor/planet.png"
    },
    {
        name: "Yavin IV",
        planetImg: "assets/images/planets/yavin-IV/planet.png"
    }
]

planetSelection();

function planetSelection() {

    for (let i = 0; i < planets.length; i++) {

        let planetName = planets[i].name;
        let imgSrc = planets[i].planetImg;

        let mainRowDiv = $("#planetSelection");
        let btnDiv = $("<div>").addClass("col-sm-4 text-center").css("margin-bottom", "3%");
        let planetBtn = $("<button>").attr("type", "button").addClass("btn btn-info btn-lg").attr("data-toggle", "modal").attr("data-target", "#myModal");
        let image = $("<img>").attr("src", imgSrc).attr("alt", planetName).addClass("img-thumbnail");
        let planetP = $("<p>").text(planetName);
        let modalDiv = $("<div>").addClass("modal fade").attr("id", "myModal").attr("role", "dialog");
        let modalDialogue = $("<div>").addClass("modal-dialog modal-lg");
        let modalContent = $("<div>").addClass("modal-content");
        let modalHeader = $("<div>").addClass("modal-header");
        let modalTitle = $("<h4>").addClass("modal-title").text(planets[i].name);
        let xButton = $("<button>").attr("type", "button").addClass("close btn btn-default btn-warning").attr("data-dismiss", "modal").html("&times;");
        let modalBody = $("<div>").addClass("modal-body");
        let overviewRow = $("<div>").addClass("row");
        let overviewCol = $("<div>").addClass("col-sm text-center");
        let overviewP = $("<p>").text("Brief Overview");
        let modalInfoRow = $("<div>").addClass("row");
        let modalLeftCol = $("<div>").addClass("col-sm");
        let modalImg = $("<img>").attr("src", imgSrc).attr("alt", planetName).addClass("img-thumbnail");
        let modalRightCol = $("<div>").addClass("col-sm text-center");
        let modalListRow = $("<div>").addClass("row");
        let modalListCol = $("<div>").addClass("col-sm text-left");
        let modalList = $("<ul>");
        let modalListItem = $("<li>").text("Info");
        let modalSelectRow = $("<div>").addClass("row");
        let modalSelectCol = $("<div>").addClass("col-sm text-center");
        let modalSelectBtn = $("<button>").attr("type", "button").addClass("btn btn-success").css("margin-top", "20%").text("Select");

        // ======================================================================================================================================
        // Button
        // ======================================================================================================================================        

        // <div class="row" id="planetSelection">
        // <div class="col-sm-4 text-center" style="margin: 3%;">
        mainRowDiv.append(btnDiv);
        // <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
        (btnDiv).append(planetBtn);
        // <img src="" alt="" class="img-thumbnail">
        planetBtn.append(image);
        // <p>Name</p>
        planetBtn.append(planetP);

        // ======================================================================================================================================
        // Modal
        // ====================================================================================================================================== 

        // <div class="modal fade" id="myModal" role="dialog">
        btnDiv.append(modalDiv);
        // <div class="modal-dialog modal-lg">
        modalDiv.append(modalDialogue);
        // <div class="modal-content">
        modalDialogue.append(modalContent);
        // <div class="modal-header">
        modalContent.append(modalHeader);
        // <h4 class="modal-title"></h4>
        modalHeader.append(modalTitle);
        // console.log(planets[i].name)
        // <button type="button" class="close btn btn-warning" data-dismiss="modal">&times;</button>
        modalHeader.append(xButton);
        // <div class="modal-body">
        modalContent.append(modalBody);
        // <div class="row">
        modalBody.append(overviewRow);
        // <div class="col-sm text-center">
        overviewRow.append(overviewCol);
        // <p>Brief Overview</p>
        overviewCol.append(overviewP);
        // <div class="row">
        modalBody.append(modalInfoRow);
        // <div class="col-sm">
        modalInfoRow.append(modalLeftCol);
        // Image
        modalLeftCol.append(modalImg);
        // <div class="col-sm text-center">
        modalInfoRow.append(modalRightCol);
        // <div class="row">
        modalRightCol.append(modalListRow);
        // <div class="col-sm text-left">
        modalListRow.append(modalListCol);
        // <ul>
        modalListCol.append(modalList);
        // <li>
        modalList.append(modalListItem);
        // <div class="row">
        modalRightCol.append(modalSelectRow);
        // <div class="col-sm text-center">
        modalSelectRow.append(modalSelectCol);
        // <button type="button" class="btn btn-success" style="margin-top: 20%;">Select</button>
        modalSelectCol.append(modalSelectBtn);

    }
}
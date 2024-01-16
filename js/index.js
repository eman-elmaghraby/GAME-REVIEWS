import { DisplayGames } from "./displayGames.js";
import { Details } from "./details.js";

// Create an instance of DisplayGames
const showGame = new DisplayGames();

// Function to display games based on the category
function displayGamesByCategory(category) {
    showGame.display(category).then(data => {
        let displayGames = data;
        let displayInHome = document.querySelector(".row");
        let cols = "";

        for (let i = 0; i < displayGames.length; i++) {
            cols += generateCard(displayGames[i]);
        }

        // Update the displayInHome with the new games for the selected category
        displayInHome.innerHTML = cols;
        addCardEventListeners(displayGames);
    });
}

// Function to generate card HTML based on game data
function generateCard(game) {
    return `
    <div class="col-lg-4 col-md-6">
        <div role="button" class="card bg-transparent h-100">
            <div class="card-body mb-4">
                <figure class="position-relative">
                    <img class="card-img-top" src="${game.thumbnail}" alt="">
                </figure>
                <figcaption>
                    <div class="hstack justify-content-between">
                        <h6 class="small">${game.title}</h6>
                        <span class="text-bg-primary p-2 badge">Free</span>
                    </div>
                    <p class="small text-center card-text opacity-50">${game.short_description}</p>
                </figcaption>
            </div>
            <div class="card-footer small hstack justify-content-between">
                <span class="badge badge-color">${game.genre}</span>
                <span class="badge badge-color">${game.platform}</span>
            </div>
        </div>
    </div>`;
}

// Function to add click event listener to each card
function addCardEventListeners(displayGames) {
    let cards = document.querySelectorAll(".games .card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function () {
            document.querySelector(".games").style.display = "none";
            document.querySelector(".details").style.display = "block";

            // Create Details object inside the click event
            let showDetails = new Details();
            let id = displayGames[i].id;

            // Fetch details and then display
            showDetails.display(id).then(data => {
                let details = data;
                let displayDetails = document.querySelector(".detailsRow");
                let cols = `<div class="col-md-4">
                    <img src="${details.thumbnail}" class="w-100" alt="image-details">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${details.title}</h3>
                    <p>Category:
                        <span class="badge text-bg-info">${details.category}</span>
                    </p>
                    <p>Platform:
                        <span class="badge text-bg-info">${details.platform}</span>
                    </p>
                    <p>Status
                        <span class="badge text-bg-info">${details.status}</span>
                    </p>
                    <p class="small">
                        ${details.description}
                    </p>
                    <a href='${details.game_url}' class="btn btn-outline-warning text-white">Show Game</a>
                </div>`;

                displayDetails.innerHTML = cols;
            });
        });
    }
}

// Display initial games
displayGamesByCategory();

// Display Category 
let linkHeaders = document.querySelectorAll(".nav-link");
for (let i = 0; i < linkHeaders.length; i++) {
    linkHeaders[i].addEventListener("click", function(e) {
        let category = e.target.getAttribute("data-category");
        displayGamesByCategory(category);
    });
}

// Exit details section
let btnClose = document.querySelector(".btn-close");
btnClose.addEventListener("click", function() {
    document.querySelector(".games").style.display = "block";
    document.querySelector(".details").style.display = "none";
});

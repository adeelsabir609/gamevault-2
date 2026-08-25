const gamesContainer = document.getElementById("games");
const searchBox = document.getElementById("search");

let currentCategory = "All";


function displayGames(list) {

    gamesContainer.innerHTML = "";

    if (list.length === 0) {

        gamesContainer.innerHTML = `
            <p style="color:#aaa">
                No games found.
            </p>
        `;

        return;
    }


    list.forEach(game => {

        const card = document.createElement("div");

        card.className = "game-card";

        card.innerHTML = `

            <img
                class="game-image"
                src="${game.image}"
                alt="${game.title}"
            >

            <div class="game-info">

                <h3>${game.title}</h3>

                <div class="game-category">
                    ${game.category}
                </div>

                <div class="rating">
                    ⭐ ${game.rating}
                </div>

                <a
                    class="download"
                    href="${game.download}"
                    target="_blank"
                >
                    📥 Download
                </a>

            </div>

        `;

        gamesContainer.appendChild(card);

    });

}


function filterGames(category) {

    currentCategory = category;

    updateGames();

}


function updateGames() {

    const search =
        searchBox.value.toLowerCase().trim();


    let result = games.filter(game => {

        const categoryMatch =
            currentCategory === "All" ||
            game.category === currentCategory;

        const searchMatch =
            game.title.toLowerCase().includes(search);

        return categoryMatch && searchMatch;

    });


    displayGames(result);

}


searchBox.addEventListener(
    "input",
    updateGames
);


displayGames(games);
const categories = [
    "Action",
    "Adventure",
    "Racing",
    "Puzzle",
    "Sports"
];

const games = [];

for (let i = 1; i <= 2500; i++) {

    const category =
        categories[(i - 1) % categories.length];

    games.push({

        id: i,

        title: `${category} Game ${i}`,

        category: category,

        rating: (4 + Math.random()).toFixed(1),

        image:
            `https://picsum.photos/seed/game-${i}/800/450`,

        // Replace this with an authorized download URL
        download: "#"

    });

}

console.log(`Loaded ${games.length} games`);
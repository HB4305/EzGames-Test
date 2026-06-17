const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Function to wrap BookCard occurrences in a block with incrementing indices
function wrapBookCards(htmlBlock) {
    let index = 0;
    return htmlBlock.replace(/<BookCard([\s\S]*?)\/>/g, (match) => {
        let visibilityClass = "block";
        if (index === 2) visibilityClass = "hidden md:block";
        if (index >= 3) visibilityClass = "hidden lg:block";
        index++;
        return `<div className="${visibilityClass}">\n              ${match}\n          </div>`;
    });
}

// Extract the three grid sections and replace
content = content.replace(/<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">([\s\S]*?)<\/div>/g, (match, inner) => {
    return `<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">${wrapBookCards(inner)}</div>`;
});

fs.writeFileSync('src/pages/Home.jsx', content);
console.log("Updated Home.jsx");

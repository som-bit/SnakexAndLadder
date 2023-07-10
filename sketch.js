
let tiles = [];


let player;


function setup() {
    createCanvas(400, 400);

    // Size of tile, columns and rows
    let resolution = 40;
    let cols = width / resolution;
    let rows = height / resolution;

    // Create all the tiles from bottom to top
    let x = 0;
    let y = (rows - 1) * resolution;
    let dir = 1;
    for (let i = 0; i < cols * rows; i++) {
        let tile = new Tile(x, y, resolution, i, i + 1);
        tiles.push(tile);
        x = x + resolution * dir;
        // Move along a winding path up the rows
        if (x >= width || x <= -resolution) {
            dir *= -1;
            x += resolution * dir;
            y -= resolution;
        }
    }
}

function draw() {
    background(31)
    for (let tile of tiles) {
        tile.show();
    }
}
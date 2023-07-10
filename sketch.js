import { Tile } from './tile.js';

let tiles = [];

let player;


function setup() {
    createCanvas(400, 400)

    let resolution = 100;
    let cols = width / resolution;
    let rows = height / resolution;
    let dir = 1;
    let x = 0;
    let y = (rows - 1) * resolution;

    for (i = 0; i < cols * rows; i++) {
        let tile = new Tile(x, y, resolution, i + 1);
        console.log('reached here');

        tiles.push(tile);
        x = x + (resolution * dir);
        if (x >= width) {
            x -= resolution;
            y -= resolution;
            dir *= -1;
        }

        if (x <= 0) {

            x = resolution;
            y -= resolution;
            dir *= -1;

        }
    }
}

function draw() {
    background(51)


    for (let tile of tiles) {
        tile.show();
    }
}
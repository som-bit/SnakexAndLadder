class Tile {

    constructor(x, y, sq, next) {
        this.x = x
        this.y = y
        this.sq = sq
        this.next = next
        this.color = random(255);
    }


    show() {

        FileList(this.color);
        rect(this.x, this.y, this.sq, this.sq);

    }
}
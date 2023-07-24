class Tile {

    constructor(x, y, sq, index, next ) {
        this.x = x
        this.y = y
        this.sq = sq
        this.next = next
        this.index = index;
        if (this.index % 2 === 0) {
            this.color = 225;
        }
        else {
            this.color = 100;
        }
        
    }


    show() {

        fill(this.color);
        rect(this.x, this.y, this.sq, this.sq);
        //fill(255);
        //textSize(10);
        //text(this.index + '->' + this.next, this.x, this.y+this.sq);

    }

    getCenter() {
        let cx = this.x + this.sq / 2;
        let cy = this.y + this.sq / 2;
        return [cx, cy];

    }
}
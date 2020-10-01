class Drop{
    constructor(x,y){
        this.xPosition = x;
        this.yPosition = y;
        this.radius = random(20,30)
        this.image = loadImage("images/drop.jpg")
    }

    display(){
        image(this.image, this.xPosition,this.yPosition, this.radius,this.radius)
    }
    fall(){
        this.yPosition = this.yPosition + random(2,5)

        if( this.yPosition > height){
            this.yPosition = 0;
        }
    }
}
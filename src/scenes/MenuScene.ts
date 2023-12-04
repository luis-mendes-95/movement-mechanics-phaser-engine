import { CST } from "../../src/CST"


//calling scene class to render a scene in game
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }


    //preload functions
    preload(){

    }


    //on begin play
    create(){


        //add background and sprites in screen
        this.add.image(0,0, "title_bg").setOrigin(0).setScale(0.50).setDepth(0);
        let startButton = this.add.image(300,200, "startButton").setOrigin(0).setScale(0.25).setDepth(0);
        let hoverSprite = this.add.sprite(200, 100, "butterfly").setOrigin(0).setScale(1).setVisible(false);


        //create audio
        //this.sound.pauseOnBlur = false;
        //this.sound.play("title_music", {
        //    loop: true
        //})


        //create animation for a sprite
        this.anims.create({
            key: "fly",
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("butterfly", {
                frames: [0, 1, 2]
            })
        })
                
        //set a invisible sprite to visible when hovering this element
        startButton.setInteractive();
        //event pointerover (mouse in)
        startButton.on("pointerover", ()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play("fly");
            hoverSprite.x = startButton.x - 80;
            hoverSprite.y = startButton.y + 15;

        })
        //event pointerout (mouse out)
        startButton.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
        })
        //event pointerup (clicked)
        startButton.on("pointerup", ()=>{
            this.scene.start(CST.SCENES.PLAY)
        })




    }

}
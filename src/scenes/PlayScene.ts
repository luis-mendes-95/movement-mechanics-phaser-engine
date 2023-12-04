// @ts-nocheck
import { CST } from "../CST";


//calling scene class to render a scene in game
export class PlayScene extends Phaser.Scene {

    constructor() {
        super({ 
            key: CST.SCENES.PLAY
        });
        
    }



    preload(){

/**CHARACTER SPRITES STUFF**********************************************************************/

        /**HOODED CHARACTER */
        //add textures from atlas into screen
        this.textures.addSpriteSheetFromAtlas("hooded", {frameHeight: 64, frameWidth: 64, atlas: "characters", frame: "hooded"});
        //create sprite animation idle
        this.anims.create({
            key: "idle",
            frameRate: 10,
            frames: this.anims.generateFrameNames("hooded", {
                frames: [234],
            }),
            repeat: false
        });
        //create sprite animation walk right
        this.anims.create({
            key: "right",
            frameRate: 10,
            frames: this.anims.generateFrameNames("hooded", {
                frames: [143, 144, 145, 146, 147, 148, 149, 150, 151],
            }),
            repeat: -1
        });
        //create sprite animation walk left
        this.anims.create({
            key: "left",
            frameRate: 10,
            frames: this.anims.generateFrameNames("hooded", {
                frames: [117, 118, 119, 120, 121, 122, 123, 124, 125],
            }),
            repeat: -1
        });
        //create sprite animation walk fwd
        this.anims.create({
            key: "fwd",
            frameRate: 10,
            frames: this.anims.generateFrameNames("hooded", {
                frames: [104, 105, 106, 107, 108, 109, 110, 111, 112],
            }),
            repeat: -1
        });
        //create sprite animation walk bwd
        this.anims.create({
            key: "bwd",
            frameRate: 10,
            frames: this.anims.generateFrameNames("hooded", {
                frames: [130, 131, 132, 133, 134, 135, 136, 137, 138],
            }),
            repeat: -1
        });
     

/**VISUAL EFFECTS SPRITES STUFF**********************************************************************/




        //prints the current engine textures list
        console.log(this.textures.list)






        //create sprite aniimation for magic attack effect
        this.anims.create({
            key: "dazzle",
            frameRate: 20,
            frames: this.anims.generateFrameNames("daze", {
                prefix: "daze0",
                suffix: ".png",
                start: 0,
                end: 41,
                //frames: [0,1,2,3,4,5]
            }),
            repeat: false,
        });

    }

    create() {


        //declares a new variable for a sprite from an atlas and plays an existing animation
        this.hooded = this.physics.add.sprite(200, 200, "hooded").setScale(2).play("right");


        //turn all these variables into global accessible
        window.hooded = this.hooded;
        window.anna = this.anna;
        window.pimple = this.pimple;


        /**
         * gameobject events:
         * animationstart
         * animationrepeat
         * animationupdate
         * animationcomplete
         */

        //event animation update
        //pimple.on("animationupdate", () => {
        //    console.log("Animation is updating")
        //})
        ////event animation update
        //pimple.on("animationrepeat", () => {
        //    console.log("Animation just restarted")
        //})



        //configures KEYBOARD controllers
        this.keyboard = this.input.keyboard.addKeys("W, A, S, D");

        //configures MOUSE controllers
        this.input.on("pointermove", (pointer: Phaser.Input.Pointer)=>{ //event mouse move
            if(pointer.isDown){ //is clicking
                let dazzle = this.add.sprite(pointer.x, pointer.y, "daze").play("dazzle");
                dazzle.on("animationcomplete", () => {
                    dazzle.destroy();
                })
            }
        })
    }



    update(time: number, delta: number){ //delta 16.666 @ 60fps

        if (this.keyboard.D.isDown){
            this.hooded.setVelocityX(64);
            this.hooded.play("right", true);
        }
        
        if (this.keyboard.A.isDown){
            this.hooded.setVelocityX(-64);
            this.hooded.play("left", true);
        }

        if (this.keyboard.S.isDown){
            this.hooded.setVelocityY(64);
            this.hooded.play("bwd", true);
        } 
        if (this.keyboard.W.isDown){
            this.hooded.setVelocityY(-64);
            this.hooded.play("fwd", true);
        } 
        if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
            this.hooded.setVelocityX(0);
        } 
        if (this.keyboard.W.isUp && this.keyboard.S.isUp) {
            this.hooded.setVelocityY(0);
        } 


    }
}
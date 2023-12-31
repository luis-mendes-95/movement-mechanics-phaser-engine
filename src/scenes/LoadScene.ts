import Phaser from "phaser";
import { CST } from "./../CST"
import { MenuScene } from "./MenuScene"


//calling scene class to render a scene in game
export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }


    //preload functions
    preload(){


        //import assets - images
        this.load.image("title_bg", "assets/img/backgrounds/title_bg.jpg");
        this.load.image("startButton", "assets/img/buttons/startButton.png");
        //spritesheets
        this.load.spritesheet("butterfly", "assets/sprites/butterfly.svg", {frameHeight: 52, frameWidth: 78});
        this.load.spritesheet("anna", "assets/sprites/anna.png", {frameHeight: 64, frameWidth: 64});
        //load sprite sheet atlas
        this.load.atlas("characters", "assets/sprites/characters.png","./assets/sprites/characters.json");
        this.load.atlas("daze", "assets/sprites/daze.png","./assets/sprites/daze.json");
        //audio
        this.load.audio("title_music", "assets/sounds/music/title_music.mp3");



        //declares loading bar
        let loadingBar = this.add.graphics({fillStyle: {color: 0xfffffff}})
        //simulate a loadingbar
        for(let i = 0; i < 5; i++){this.load.audio("title_music" + i, "../sounds/music/title_music.mp3");}
        //event progress
        this.load.on("progress", (percent: number)=>{//manage load events when in progress
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
        })
        //event complete
        this.load.on("complete", ()=>{//manage load events when done
            this.scene.start(CST.SCENES.MENU)
        })
        //event load
        this.load.on("load", (file: Phaser.Loader.File) => {//manage when a loading file event is done
            //console.log(file.src)
        })



        
    }

    create(){


    }
}
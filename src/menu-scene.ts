import 'phaser';
// import particleUrl from '../assets/particle.png';
import unicornUrl from '../assets/unicorn.png';

export class MenuScene extends Phaser.Scene {
  private startKey!: Phaser.Input.Keyboard.Key;

  constructor() {
    super({
      key: 'MenuScene'
    });
  }

  private currentChar = ''
  private startText!: Phaser.GameObjects.Text; 
  private letterText!: Phaser.GameObjects.Text; 
  private score = 0;
  private scoreText!: Phaser.GameObjects.Text;

  getRandomLetter(excludeChar:string):string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".replace(excludeChar,'')
    let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    return randomCharacter
  }
  

  preload(): void {
    console.log("preloading menu scene");
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.startKey.isDown = false;
    this.load.image('unicorn', unicornUrl);
    // this.load.audio('gasp', gaspUrl);
  }

  create(): void {
    this.scoreText = this.add.text(16, 16, 'Letters count: ' + this.score, { fontSize: '60px', fontFamily: "Helvetica" });    
    this.letterText = this.add.text(300, 200, this.currentChar, { fontSize: '300px', fontFamily: "Helvetica", align: 'center'});
    this.startText = this.add.text(100, 300, "Press SPACE to start" , {
      fontSize: '60px',
      fontFamily: "Helvetica",
    });

    
    // this.add.image(400, 300, 'unicorn');

  }

  update(): void {
    if (this.startKey.isDown) {
      this.startText.destroy();
      this.score += 1;
      this.scoreText.setText('Letters count: ' + this.score);

      this.currentChar = this.getRandomLetter(this.currentChar)
      this.letterText.setText(this.currentChar.toUpperCase());
      

      this.startKey.isDown = false;
      // this.scene.start(this);
    }

    // for (let i = 0; i < this.sprites.length; i++) {
    //     const sprite = this.sprites[i].s;

    //     sprite.y -= this.sprites[i].r;

    //     if (sprite.y < -256)
    //     {
    //         sprite.y = 700;
    //     }
    // }

  }
}
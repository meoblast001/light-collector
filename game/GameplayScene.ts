import * as ex from 'excalibur';
import Player from './Player';

export default class GameplayScene extends ex.Scene {
    public static readonly Name = "GameplayScene";

    private player: Player;

    public onInitialize(engine: ex.Engine) {
        this.camera = new ex.BaseCamera();
        this.player = new Player();
        this.add(this.player);
    }

    public onActivate() { }

    public onDeactivate() { }
}

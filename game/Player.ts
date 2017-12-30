import * as ex from 'excalibur';
import Resources, { RID } from './Resources';

export default class Player extends ex.Actor {
    public static readonly NumDirections = 8;
    public static readonly RotationSegment = 2 * Math.PI / Player.NumDirections;

    private directionIndex: number;

    public onInitialize(engine: ex.Engine) {
        this.directionIndex = 0;
        this.addDrawing(Resources[RID.TexturePlayer] as ex.Texture);
    }

    public update(engine: ex.Engine, delta: number) {
        if (engine.input.keyboard.wasPressed(ex.Input.Keys.Left)) {
            this.directionIndex
                = modulo(this.directionIndex - 1, Player.NumDirections);
        }

        if (engine.input.keyboard.wasPressed(ex.Input.Keys.Right)) {
            this.directionIndex
                = modulo(this.directionIndex + 1, Player.NumDirections);
        }

        this.rotation = this.directionIndex * Player.RotationSegment;
    }
}

// Modulo which cycles to positive when dividend is negative.
function modulo(dividend: number, divisor: number) {
    return ((dividend % divisor) + divisor) % divisor;
}

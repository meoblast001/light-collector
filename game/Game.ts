import * as ex from 'excalibur';
import Resources from './Resources';

const Game = new ex.Engine({
  canvasElementId: 'game-area',
});

const Loader = new ex.Loader();

Game.start(Loader);

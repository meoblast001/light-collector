import * as ex from 'excalibur';

export enum RID {
  TexturePlayer,
}

const Resources: { [id: string]: ex.ILoadable } = { };
Resources[RID.TexturePlayer] = new ex.Texture("assets/textures/player.png");

export default Resources;

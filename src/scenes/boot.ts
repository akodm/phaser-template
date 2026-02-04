import { Scene } from 'phaser';
import { SCENE_KEYS } from '../config/scene';

export class Boot extends Scene {
  constructor() {
    super({ key: SCENE_KEYS.BOOT });
  }

  init() { }

  preload() { }

  create() { }

  update() { }
}

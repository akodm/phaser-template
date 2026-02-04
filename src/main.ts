import { AUTO, Game } from 'phaser';
import { Boot } from './scenes/boot';
import { DEBUG } from './config/scene';

const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#028af8',
  scene: [Boot],
  physics: {
    default: 'arcade',
    arcade: {
      debug: DEBUG,
    },
  },
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
